// lib/site.ts
// Configuração central da marca Conect Play.
// Centralizar aqui evita duplicar número/links e facilita manutenção futura.

export const SITE = {
  name: "Conect Play",
  legalName: "Conect Play Streaming",
  url: "https://conectplay.com.br",
  whatsapp: "5583998615871",
  description:
    "Conect Play é a sua plataforma de IPTV premium: canais ao vivo, futebol sem travar, filmes e séries em 4K. Compatível com Smart TV, TV Box, celular e computador. Teste agora.",
  keywords: [
    "IPTV",
    "IPTV premium",
    "canais premium",
    "futebol ao vivo",
    "assistir futebol online",
    "filmes e séries online",
    "streaming de canais",
    "IPTV Smart TV",
    "lista de canais IPTV",
    "Conect Play",
    "TV por internet",
    "canais de TV ao vivo online",
  ],
  themeColor: "#0B0D12",
};

/**
 * Monta o link oficial de WhatsApp da Conect Play com mensagem
 * pré-preenchida. Use sempre esta função — nunca link cru —
 * para garantir consistência em todos os CTAs do site.
 */
export function whatsappLink(message?: string) {
  const defaultMessage =
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos.";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export const WHATSAPP_MESSAGES = {
  default: "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos.",
  testeGratis:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Quero testar antes de assinar 🎬",
  planoMensal:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Tenho interesse no plano Mensal.",
  planoTrimestral:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Tenho interesse no plano Trimestral.",
  planoSemestral:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Tenho interesse no plano Semestral.",
  planoAnual:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Tenho interesse no plano Anual.",
  suporte:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Preciso falar com o suporte.",
  duvidas:
    "Olá! Vim pelo site da Conect Play e gostaria de conhecer os planos. Tenho algumas dúvidas antes de assinar.",
};

export type Plan = {
  id: string;
  name: string;
  tag?: string;
  highlight?: boolean;
  oldPrice: string;
  price: string;
  period: string;
  savings: string;
  features: string[];
  message: string;
};

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    tag: "Para experimentar",
    oldPrice: "R$ 39,90",
    price: "R$ 29,90",
    period: "/mês",
    savings: "Economize R$ 10",
    features: [
      "Mais de 200 canais ao vivo",
      "Filmes e séries em 4K",
      "Futebol ao vivo sem travar",
      "Suporte 24/7 no WhatsApp",
      "Até 2 telas simultâneas",
    ],
    message: WHATSAPP_MESSAGES.planoMensal,
  },
  {
    id: "trimestral",
    name: "Trimestral",
    tag: "⭐ Mais escolhido",
    highlight: true,
    oldPrice: "R$ 119,70",
    price: "R$ 79,90",
    period: "/3 meses",
    savings: "Economia de 33%",
    features: [
      "Mais de 200 canais ao vivo",
      "Filmes e séries em 4K",
      "Futebol ao vivo sem travar",
      "Suporte 24/7 no WhatsApp",
      "Até 2 telas simultâneas",
      "Prioridade no suporte",
    ],
    message: WHATSAPP_MESSAGES.planoTrimestral,
  },
  {
    id: "semestral",
    name: "Semestral",
    tag: "Melhor custo-benefício",
    oldPrice: "R$ 239,40",
    price: "R$ 149,90",
    period: "/6 meses",
    savings: "Economia de 50%",
    features: [
      "Mais de 200 canais ao vivo",
      "Filmes e séries em 4K",
      "Futebol ao vivo sem travar",
      "Suporte 24/7 no WhatsApp",
      "Até 2 telas simultâneas",
      "Prioridade no suporte",
    ],
    message: WHATSAPP_MESSAGES.planoSemestral,
  },
  {
    id: "anual",
    name: "Anual",
    tag: "Máxima economia",
    oldPrice: "R$ 478,80",
    price: "R$ 279,90",
    period: "/ano",
    savings: "Economize R$ 198,90",
    features: [
      "Mais de 200 canais ao vivo",
      "Filmes e séries em 4K",
      "Futebol ao vivo sem travar",
      "Suporte 24/7 no WhatsApp",
      "Até 4 telas simultâneas",
      "Prioridade máxima no suporte",
      "2 meses totalmente grátis",
    ],
    message: WHATSAPP_MESSAGES.planoAnual,
  },
];

