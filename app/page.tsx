import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Benefits } from "@/components/sections/Benefits";
import { Plans } from "@/components/sections/Plans";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Conect Play | IPTV Premium com Futebol ao Vivo, Filmes e Séries",
  description:
    "Assine a Conect Play: mais de 200 canais ao vivo, futebol sem travar, filmes e séries em 4K. Compatível com Smart TV, TV Box, celular e PC. Teste agora pelo WhatsApp.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Benefits />
      <Plans />
      <HowItWorks />
      <Devices />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
