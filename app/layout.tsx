import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Conect Play | IPTV Premium com Futebol ao Vivo, Filmes e Séries",
    template: "%s | Conect Play",
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: "Conect Play" }],
  creator: "Conect Play",
  publisher: "Conect Play",
  applicationName: "Conect Play",
  category: "Entretenimento",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: "Conect Play",
    title: "Conect Play | IPTV Premium com Futebol ao Vivo, Filmes e Séries",
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Conect Play - IPTV Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conect Play | IPTV Premium com Futebol ao Vivo, Filmes e Séries",
    description: SITE.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Conect Play",
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  description: SITE.description,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-83-99861-5871",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://instagram.com", "https://facebook.com", "https://youtube.com"],
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IPTV Streaming Premium",
  name: "Conect Play IPTV",
  provider: {
    "@type": "Organization",
    name: "Conect Play",
  },
  areaServed: "BR",
  description: SITE.description,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: "29.90",
    highPrice: "279.90",
    offerCount: "4",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é a Conect Play e como funciona o IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Conect Play é uma plataforma de IPTV premium que transmite canais de TV ao vivo, filmes, séries e futebol diretamente pela internet, sem necessidade de antena ou cabo.",
      },
    },
    {
      "@type": "Question",
      name: "Em quais dispositivos posso assistir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funciona em Smart TVs, TV Box, celulares e tablets Android e iPhone, e computadores Windows e Mac.",
      },
    },
    {
      "@type": "Question",
      name: "Tem futebol ao vivo e os principais campeonatos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, a Conect Play transmite futebol ao vivo com os principais campeonatos nacionais e internacionais.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
