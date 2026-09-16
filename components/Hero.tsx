"use client";

import { motion, useReducedMotion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

const lines = [
  { text: "WE BUILD", accent: false },
  { text: "TECHNOLOGY", accent: true },
  { text: "THAT MOVES", accent: false },
  { text: "BUSINESSES", accent: false },
  { text: "FORWARD.", accent: true },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* background layers */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-40 left-1/4 h-[560px] w-[560px] rounded-full bg-accent-blue/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-accent-cyan/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#070B14_85%)]" />
        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0"
        >
          <NetworkBackground />
        </motion.div>
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-36 md:px-10 md:pt-40">
        <div className="max-w-4xl">
          <motion.p
            initial={reduce ? undefined : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="eyebrow"
          >
            StackNova Technologies
          </motion.p>

          <h1 className="display mt-7 text-[clamp(2.4rem,5.2vw,4.75rem)] leading-[1.05]">
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${line.accent ? "bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent" : ""}`}
                  initial={reduce ? undefined : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            From idea to scalable digital product — we combine technical expertise, modern
            engineering practices, and business thinking to build technology that creates
            measurable value.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Start a Project
            </a>
            <a href="#services" className="btn-ghost">
              Explore Our Services
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </motion.div>

          {/* trust row */}
          <motion.dl
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35, ease }}
            className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8 md:mt-16"
          >
            {[
              ["6+", "Core service areas"],
              ["Full-cycle", "Idea → Design → Deploy"],
              ["100%", "Business-focused delivery"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-xl font-bold tracking-tight text-ink md:text-2xl">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-eyebrow text-muted [writing-mode:vertical-lr]">
          Scroll
        </span>
        <span className="flex h-14 w-6 items-start justify-center rounded-full border border-line p-1.5">
          <span className="h-1.5 w-1 animate-scroll-hint rounded-full bg-accent-cyan" />
        </span>
      </motion.a>
    </section>
  );
}
