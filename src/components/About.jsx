import { FiAward, FiBookOpen, FiMapPin } from "react-icons/fi";
import { certifications, education, profile, stats } from "../data";
import { Counter, Reveal, SectionHeading, TiltCard } from "./ui";

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading eyebrow="01 — About" title="Engineer who ships end to end" />

      <div className="about-grid">
        <Reveal className="about-photo-wrap">
          <TiltCard className="about-photo" max={14}>
            <img src={profile.avatar} alt={profile.name} loading="lazy" width="420" height="420" />
            <div className="about-photo-tag">
              <FiMapPin /> {profile.location}
            </div>
          </TiltCard>
        </Reveal>

        <div className="about-text">
          <Reveal>
            <p className="lead">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Day to day I move between database schemas, REST APIs, cron-driven automations and polished Next.js
              dashboards. I care about clean architecture, fast interfaces and features that real users actually
              rely on — from medication reminders to corporate wellness programmes.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="about-cards">
            <div className="mini-card">
              <FiBookOpen />
              <div>
                <strong>{education.degree}</strong>
                <span>
                  {education.school} · {education.period}
                </span>
              </div>
            </div>
            {certifications.map((c) => (
              <div className="mini-card" key={c.title}>
                <FiAward />
                <div>
                  <strong>{c.title}</strong>
                  <span>{c.issuer}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="stat">
            <span className="stat-value gradient-text">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </span>
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
