// components/sections/Plans.tsx
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PLANS, whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

export function Plans() {
  return (
    <section id="planos" className="section-y relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-glow opacity-70"
        aria-hidden="true"
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Planos
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-stone-400">
            Todos os planos incluem acesso completo ao catálogo e suporte
            24/7. Quanto maior o período, maior a sua economia.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-gold-400/[0.12] to-ink-800 ring-2 ring-gold-400/60 shadow-gold"
                    : "card-base border-white/[0.06]"
                }`}
              >
                {plan.tag && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      plan.highlight
                        ? "bg-gold-400 text-ink-950"
                        : "bg-white/10 text-stone-300"
                    }`}
                  >
                    {plan.tag}
                  </span>
                )}

                <h3 className="mt-3 text-center font-display text-xl font-bold text-stone-50">
                  {plan.name}
                </h3>

                <div className="mt-5 text-center">
                  <span className="block text-sm text-stone-500 line-through">
                    {plan.oldPrice}
                  </span>
                  <span className="mt-1 block font-display text-4xl font-bold text-stone-50">
                    {plan.price}
                    <span className="text-base font-medium text-stone-400">
                      {plan.period}
                    </span>
                  </span>
                  <span className="mt-2 inline-block rounded-full bg-whats/10 px-3 py-1 text-xs font-semibold text-whats">
                    {plan.savings}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-stone-300"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-300"
                        fill="currentColor"
                      >
                        <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={whatsappLink(plan.message)}
                  variant={plan.highlight ? "secondary" : "outline"}
                  size="md"
                  className="mt-7 w-full"
                  ariaLabel={`Assinar plano ${plan.name} pelo WhatsApp`}
                >
                  Assinar agora
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button
            href={whatsappLink(WHATSAPP_MESSAGES.duvidas)}
            variant="ghost"
            icon={false}
            size="md"
          >
            Não sabe qual plano escolher? Fale com um especialista →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
