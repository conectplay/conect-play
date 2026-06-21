import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Conect Play | IPTV Premium",
  description:
    "Conheça a Conect Play: plataforma de IPTV premium com canais ao vivo, futebol, filmes e séries, focada em estabilidade e suporte de verdade.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <section className="section-y container-px mx-auto max-w-3xl pt-32 sm:pt-40">
      <Reveal>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
          Sobre nós
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
          A Conect Play nasceu para simplificar o seu entretenimento
        </h1>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-stone-300">
          <p>
            Criamos a Conect Play com um objetivo simples: reunir canais ao
            vivo, futebol, filmes e séries em uma única assinatura, com
            qualidade premium e um suporte que realmente resolve.
          </p>
          <p>
            Sabemos como é frustrante lidar com travamentos durante um jogo
            importante ou não conseguir suporte quando algo dá errado. Por
            isso investimos em servidores otimizados para estabilidade e em
            uma equipe de atendimento disponível direto no WhatsApp.
          </p>
          <p>
            Hoje, milhares de clientes em todo o Brasil assistem com a Conect
            Play em Smart TVs, TV Box, celulares e computadores — substituindo
            várias assinaturas separadas por uma experiência única e
            acessível.
          </p>
        </div>
        <div className="mt-10">
          <Button href={whatsappLink(WHATSAPP_MESSAGES.default)} size="lg">
            Falar com a equipe
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
