import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Conect Play",
  description:
    "Saiba como a Conect Play coleta, usa e protege seus dados pessoais.",
  alternates: { canonical: "/politica-privacidade" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "1. Quem somos",
    body: `A Conect Play (${SITE.legalName}) é responsável pelo tratamento dos dados pessoais coletados através deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).`,
  },
  {
    title: "2. Quais dados coletamos",
    body: "Coletamos informações fornecidas voluntariamente por você ao entrar em contato pelo WhatsApp, como nome, número de telefone e preferências de plano, além de dados de navegação anônimos para fins de análise e melhoria do site.",
  },
  {
    title: "3. Como usamos seus dados",
    body: "Utilizamos os dados para responder solicitações, oferecer suporte técnico, processar contratações de planos e melhorar continuamente nossos serviços. Não vendemos seus dados pessoais a terceiros.",
  },
  {
    title: "4. Compartilhamento de dados",
    body: "Seus dados podem ser compartilhados com prestadores de serviço estritamente necessários à operação da Conect Play, sempre respeitando os princípios de confidencialidade e finalidade previstos em lei.",
  },
  {
    title: "5. Seus direitos",
    body: "Você pode solicitar a qualquer momento a confirmação, correção, exclusão ou portabilidade dos seus dados pessoais, entrando em contato através do nosso WhatsApp oficial.",
  },
  {
    title: "6. Cookies",
    body: "Este site pode utilizar cookies para melhorar sua experiência de navegação e gerar estatísticas de uso. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento.",
  },
  {
    title: "7. Alterações desta política",
    body: "Esta política pode ser atualizada periodicamente. Recomendamos revisar esta página de tempos em tempos para se manter informado sobre eventuais mudanças.",
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <section className="section-y container-px mx-auto max-w-3xl pt-32 sm:pt-40">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
        Transparência
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-sm text-stone-500">
        Última atualização: junho de 2026
      </p>

      <div className="mt-10 space-y-9">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold text-stone-100">
              {section.title}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-stone-400">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