export const FAQ_ITEMS = [
  {
    question: "O que é a Conect Play e como funciona o IPTV?",
    answer:
      "A Conect Play é uma plataforma de IPTV premium que transmite canais de TV ao vivo, filmes, séries e futebol diretamente pela internet, sem necessidade de antena ou cabo. Basta uma conexão estável e qualquer dispositivo compatível: Smart TV, TV Box, celular, tablet ou computador.",
  },
  {
    question: "Em quais dispositivos posso assistir?",
    answer:
      "A Conect Play funciona em Smart TVs (Samsung, LG, Roku, Android TV), TV Box, celulares e tablets Android e iPhone, computadores Windows e Mac, e também em aparelhos como Fire Stick. A instalação é simples e nossa equipe ajuda gratuitamente pelo WhatsApp.",
  },
  {
    question: "Tem futebol ao vivo e os principais campeonatos?",
    answer:
      "Sim. A Conect Play transmite futebol ao vivo com os principais campeonatos nacionais e internacionais, incluindo Brasileirão, Libertadores, Champions League e os maiores jogos do fim de semana, com estabilidade e qualidade de imagem.",
  },
  {
    question: "A qualidade da imagem trava ou cai?",
    answer:
      "Nossos servidores são otimizados especificamente para alta estabilidade, com qualidade em Full HD e 4K nos canais e conteúdos compatíveis. Recomendamos uma internet de no mínimo 15 mbps para a melhor experiência, principalmente durante jogos ao vivo.",
  },
  {
    question: "Quantas telas posso usar ao mesmo tempo?",
    answer:
      "Depende do plano escolhido. Os planos Mensal, Trimestral e Semestral permitem até 2 telas simultâneas, e o plano Anual permite até 4 telas, ideal para a família toda assistir ao mesmo tempo em dispositivos diferentes.",
  },
  {
    question: "Como funciona o suporte caso eu tenha algum problema?",
    answer:
      "Nosso suporte é feito 100% pelo WhatsApp, com atendimento rápido todos os dias da semana. Ajudamos com a instalação inicial, configuração nos seus dispositivos e qualquer dúvida durante todo o tempo da sua assinatura.",
  },
  {
    question: "Como faço para contratar um plano?",
    answer:
      "É simples: escolha o plano ideal para você, clique no botão de WhatsApp, confirme os dados com nossa equipe e receba o acesso liberado em poucos minutos após a confirmação do pagamento.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Silva",
    role: "Cliente Conect Play",
    initials: "MS",
    text: "Incrível! Qualidade 4K perfeita e nunca trava, nem nos jogos de fim de semana. O suporte é muito rápido no WhatsApp. Recomendo demais!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Cliente Conect Play",
    initials: "JS",
    text: "Melhor custo-benefício que já tive! Funciona perfeitamente na minha Smart TV e no celular. A instalação foi super fácil com a ajuda da equipe.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Cliente Conect Play",
    initials: "AC",
    text: "Já cancelei outras plataformas de streaming. Aqui tem filmes, séries e os canais que eu assisto, tudo em um só lugar por um preço muito melhor.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Cliente Conect Play",
    initials: "CE",
    text: "Assino há 8 meses e nunca tive problema sério. Quando preciso de ajuda, o suporte responde rapidinho. O futebol ao vivo é o que mais uso.",
    rating: 5,
  },
];

export const DEVICES = [
  { name: "Smart TV", message: WHATSAPP_MESSAGES.duvidas },
  { name: "TV Box", message: WHATSAPP_MESSAGES.duvidas },
  { name: "Celular e Tablet", message: WHATSAPP_MESSAGES.duvidas },
  { name: "Computador", message: WHATSAPP_MESSAGES.duvidas },
];
