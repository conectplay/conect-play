// components/sections/FinalCTA.tsx
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-radial-glow"
        aria-hidden="true"
      />
      <div className="container-px relative mx-auto max-w-4xl">
        <Reveal>
          <div className="card-base noise-overlay relative overflow-hidden rounded-4xl border-gold-400/20 px-6 py-14 text-center sm:px-16 sm:py-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/20 blur-[100px]"
              aria-hidden="true"
            />
            <h2 className="relative text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl lg:text-[2.6rem]">
              Pronto para assistir tudo isso{" "}
              <span className="shimmer-text">hoje mesmo?</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-stone-300 sm:text-lg">
              Fale agora com nossa equipe no WhatsApp e ative seu acesso em
              minutos. Sem fidelidade, sem complicação.
            </p>
            <div className="relative mt-9 flex justify-center">
              <Button
                href={whatsappLink(WHATSAPP_MESSAGES.testeGratis)}
                size="lg"
                ariaLabel="Falar agora com a Conect Play no WhatsApp"
              >
                Quero ativar agora no WhatsApp
              </Button>
            </div>
            <p className="relative mt-5 text-xs text-stone-500">
              Atendimento rápido · Suporte 24/7 · Cancelamento simples
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
