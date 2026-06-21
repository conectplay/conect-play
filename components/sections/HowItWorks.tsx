// components/sections/HowItWorks.tsx
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "Chame no WhatsApp",
    description:
      "Clique em qualquer botão do site e fale direto com nossa equipe. Atendimento rápido, sem burocracia.",
  },
  {
    number: "02",
    title: "Escolha seu plano",
    description:
      "Conte quais dispositivos você usa e escolha o plano ideal com a ajuda da nossa equipe.",
  },
  {
    number: "03",
    title: "Receba o acesso",
    description:
      "Após a confirmação, você recebe seus dados de acesso e o passo a passo de instalação.",
  },
  {
    number: "04",
    title: "Assista na hora",
    description:
      "Instale em poucos minutos e já comece a assistir canais, filmes, séries e futebol ao vivo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-y relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Como funciona
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Comece a assistir em 4 passos simples
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-stone-400">
            Do primeiro contato à primeira live, em poucos minutos.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="relative text-center sm:text-left">
                <span className="font-display text-5xl font-bold text-white/[0.07]">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-stone-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href={whatsappLink(WHATSAPP_MESSAGES.testeGratis)} size="lg">
            Quero começar agora
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
