"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Web Development",
    desc: "Fast, responsive and scalable web experiences built with modern frontend and backend technologies.",
    icon: (
      <rect x="4" y="6" width="24" height="20" rx="2" strokeWidth="1.5" />
    ),
  },
  {
    n: "02",
    title: "Software Engineering",
    desc: "Custom software solutions engineered around your workflows, requirements and long-term growth.",
    icon: (
      <>
        <path d="M12 10 8 16l4 6" strokeWidth="1.5" />
        <path d="M20 10l4 6-4 6" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces designed to make complex products simple and engaging.",
    icon: (
      <>
        <circle cx="16" cy="16" r="11" strokeWidth="1.5" />
        <path d="M16 5v22M5 16h22" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "04",
    title: "Cloud & Infrastructure",
    desc: "Cloud-ready architectures designed for reliability, scalability, performance and efficient deployment.",
    icon: (
      <path
        d="M10 22a5 5 0 0 1-.6-9.97A7 7 0 0 1 23 13.5 4.5 4.5 0 0 1 22.5 22Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    n: "05",
    title: "Digital Product Development",
    desc: "From concept to production, we turn ideas into complete digital products.",
    icon: (
      <>
        <rect x="6" y="6" width="20" height="20" rx="3" strokeWidth="1.5" />
        <path d="M12 16h8M12 21h5" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "06",
    title: "Product Modernization",
    desc: "Improve legacy systems, modernize interfaces, optimize performance and move existing products forward.",
    icon: (
      <>
        <path d="M22 10a8 8 0 1 0 2 8" strokeWidth="1.5" />
        <path d="M22 4v6h-6" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="services" className="relative">
      <div className="section">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">What We Do</span>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl">
            Technology built around <span className="text-accent-cyan">your business.</span>
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-20">
          {services.map((s, i) => (
            <motion.a
              key={s.n}
              href="#contact"
              initial={reduce ? undefined : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-line px-2 py-10 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[80px_64px_1fr_auto] md:gap-10 md:px-6 md:py-12"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-500 group-hover:w-full" />
              <span className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-accent-cyan md:text-base">
                {s.n}
              </span>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
                className="hidden h-8 w-8 text-muted transition-colors duration-300 group-hover:text-accent-blue md:block"
              >
                {s.icon}
              </svg>
              <span>
                <span className="block text-xl font-semibold text-ink transition-colors duration-300 md:text-2xl">
                  {s.title}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted md:text-[15px]">
                  {s.desc}
                </span>
              </span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent-cyan"
              >
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
