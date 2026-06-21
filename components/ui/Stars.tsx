// components/ui/Stars.tsx
export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < count ? "text-gold-300" : "text-ink-600"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77-4.19-4.08 5.79-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
