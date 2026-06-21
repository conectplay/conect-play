// components/sections/Testimonials.tsx
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-y relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Depoimentos
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Quem assina, recomenda
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-stone-400">
            Milhares de clientes satisfeitos com a qualidade e o suporte da
            Conect Play.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="card-base flex h-full flex-col rounded-2xl border-white/[0.06] p-6">
                <Stars count={t.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-sm font-bold text-ink-950">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-stone-100">
                      {t.name}
                    </p>
                    <p className="text-xs text-stone-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
