"use client";

// components/ui/FloatingWhatsApp.tsx
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
  href="#"
  onClick={(e) => {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-18248552526'
    });

    e.preventDefault();

    setTimeout(() => {
      window.location.href = whatsappLink();
    }, 200);
  }}
  aria-label="Falar com a Conect Play no WhatsApp"
  className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whats text-white shadow-[0_10px_30px_-6px_rgba(34,197,94,0.6)] transition-all duration-300 hover:bg-whats-dark hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7 ${
    visible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0"
  }`}
>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whats/40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
