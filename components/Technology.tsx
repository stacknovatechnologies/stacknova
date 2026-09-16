"use client";

import { motion, useReducedMotion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    tools: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS", "SASS", "Framer Motion", "WordPress", "Material UI", "And more..."],
  },
  {
    name: "Backend",
    tools: ["Node.js", "Express", "Spring Boot", "REST APIs", "Next.js", "GraphQL", "WebSockets", "And more..."],
  },
  {
    name: "Database",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "TableDB", "Firebase", "Supabase", "Redis", "And more..."],
  },
  {
    name: "Cloud & Infrastructure",
    tools: ["AWS", "Vercel", "Cloudflare", "Docker", "Git", "GitHub Actions", "CI/CD", "And more..."],
  },
  {
    name: "Auth & Integrations",
    tools: ["Keycloak", "OAuth", "API Integrations", "Payment Gateways", "And more..."],
  },
];

export default function Technology() {
  const reduce = useReducedMotion();
  return (
    <section id="technology" className="relative">
      <div className="section">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="eyebrow">Technology Stack</span>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              Modern technology. <br />
              <span className="text-accent-cyan">Practical engineering.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              We choose proven, well-supported tools for each layer of the stack — selected for
              longevity, performance and the team that will maintain your product after launch.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group border-b border-line pb-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-ink md:text-xl">{cat.name}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {cat.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-white/[0.03] px-4 py-2 text-sm text-muted transition-all duration-300 hover:border-accent-cyan/50 hover:text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
