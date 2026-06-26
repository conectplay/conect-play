"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none active:scale-[0.98] whitespace-nowrap";

const variants: Record<string, string> = {
  primary:
    "bg-whats hover:bg-whats-dark text-white shadow-[0_8px_30px_-8px_rgba(34,197,94,0.55)] hover:shadow-[0_12px_40px_-8px_rgba(34,197,94,0.7)] hover:-translate-y-0.5",
  secondary:
    "bg-gradient-to-b from-gold-300 to-gold-500 hover:from-gold-200 hover:to-gold-400 text-ink-950 shadow-gold hover:-translate-y-0.5",
  outline:
    "border border-white/15 text-stone-100 hover:bg-white/5 hover:border-white/30",
  ghost: "text-stone-300 hover:text-gold-200",
};

const sizes: Record<string, string> = {
  md: "h-12 px-6 rounded-xl text-[15px]",
  lg: "h-14 px-8 rounded-2xl text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const isWhatsApp = href.includes("wa.me");

  const handleClick = () => {
    if (isWhatsApp) {
      window.gtag?.("event", "conversion", {
        send_to: "AW-18248552526/rVTjCPHI4cUcEM6gy_1D",
        value: 1.0,
        currency: "BRL",
      });
    }
  };

  return (
    <Link
      href={href}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={${base} ${variants[variant]} ${sizes[size]} ${className}}
    >
      {icon && isWhatsApp && (
        <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
      )}
      {children}
    </Link>
  );
}
