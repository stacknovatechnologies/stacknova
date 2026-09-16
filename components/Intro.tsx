"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Intro() {
  const reduce = useReducedMotion();
  return (
    <section id="intro" className="relative border-t border-line">
      <div className="section max-w-5xl !py-32 md:!py-44">
        <motion.span
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Engineering with Purpose
        </motion.span>
        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display mt-8 text-4xl md:text-6xl lg:text-[4.5rem]"
        >
          Technology should solve <span className="text-accent-cyan">business problems</span> —
          not create new ones.
        </motion.h2>
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 max-w-2xl text-base leading-relaxed text-muted md:text-xl"
        >
          StackNova Technologies helps businesses transform ideas into reliable digital products
          through modern engineering, thoughtful design, and scalable technology.
        </motion.p>
      </div>
    </section>
  );
}
