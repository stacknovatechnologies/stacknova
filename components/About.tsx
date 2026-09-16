"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const values = [
  { n: "01", label: "Quality" },
  { n: "02", label: "Innovation" },
  { n: "03", label: "Transparency" },
  { n: "04", label: "Long-Term Partnerships" },
];

export default function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative">
      <div className="section">
        <SectionHeading
          eyebrow="About StackNova"
          title={
            <>
              We don&apos;t just build software. We build technology that{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
                helps businesses grow.
              </span>
            </>
          }
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-base leading-relaxed text-muted md:text-lg"
          >
            <p>
              StackNova Technologies is a technology startup delivering modern, scalable, and
              business-focused digital solutions for startups, businesses, and organizations.
            </p>
            <p>
              We help clients transform ideas into reliable digital products through web
              development, software engineering, UI/UX, cloud technologies, and customized
              technology solutions.
            </p>
            <p>
              Our approach combines technical expertise, modern development practices, and a
              strong understanding of business requirements to deliver solutions that are
              practical, scalable, and built for long-term growth.
            </p>
            <p>
              From building digital products from the ground up to improving and modernizing
              existing solutions, we work closely with our clients to understand their goals,
              solve complex challenges, and deliver technology that creates measurable value.
            </p>
            <p className="text-ink">
              At StackNova Technologies, our focus is on quality, innovation, transparency, and
              long-term partnerships.
            </p>
          </motion.div>

          <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={reduce ? undefined : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group flex flex-1 items-center gap-6 bg-navy-950 px-8 py-7 transition-colors duration-300 hover:bg-navy-800"
              >
                <span className="font-mono text-sm text-accent-cyan">{v.n}</span>
                <span className="text-lg font-semibold text-ink md:text-xl">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
