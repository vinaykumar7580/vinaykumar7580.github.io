import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { experience } from "../data";
import { Reveal, SectionHeading } from "./ui";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="section container">
      <SectionHeading eyebrow="02 — Experience" title="Where I've been building">
        Production work on healthcare, wellness and billing platforms.
      </SectionHeading>

      <div className="timeline" ref={ref}>
        <div className="timeline-track" aria-hidden="true">
          <motion.div className="timeline-fill" style={{ scaleY }} />
        </div>

        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05} className="timeline-item">
            <span className={`timeline-dot ${job.current ? "current" : ""}`} aria-hidden="true">
              <FiBriefcase />
            </span>
            <article className="card job">
              <header className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-company">
                    {job.company}
                    {job.current && <span className="chip chip-live">Current</span>}
                  </p>
                </div>
                <div className="job-meta">
                  <span className="mono">{job.period}</span>
                  <span>
                    <FiMapPin /> {job.location}
                  </span>
                </div>
              </header>
              <ul className="job-points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="chips">
                {job.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
