"use client";

import { motion, useReducedMotion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

export default function CTA() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/15 blur-[140px]" />
        <NetworkBackground density={0.6} />
      </div>

      <div className="section relative !py-32 text-center md:!py-44">
        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="display mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl"
        >
          Have an idea? <br />
          <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
            Let&apos;s build what&apos;s next.
          </span>
        </motion.h2>
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          Tell us what you&apos;re building, what you&apos;re trying to solve, or where your
          existing product needs to go next.
        </motion.p>
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
          <a href="#contact" className="btn-ghost">
            Contact StackNova
          </a>
        </motion.div>
      </div>
    </section>
  );
}
