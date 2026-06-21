"use client";

// components/sections/FAQ.tsx
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQ_ITEMS, whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card-base rounded-2xl border-white/[0.06]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-stone-100 sm:text-base">
          {question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold-300 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M10 4v12M4 10h12" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-stone-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y relative">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl">
            Ainda tem dúvidas?
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-stone-400">
            Reunimos as perguntas mais comuns sobre o IPTV da Conect Play.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 50}>
              <FaqRow
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-stone-400">
            Não encontrou o que procurava?
          </p>
          <Button
            href={whatsappLink(WHATSAPP_MESSAGES.duvidas)}
            variant="outline"
            size="md"
            className="mt-4"
          >
            Falar com a equipe
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
