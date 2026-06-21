// components/ui/Logo.tsx
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Conect Play - Página inicial"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-600 shadow-gold">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-ink-950"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      </span>
      <span className="font-display text-[19px] font-bold leading-none tracking-tight text-stone-50">
        Conect<span className="text-gold-300">Play</span>
      </span>
    </Link>
  );
}
