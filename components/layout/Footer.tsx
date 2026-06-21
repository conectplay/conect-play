// components/layout/Footer.tsx
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.1c0-.81.23-1.36 1.39-1.36h1.48V5.2A19.7 19.7 0 0 0 14.5 5c-2.1 0-3.5 1.28-3.5 3.63v2.37H8.6v2.8h2.4V21h2.5z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28.3 28.3 0 0 0 2 12a28.3 28.3 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9 28.3 28.3 0 0 0 .4-4.4 28.3 28.3 0 0 0-.4-4.4zM10 15V9l5.2 3-5.2 3z" />
      </svg>
    ),
  },
];

const LINK_COLUMNS = [
  {
    title: "Navegação",
    links: [
      { label: "Benefícios", href: "#beneficios" },
      { label: "Planos", href: "#planos" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Perguntas frequentes", href: "#faq" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Canais ao vivo", href: "#beneficios" },
      { label: "Futebol ao vivo", href: "#beneficios" },
      { label: "Filmes e séries", href: "#beneficios" },
      { label: "Dispositivos compatíveis", href: "#beneficios" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              Canais premium, futebol ao vivo, filmes e séries em um só lugar.
              Streaming estável, com suporte humano de verdade.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-300 transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-200">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-200">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.suporte)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-whats"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  (83) 99861-5871
                </a>
              </li>
              <li>Atendimento: todos os dias</li>
              <li>Suporte 24/7 via WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Conect Play. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/politica-privacidade" className="hover:text-stone-300">
              Política de Privacidade
            </Link>
            <Link href="/sobre" className="hover:text-stone-300">
              Sobre nós
            </Link>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-stone-600">
          A Conect Play é um serviço de distribuição de conteúdo via internet
          (IPTV). A disponibilidade de canais pode variar conforme operadora
          de internet e dispositivo utilizado.
        </p>
      </div>
    </footer>
  );
}
