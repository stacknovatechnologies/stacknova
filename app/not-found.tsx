import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/15 blur-[140px]" />
      </div>

      <p className="eyebrow relative">Error 404</p>
      <h1 className="display relative mt-6 text-[clamp(3rem,10vw,6rem)]">
        Lost in <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">space?</span>
      </h1>
      <p className="relative mt-6 max-w-md text-base leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
        you back on track.
      </p>
      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/#contact" className="btn-ghost">
          Contact StackNova
        </Link>
      </div>
      <p className="relative mt-16 font-mono text-xs text-muted/70">
        stacknova.in — StackNova Technologies
      </p>
    </main>
  );
}
