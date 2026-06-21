// components/sections/StatsBar.tsx
const STATS = [
  { value: "+200", label: "Canais ao vivo" },
  { value: "4K", label: "Qualidade premium" },
  { value: "24/7", label: "Suporte no WhatsApp" },
  { value: "+5 mil", label: "Clientes ativos" },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-white/[0.06] bg-ink-900/60">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:gap-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-stone-400 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
