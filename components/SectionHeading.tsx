"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const reduce = useReducedMotion();
  const base = reduce ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };
  return (
    <motion.div
      {...base}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl">{title}</h2>
      {description && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
