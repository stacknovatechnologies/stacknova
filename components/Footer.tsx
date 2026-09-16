import Link from "next/link";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/stacknova-technologies-startup/" },
  { label: "GitHub", href: "https://github.com/stacknovatechnologies" },
  { label: "Whatsapp", href: "https://wa.me/917980114950?text=Hi%20StackNova%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project." },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-navy-900/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="#top" aria-label="StackNova Technologies — home" className="inline-flex">
              {/* Exact supplied StackNova logo artwork (see brand/ for the untouched master file) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="StackNova Technologies logo"
                className="h-20 w-auto"
                width={120}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Building modern technology for businesses ready to move forward.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink/80 transition-colors hover:text-accent-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted">Connect</h3>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink/80 transition-colors hover:text-accent-cyan"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:stacknovatechnologies@zohomail.in" className="mt-6 inline-block text-sm text-ink/80 transition-colors hover:text-accent-cyan">
              stacknovatechnologies@zohomail.in
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© 2026 StackNova Technologies. All rights reserved.</p>
          <p>
            stacknova.in <span className="mx-2 text-line">|</span> Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
