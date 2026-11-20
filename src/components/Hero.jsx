import { Component, Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";
import { useMediaQuery } from "../hooks";

const HeroScene = lazy(() => import("./HeroScene"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch {
    return false;
  }
}

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

const FallbackOrb = () => <div className="hero-fallback" aria-hidden="true" />;

function useTypewriter(words, reduced) {
  const [text, setText] = useState(reduced ? words[0] : "");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[i % words.length];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduced]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduced = useReducedMotion();
  const compact = useMediaQuery("(max-width: 900px)");
  const role = useTypewriter(profile.roles, reduced);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [webgl] = useState(() => hasWebGL());

  // Stop rendering the 3D scene when the hero is off screen (saves battery/GPU).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-scene" aria-hidden="true">
        {webgl ? (
          <SceneBoundary fallback={<FallbackOrb />}>
            <Suspense fallback={<FallbackOrb />}>
              <HeroScene active={visible} reduced={!!reduced} compact={compact} />
            </Suspense>
          </SceneBoundary>
        ) : (
          <FallbackOrb />
        )}
      </div>

      <motion.div className="hero-content container" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="badge">
          <span className="pulse-dot" /> Open to new opportunities
        </motion.div>

        <motion.h1 variants={item} className="hero-title">
          Hi, I'm <span className="gradient-text">{profile.firstName}</span>
          <br />
          I build products that <em>scale</em>.
        </motion.h1>

        <motion.p variants={item} className="hero-role" aria-label={profile.roles.join(", ")}>
          <span className="mono">&gt;</span> {role}
          <span className="caret" aria-hidden="true" />
        </motion.p>

        <motion.p variants={item} className="hero-sub">
          Nearly 3 years crafting healthcare &amp; enterprise apps with React, Next.js and Node.js —
          now building AI-powered features with LangChain and RAG.
        </motion.p>

        <motion.div variants={item} className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer" download>
            <FiDownload /> Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <FiArrowDown />
      </a>
    </section>
  );
}
