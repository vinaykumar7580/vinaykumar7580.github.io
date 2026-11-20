import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data";
import { useActiveSection } from "../hooks";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const ids = ["home", ...links.map((l) => l.id)];

export default function Navbar() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <motion.div className="nav-progress" style={{ scaleX: progress }} />
      <nav className="nav-inner container" aria-label="Main">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">V</span>
          <span className="logo-text">
            vinay<span className="gradient-text">.dev</span>
          </span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "active" : ""}
                aria-current={active === l.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav-resume-mobile">
            <a href={profile.resume} target="_blank" rel="noreferrer" download className="btn btn-primary">
              <FiDownload /> Resume
            </a>
          </li>
        </ul>

        <a href={profile.resume} target="_blank" rel="noreferrer" download className="btn btn-small btn-outline nav-resume">
          <FiDownload /> Resume
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
}
