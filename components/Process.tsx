"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", title: "Discover", desc: "Understand the business, users, requirements and goals." },
  { n: "02", title: "Plan", desc: "Define architecture, technology, scope and delivery strategy." },
  { n: "03", title: "Design", desc: "Create intuitive interfaces and product experiences." },
  { n: "04", title: "Build", desc: "Develop, test and integrate the solution using modern engineering practices." },
  { n: "05", title: "Launch & Evolve", desc: "Deploy, monitor, optimize and continuously improve." },
];

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section id="process" className="relative border-y border-line bg-navy-900/60">
      <div className="section">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A clear path from <span className="text-accent-cyan">idea to impact.</span>
            </>
          }
        />

        <ol className="relative mt-16 flex flex-col gap-10 md:mt-24 md:flex-row md:gap-0">
          {/* connector line */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-blue via-accent-cyan/50 to-transparent md:left-0 md:right-[10%] md:top-[7px] md:h-px md:w-[calc(100%-0rem)] md:bg-gradient-to-r"
          />
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex gap-6 pl-0 md:flex-1 md:flex-col md:pl-0 md:pr-10"
            >
              <span className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center md:mt-0">
                <span className="h-3 w-3 rounded-full border border-accent-cyan bg-navy-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              </span>
              <div>
                <span className="font-mono text-xs text-accent-blue">{s.n}</span>
                <h3 className="mt-1 text-lg font-semibold text-ink md:text-xl">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
