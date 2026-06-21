// components/sections/Hero.tsx
import { Button } from "@/components/ui/Button";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const CHIPS = ["Canais ao vivo", "Futebol sem travar", "Filmes e séries 4K"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Coluna de texto */}
        <div>
          <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:0ms]">
            <LiveBadge />
            <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
              +200 canais · Futebol · Filmes · Séries
            </span>
          </div>

          <h1 className="mt-6 text-balance font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-stone-50 sm:text-6xl lg:text-[3.4rem] animate-fade-up [animation-delay:80ms]">
            Sua TV completa, com{" "}
            <span className="shimmer-text">futebol ao vivo</span>, filmes e
            séries no mesmo lugar
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-stone-300 animate-fade-up [animation-delay:160ms]">
            Assista canais premium, jogos ao vivo sem travar e o catálogo
            completo de filmes e séries em qualquer dispositivo. Ative em
            minutos e tenha suporte humano sempre que precisar.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up [animation-delay:240ms]">
            <Button
              href={whatsappLink(WHATSAPP_MESSAGES.testeGratis)}
              size="lg"
              ariaLabel="Falar com a Conect Play no WhatsApp e testar grátis"
            >
              Testar agora no WhatsApp
            </Button>
            <Button href="#planos" variant="outline" size="lg" icon={false}>
              Ver planos e preços
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up [animation-delay:320ms]">
            {CHIPS.map((chip) => (
              <div key={chip} className="flex items-center gap-2 text-sm text-stone-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-gold-300" fill="currentColor">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                </svg>
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* Coluna visual: mockup de TV */}
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md animate-float">
            <div className="card-base noise-overlay relative rounded-3xl border-white/[0.08] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950">
                {/* Tela simulada com grade de conteúdo */}
                <div className="absolute inset-0 bg-radial-glow opacity-60" />
                <div className="relative flex h-full flex-col p-5">
                  <div className="flex items-center justify-between">
                    <LiveBadge label="JOGO AO VIVO" />
                    <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-semibold text-stone-300">
                      4K UHD
                    </span>
                  </div>
                  <div className="mt-4 flex flex-1 items-center justify-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-gold-400/20 ring-1 ring-gold-400/40" />
                      <span className="text-xs font-semibold text-stone-300">2</span>
                    </div>
                    <span className="font-display text-2xl font-bold text-stone-500">×</span>
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20" />
                      <span className="text-xs font-semibold text-stone-300">1</span>
                    </div>
                  </div>
                  <div className="mt-auto grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-md bg-gradient-to-br from-white/[0.08] to-white/[0.02]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cards flutuantes — deslocados para fora da moldura da TV */}
            <div className="card-base absolute -left-4 top-8 z-10 hidden w-40 rounded-xl border-white/10 p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] xl:-left-10 xl:block xl:w-44">
              <p className="text-[11px] font-semibold text-stone-200">
                Filmes e séries
              </p>
              <p className="mt-1 text-[11px] text-stone-400">
                Catálogo completo em 4K
              </p>
            </div>
            <div className="card-base absolute -right-3 bottom-4 z-10 hidden w-44 rounded-xl border-white/10 p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] xl:-right-8 xl:block xl:w-48">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-whats/15 text-whats">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                <p className="text-[11px] font-semibold leading-snug text-stone-200">
                  Suporte 24/7 no WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
