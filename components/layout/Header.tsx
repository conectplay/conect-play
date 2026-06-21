"use client";

// components/layout/Header.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const NAV_LINKS = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-lg border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappLink(WHATSAPP_MESSAGES.default)} size="md">
            Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu de navegação"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-200 hover:bg-white/5 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-ink-950/97 backdrop-blur-lg lg:hidden">
          <nav className="container-px mx-auto flex flex-col gap-1 py-4" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-stone-200 hover:bg-white/5 hover:text-gold-300"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={whatsappLink(WHATSAPP_MESSAGES.default)}
              size="md"
              className="mt-3 w-full"
            >
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
