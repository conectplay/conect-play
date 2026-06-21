// components/sections/Devices.tsx
import { Reveal } from "@/components/ui/Reveal";

const DEVICES = [
  {
    name: "Smart TV",
    detail: "Samsung, LG, Android TV e Roku",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5h16.5a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM9 20h6m-3-3.5V20"
      />
    ),
  },
  {
    name: "TV Box",
    detail: "Qualquer modelo Android",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8.5h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Zm3 8.5v2m10-2v2M8 4l2 4.5m6-4.5-2 4.5"
      />
    ),
  },
  {
    name: "Celular e Tablet",
    detail: "Android e iPhone",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3.75h7.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5ZM11 18h2"
      />
    ),
  },
  {
    name: "Computador",
    detail: "Windows e Mac",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.25h18v10.5H3V5.25ZM8.5 20h7M12 15.75V20"
      />
    ),
  },
];

export function Devices() {
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Compatibilidade
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Funciona em todos os seus dispositivos
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-stone-400">
            Configure uma vez e assista onde quiser, sem complicação.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {DEVICES.map((device, i) => (
            <Reveal key={device.name} delay={i * 80}>
              <div className="card-base flex h-full flex-col items-center rounded-2xl border-white/[0.06] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-400/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    {device.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-stone-100 sm:text-base">
                  {device.name}
                </h3>
                <p className="mt-1 text-xs text-stone-500">{device.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
