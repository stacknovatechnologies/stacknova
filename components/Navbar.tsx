"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 140) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-navy-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10"
      >
        <Link href="#top" className="flex items-center" aria-label="StackNova Technologies — home">
          {/*
            Exact supplied StackNova logo. The 1 MB 2170×725 master lives in brand/ (not deployed);
            public/logo.png is the same artwork scaled to 480×160 with transparency preserved —
            no redraw, recolor, crop or other alteration of the mark itself.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="StackNova Technologies logo"
            className="h-14 w-auto sm:h-22"
            width={120}
            height={40}
            decoding="async"
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  active === l.href ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-accent-cyan transition-all duration-300 ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden lg:inline-flex !px-5 !py-2.5 text-[13px]">
          Start a Project
        </a>

        <button
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <motion.span
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="absolute h-px w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="absolute h-px w-6 bg-ink"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-b border-line bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-semibold text-ink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Start a Project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
