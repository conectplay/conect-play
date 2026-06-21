// components/ui/LiveBadge.tsx
export function LiveBadge({ label = "AO VIVO", className = "" }: { label?: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-live/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-live ring-1 ring-inset ring-live/30 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-pulse-live rounded-full bg-live" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
      </span>
      {label}
    </span>
  );
}
