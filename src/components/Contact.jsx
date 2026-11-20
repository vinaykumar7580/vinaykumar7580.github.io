import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { emailjs as keys, profile } from "../data";
import { Reveal, SectionHeading } from "./ui";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.sendForm(keys.service, keys.template, form.current, keys.publicKey);
      setStatus("sent");
      form.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const channels = [
    { icon: <FiMail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <FiPhone />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <FiLinkedin />, label: "LinkedIn", value: "vinaykumar-hatwar", href: profile.linkedin },
    { icon: <FiGithub />, label: "GitHub", value: profile.githubUser, href: profile.github },
  ];

  return (
    <section id="contact" className="section container">
      <SectionHeading eyebrow="05 — Contact" title="Let's build something together">
        Have a role, a project or just want to say hi? My inbox is always open.
      </SectionHeading>

      <div className="contact-grid">
        <Reveal className="contact-info">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="card channel"
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className="channel-icon">{c.icon}</span>
              <span>
                <small>{c.label}</small>
                <strong>{c.value}</strong>
              </span>
            </a>
          ))}
          <p className="contact-location">
            <FiMapPin /> {profile.location}, India
          </p>
        </Reveal>

        <Reveal delay={0.1} className="card contact-form-card">
          {status === "sent" ? (
            <div className="form-success" role="status">
              <FiCheckCircle />
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — I'll get back to you soon.</p>
              <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                Send another
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={onSubmit} className="contact-form">
              <div className="field">
                <input id="name" name="user_name" required placeholder=" " autoComplete="name" />
                <label htmlFor="name">Your name</label>
              </div>
              <div className="field">
                <input id="email" name="user_email" type="email" required placeholder=" " autoComplete="email" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="field">
                <input id="subject" name="subject" required placeholder=" " />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="field">
                <textarea id="message" name="message" rows="5" required placeholder=" " />
                <label htmlFor="message">Message</label>
              </div>
              {status === "error" && (
                <p className="form-error" role="alert">
                  Something went wrong. Please email me directly at {profile.email}.
                </p>
              )}
              <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : (
                  <>
                    Send message <FiSend />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
