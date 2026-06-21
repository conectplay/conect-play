# Conect Play — Site institucional / landing page de vendas

Site institucional e landing page de conversão para a **Conect Play**,
plataforma de IPTV premium (canais ao vivo, futebol, filmes e séries).

Construído com **Next.js 14 (App Router)**, **React 18**, **TypeScript** e
**Tailwind CSS**, com foco em performance, SEO e conversão via WhatsApp.

---

## ✨ Stack

- **Next.js 14** — App Router, SSG, metadata API, sitemap/robots nativos
- **React 18**
- **TypeScript**
- **Tailwind CSS** — design tokens customizados da marca
- **next/font** — Google Fonts otimizadas (Playfair Display + Inter), sem layout shift
- Zero dependências externas de UI/ícones — tudo em SVG inline, build leve e rápido

---

## 📂 Estrutura do projeto

```
conect-play/
├── app/
│   ├── layout.tsx              # Layout raiz: metadata, Open Graph, Schema markup (JSON-LD)
│   ├── page.tsx                 # Página inicial (monta todas as seções)
│   ├── globals.css              # Estilos base e utilitários
│   ├── sitemap.ts               # Sitemap dinâmico (/sitemap.xml)
│   ├── robots.ts                # Robots dinâmico (/robots.txt)
│   ├── not-found.tsx            # Página 404 customizada
│   ├── sobre/page.tsx           # Página "Sobre nós"
│   └── politica-privacidade/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navegação fixa + menu mobile
│   │   └── Footer.tsx           # Rodapé com contato e redes sociais
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── Benefits.tsx
│   │   ├── Plans.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Devices.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Logo.tsx
│       ├── LiveBadge.tsx
│       ├── Stars.tsx
│       ├── Reveal.tsx           # Animação fade/slide ao rolar a página
│       ├── FloatingWhatsApp.tsx # Botão flutuante fixo
│       └── WhatsAppIcon.tsx
├── lib/
│   └── site.ts                  # Config central: número de WhatsApp, planos, FAQ, depoimentos
├── public/
│   ├── favicon.svg
│   ├── og-image.png             # Imagem de compartilhamento (Open Graph)
│   └── site.webmanifest
├── tailwind.config.ts            # Tokens de cor, tipografia e animação da marca
└── next.config.js                # Otimizações de performance e cache
```

---

## 🟢 WhatsApp — configuração central

**Todo** botão de WhatsApp do site usa a função `whatsappLink()` em
`lib/site.ts`. Isso garante consistência total e facilita qualquer alteração
futura de número ou mensagem.

```ts
// lib/site.ts
export const SITE = {
  whatsapp: "5583998615871",
  // ...
};

export function whatsappLink(message?: string) {
  // gera https://wa.me/5583998615871?text=...
}
```

Para **trocar o número de WhatsApp**, edite apenas o campo `whatsapp` em
`lib/site.ts` — não é necessário alterar nenhum componente.

Mensagens automáticas específicas por contexto (teste grátis, cada plano,
suporte, dúvidas) também ficam centralizadas em `WHATSAPP_MESSAGES` no mesmo
arquivo.

---

## 🚀 Como rodar localmente

Pré-requisito: **Node.js 18.18 ou superior**.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

Build de produção:

```bash
npm run build
npm run start
```

---

## ☁️ Deploy na Vercel

### Opção 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opção 2 — GitHub + Vercel (recomendado)

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. O Vercel detecta automaticamente o framework Next.js — não é necessário
   configurar nada manualmente.
4. Clique em **Deploy**.

### Após o deploy

Atualize a URL de produção em `lib/site.ts` (`SITE.url`) para o domínio
final (ex: `https://conectplay.com.br`), pois ela é usada para gerar:

- A tag `<link rel="canonical">`
- As URLs absolutas do Open Graph e Twitter Card
- O `sitemap.xml` e `robots.txt`

---

## 🔍 SEO implementado

- **Metadata API do Next.js** com title template, description e keywords
  focadas em IPTV, canais premium, futebol ao vivo, filmes e séries.
- **Open Graph completo** (título, descrição, imagem 1200×630, locale `pt_BR`).
- **Twitter Card** (`summary_large_image`).
- **Schema.org / JSON-LD**: `Organization`, `Service` (com `AggregateOffer` e
  `AggregateRating`) e `FAQPage` — ajuda o Google a exibir rich snippets.
- **Sitemap.xml** e **robots.txt** gerados automaticamente pelo Next.js
  (`app/sitemap.ts` e `app/robots.ts`).
- HTML semântico (`h1` único por página, `h2`/`h3` hierárquicos, `nav`,
  `footer`, `figure`/`figcaption` nos depoimentos).
- `alt` e `aria-label` em elementos interativos e ícones.
- Fontes carregadas via `next/font` (sem bloqueio de render, sem layout shift).

> Para indexação real no Google, lembre-se de cadastrar o domínio final no
> [Google Search Console](https://search.google.com/search-console) e enviar
> o sitemap (`https://seudominio.com.br/sitemap.xml`).

---

## ⚡ Performance

- Sem bibliotecas de UI/ícones externas — todos os ícones são SVG inline.
- Fontes otimizadas via `next/font/google` com `display: swap`.
- Imagens estáticas com cache de longo prazo configurado em `next.config.js`.
- Animações em CSS (Tailwind keyframes), sem bibliotecas de animação pesadas.
- `prefers-reduced-motion` respeitado para acessibilidade.
- Componentes interativos (`Header`, `FAQ`, `FloatingWhatsApp`, `Reveal`) são
  os únicos marcados como Client Components — todo o resto é Server Component
  por padrão, reduzindo o JavaScript enviado ao navegador.

---

## 🎨 Identidade visual

| Token | Uso |
|---|---|
| `ink-950` `#07080B` | Fundo principal (preto premium) |
| `gold-300` → `gold-600` | Cor de assinatura da marca (dourado/âmbar) |
| `whats` `#22C55E` | Cor dos CTAs de WhatsApp |
| `live` `#E8472E` | Selo "AO VIVO" / futebol |
| Playfair Display | Tipografia de destaque (títulos) |
| Inter | Tipografia de corpo de texto |

Esses tokens estão centralizados em `tailwind.config.ts` — qualquer ajuste de
cor da marca deve ser feito ali.

---

## 📝 Conteúdo editável

- **Planos e preços**: `lib/site.ts` → array `PLANS`
- **Perguntas frequentes**: `lib/site.ts` → array `FAQ_ITEMS`
- **Depoimentos**: `lib/site.ts` → array `TESTIMONIALS`
- **Textos do Hero, seções, etc.**: diretamente nos componentes em
  `components/sections/`

---

## 📄 Licença

Projeto proprietário desenvolvido para a marca Conect Play.
