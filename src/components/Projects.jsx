import { FiArrowUpRight, FiCheck, FiGithub, FiServer } from "react-icons/fi";
import { projects } from "../data";
import { Reveal, SectionHeading, TiltCard } from "./ui";

function Cover({ project, big }) {
  const [a, b] = project.gradient;
  return (
    <div className={`cover ${big ? "cover-big" : ""}`} style={{ "--ca": a, "--cb": b }}>
      {project.image ? (
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      ) : (
        <div className="cover-art" aria-hidden="true">
          <span className="cover-emoji">{project.emoji}</span>
          <span className="cover-grid" />
        </div>
      )}
    </div>
  );
}

function Links({ project }) {
  return (
    <div className="project-links">
      <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-small btn-primary">
        {project.liveLabel || "Live demo"} <FiArrowUpRight />
      </a>
      <a href={project.code} target="_blank" rel="noreferrer" className="btn btn-small btn-ghost">
        <FiGithub /> {project.codeBackend ? "Frontend" : "Code"}
      </a>
      {project.codeBackend && (
        <a href={project.codeBackend} target="_blank" rel="noreferrer" className="btn btn-small btn-ghost">
          <FiServer /> Backend
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section container">
      <SectionHeading eyebrow="03 — Projects" title="Things I've built">
        A full-stack AI platform built end to end — from vision models to the UI.
      </SectionHeading>

      {featured && (
        <Reveal>
          <TiltCard className="card featured" max={5}>
            <Cover project={featured} big />
            <div className="featured-body">
              <span className="eyebrow">Featured · AI project</span>
              <h3>
                {featured.title} <span className="muted">— {featured.subtitle}</span>
              </h3>
              <p>{featured.description}</p>
              <ul className="highlights">
                {featured.highlights.map((h) => (
                  <li key={h}>
                    <FiCheck /> {h}
                  </li>
                ))}
              </ul>
              <div className="chips">
                {featured.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <Links project={featured} />
            </div>
          </TiltCard>
        </Reveal>
      )}

      {rest.length > 0 && (
      <div className="project-grid">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <TiltCard className="card project">
              <Cover project={p} />
              <div className="project-body">
                <h3>{p.title}</h3>
                <span className="project-sub">{p.subtitle}</span>
                <p>{p.description}</p>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <Links project={p} />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      )}

      <Reveal className="center">
        <a href="https://github.com/vinaykumar7580?tab=repositories" target="_blank" rel="noreferrer" className="btn btn-outline">
          <FiGithub /> More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
