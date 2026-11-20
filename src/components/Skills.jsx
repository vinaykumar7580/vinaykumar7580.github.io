import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { profile, skillGroups } from "../data";
import { Reveal, SectionHeading } from "./ui";

const accents = ["#7c5cff", "#22d3ee", "#f472b6", "#a3e635", "#fbbf24", "#60a5fa"];

/** A 3D rotating sphere of skill tags, drawn with CSS transforms and steered by the pointer. */
function SkillSphere({ tags }) {
  const wrap = useRef(null);
  const items = useRef([]);
  const reduced = useReducedMotion();

  const points = useMemo(() => {
    const n = tags.length;
    return tags.map((t, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return {
        ...t,
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      };
    });
  }, [tags]);

  useEffect(() => {
    const el = wrap.current;
    let raf;
    let running = true;
    let ax = 0.0016;
    let ay = 0.0024;
    let target = { x: ax, y: ay };
    const pos = points.map((p) => ({ x: p.x, y: p.y, z: p.z }));

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      target = { x: -dy * 0.02, y: dx * 0.02 };
    };
    const onLeave = () => (target = { x: 0.0016, y: 0.0024 });

    const render = () => {
      const radius = el.clientWidth * 0.4;
      ax += (target.x - ax) * 0.05;
      ay += (target.y - ay) * 0.05;
      const speed = reduced ? 0.2 : 1;
      const sx = Math.sin(ax * speed), cx = Math.cos(ax * speed);
      const sy = Math.sin(ay * speed), cy = Math.cos(ay * speed);

      pos.forEach((p, i) => {
        // rotate around X then Y
        const y1 = p.y * cx - p.z * sx;
        const z1 = p.y * sx + p.z * cx;
        const x2 = p.x * cy + z1 * sy;
        const z2 = -p.x * sy + z1 * cy;
        p.x = x2;
        p.y = y1;
        p.z = z2;

        const node = items.current[i];
        if (!node) return;
        const scale = (p.z + 2) / 3; // 0.33..1
        node.style.transform = `translate(-50%, -50%) translate3d(${p.x * radius}px, ${p.y * radius}px, 0) scale(${scale})`;
        node.style.opacity = String(0.25 + scale * 0.75);
        node.style.zIndex = String(Math.round(scale * 100));
        node.style.filter = p.z < -0.3 ? "blur(1px)" : "none";
      });
      if (running) raf = requestAnimationFrame(render);
    };

    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(render);
    });
    io.observe(el);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [points, reduced]);

  return (
    <div className="sphere" ref={wrap} aria-hidden="true">
      <div className="sphere-glow" />
      {points.map((p, i) => (
        <span key={p.label} ref={(n) => (items.current[i] = n)} className="sphere-tag" style={{ "--c": p.color }}>
          {p.label}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  const tags = useMemo(
    () =>
      skillGroups.flatMap((g, gi) => g.items.map((label) => ({ label, color: accents[gi % accents.length] }))),
    []
  );

  return (
    <section id="skills" className="section container">
      <SectionHeading eyebrow="04 — Skills" title="My toolkit">
        Hover the sphere to spin it.
      </SectionHeading>

      <div className="skills-grid">
        <Reveal className="sphere-wrap">
          <SkillSphere tags={tags} />
        </Reveal>

        <div className="skill-groups">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} className="card skill-group" >
              <h3 style={{ "--c": accents[i % accents.length] }}>{g.title}</h3>
              <div className="chips">
                {g.items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="card github-card">
        <div className="github-head">
          <h3>GitHub activity</h3>
          <a href={profile.github} target="_blank" rel="noreferrer" className="mono">
            @{profile.githubUser}
          </a>
        </div>
        <div className="github-calendar">
          <GitHubCalendar
            username={profile.githubUser}
            blockRadius={3}
            blockSize={12}
            blockMargin={4}
            fontSize={13}
            theme={{
              level0: "#1a1a2e",
              level1: "#3b2a7a",
              level2: "#5a3fd0",
              level3: "#7c5cff",
              level4: "#22d3ee",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
