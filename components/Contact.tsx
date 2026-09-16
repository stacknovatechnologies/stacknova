"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const projectTypes = [
  "Web Development",
  "Software Engineering",
  "UI/UX Design",
  "Cloud & Infrastructure",
  "Product Modernization",
  "Other",
];
const budgets = ["< ₹1L", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L+", "Not sure yet"];

export const CONTACT_EMAIL = "care@stacknova.com";

export default function Contact() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  /**
   * Static export has no server, so the inquiry is handed to the visitor's
   * mail client with everything pre-filled. Swap this for a Formspree /
   * Web3Forms / Getform endpoint (or your own API) when available.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string) || "—";

    const subject = `Project Inquiry — ${get("projectType")} — ${get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Project Type: ${get("projectType")}`,
      `Budget: ${get("budget")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative border-t border-line">
      <div className="section grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        {/* left */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s build something <span className="text-accent-cyan">meaningful.</span>
          </h2>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted">Company</dt>
              <dd className="mt-1 text-base text-ink">StackNova Technologies</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted">Email</dt>
              <dd className="mt-1">
                <a href="mailto:stacknovatechnologies@zohomail.in" className="text-base text-ink transition-colors hover:text-accent-cyan">
                    stacknovatechnologies@zohomail.in
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted">Phone</dt>
              <a href="tel:+917980114950" className="text-base text-ink transition-colors hover:text-accent-cyan">
                +91 79801 14950
              </a>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted">Location</dt>
              <dd className="mt-1 text-base text-ink">Delhi, India</dd>
            </div>
          </dl>

          <a href="mailto:stacknovatechnologies@zohomail.in" className="btn-primary mt-10">
            Start a Project
          </a>
        </motion.div>

        {/* form */}
        <motion.form
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-lg border border-line bg-white/[0.02] p-8 md:grid-cols-2 md:p-10"
        >
          <label className="flex flex-col gap-2 text-sm text-muted">
            Name
            <input required name="name" className="field" placeholder="Your name" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted">
            Email
            <input required type="email" name="email" className="field" placeholder="you@company.com" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted">
            Company
            <input name="company" className="field" placeholder="Company name" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted">
            Project Type
            <select name="projectType" className="field" defaultValue="">
              <option value="" disabled>
                Select a type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-navy-900">
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted md:col-span-2">
            Budget
            <select name="budget" className="field" defaultValue="">
              <option value="" disabled>
                Estimated budget
              </option>
              {budgets.map((b) => (
                <option key={b} value={b} className="bg-navy-900">
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted md:col-span-2">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="field resize-y"
              placeholder="Tell us about your project, goals and timeline…"
            />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="btn-primary w-full md:w-auto">
              {sent ? "Opening your mail app…" : "Send Project Inquiry"}
            </button>
            <p className="mt-4 text-xs text-muted">
              {sent ? (
                <>
                  Your mail app should now be open with the details filled in. If it
                  didn&apos;t open, email us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-cyan underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </>
              ) : (
                "We respond to every inquiry within one business day."
              )}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
