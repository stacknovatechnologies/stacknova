"use client";

import { motion, useReducedMotion } from "framer-motion";

const stages = ["IDEA", "DESIGN", "ENGINEERING", "DEPLOYMENT", "GROWTH"];

const capabilities = [
  "Build from scratch",
  "Improve an existing product",
  "Build internal business systems",
  "Modernize legacy applications",
  "Integrate APIs and third-party services",
  "Deploy scalable cloud infrastructure",
];

export default function Solutions() {
  const reduce = useReducedMotion();
  return (
    <section id="solutions" className="relative border-y border-line bg-navy-900/60">
      <div className="section">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Built for Real-World Needs</span>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl">
            From ambitious ideas <br className="hidden md:block" />
            to <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">reliable products.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Every engagement sits at a different point on the journey. Wherever you are —
            a blank page or a product that needs to move forward — StackNova plugs in at the
            right stage.
          </p>
        </motion.div>

        {/* stage flow */}
        <div className="mt-16 flex flex-col items-stretch gap-0 md:mt-20 md:flex-row md:items-stretch md:justify-between">
          {stages.map((s, i) => (
            <motion.div
              key={s}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-start md:flex-1"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/40 [animation-duration:3s]" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                </span>
                <span className="text-sm font-semibold tracking-[0.2em] text-ink md:mt-6 md:text-base">
                  {s}
                </span>
              </div>
              <span className="ml-1.5 my-3 h-8 w-px bg-gradient-to-b from-accent-cyan/60 to-transparent md:mx-1.5 md:my-4 md:h-px md:w-auto md:flex-1 md:self-stretch md:bg-gradient-to-r" />
              <span className="font-mono text-xs text-muted/70 md:mt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>

        {/* capabilities */}
        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.li
              key={c}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-4 bg-navy-950 px-6 py-6 transition-colors duration-300 hover:bg-navy-800"
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-blue transition-colors duration-300 group-hover:text-accent-cyan">
                <path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <span className="text-sm text-ink/90 md:text-[15px]">{c}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
