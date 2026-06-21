import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5 pt-20 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-gold-300">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-stone-50">
          Essa página não foi encontrada
        </h1>
        <p className="mt-3 max-w-sm text-sm text-stone-400">
          O conteúdo que você procura pode ter sido movido. Volte para a
          página inicial ou fale com a gente.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/" variant="outline" icon={false}>
            Voltar ao início
          </Button>
          <Button href={whatsappLink(WHATSAPP_MESSAGES.default)}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
