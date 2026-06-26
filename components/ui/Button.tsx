"use client";

import Link from "next/link";
import { ReactNode } from "react";

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
    "bg-green-500 hover:bg-green-600 text-white shadow-lg",
  secondary:
    "bg-yellow-400 hover:bg-yellow-300 text-black",
  outline:
    "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white/70 hover:text-white",
};

const sizes: Record<string, string> = {
  md: "h-12 px-6 rounded-xl text-[15px]",
  lg: "h-14 px-8 rounded-2xl text-base",
};

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.59 0 .34 5.25.34 11.72c0 2.07.54 4.1 1.57 5.89L0 24l6.56-1.88a11.66 11.66 0 005.5 1.4h.01c6.47 0 11.72-5.25 11.72-11.72 0-3.13-1.22-6.07-3.27-8.32zM12.07 21.5a9.7 9.7 0 01-4.94-1.35l-.35-.2-3.89 1.12 1.04-3.79-.23-.39a9.72 9.72 0 01-1.49-5.19c0-5.38 4.38-9.76 9.76-9.76 2.6 0 5.04 1.01 6.88 2.85a9.66 9.66 0 012.86 6.88c0 5.38-4.38 9.76-9.74 9.76zm5.34-7.27c-.29-.14-1.71-.84-1.97-.93-.26-.09-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.51.07-.78.36-.26.29-1.01.99-1.01 2.4s1.04 2.77 1.18 2.96c.14.19 2.02 3.09 4.9 4.33.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z"/>
    </svg>
  );
}

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
      {icon && isWhatsApp && <WhatsAppIcon />}
      {children}
    </Link>
  );
}
