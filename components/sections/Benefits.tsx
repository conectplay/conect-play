// components/sections/Benefits.tsx
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
  {
    title: "Canais ao vivo",
    description:
      "Mais de 200 canais de TV ao vivo: esportes, filmes, notícias, infantil e variedades, tudo em alta qualidade.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.25A2.25 2.25 0 0 1 5.25 6h13.5A2.25 2.25 0 0 1 21 8.25v8.5A2.25 2.25 0 0 1 18.75 19H5.25A2.25 2.25 0 0 1 3 16.75v-8.5ZM8 19v2m8-2v2M3 12h18"
      />
    ),
  },
  {
    title: "Filmes e séries",
    description:
      "Catálogo completo com lançamentos e clássicos em 4K, com todas as temporadas das suas séries favoritas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5h16M4 6.5v11A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-11M4 6.5 6.5 4h11L20 6.5M9.5 11.5l4 2.25-4 2.25v-4.5Z"
      />
    ),
  },
  {
    title: "Futebol ao vivo",
    description:
      "Os principais campeonatos nacionais e internacionais, com transmissão estável mesmo nos jogos mais disputados.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12 7 2.6 1.9-1 3.1h-3.2l-1-3.1L12 7ZM3.6 9.5l4 .7M20.4 9.5l-4 .7M8 19.5l1.4-3.7M16 19.5l-1.4-3.7"
        />
      </>
    ),
  },
  {
    title: "Todos os dispositivos",
    description:
      "Compatível com Smart TV, TV Box, Android, iPhone e computador. Configure uma vez e assista em qualquer tela.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17 9 20m6-3 .75 3M8.25 20h7.5M3.75 5h16.5a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      />
    ),
  },
  {
    title: "Suporte rápido",
    description:
      "Atendimento humano direto no WhatsApp, todos os dias, para instalação, configuração e qualquer dúvida.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9M7.5 12h6m-7.5 8.25v-2.69c0-.4-.23-.76-.59-.93A6.75 6.75 0 0 1 4.5 11.25 6.75 6.75 0 0 1 11.25 4.5h1.5a6.75 6.75 0 0 1 6.75 6.75 6.75 6.75 0 0 1-6.75 6.75H9l-3.06 2.55a.6.6 0 0 1-.94-.55Z"
      />
    ),
  },
  {
    title: "Qualidade estável",
    description:
      "Servidores otimizados para entregar imagem nítida e sem travamentos, mesmo nos horários de pico.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2 4.5 13h6L11 22l8.5-11h-6L13 2Z"
      />
    ),
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="section-y relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Por que a Conect Play
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Tudo que você assiste, em um único lugar
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-stone-400">
            Substitua várias assinaturas por uma só. Qualidade premium,
            estabilidade real e suporte que responde quando você precisa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="card-base group h-full rounded-2xl border-white/[0.06] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-400/20 transition-colors group-hover:bg-gold-400/15">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-stone-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
