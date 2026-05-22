import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AmaVille Escola — Educação Infantil e Fundamental I" },
      { name: "description", content: "Um lugar seguro para aprender, crescer e sonhar. Educação humanizada do berçário ao 5º ano." },
      { property: "og:title", content: "AmaVille Escola" },
      { property: "og:description", content: "Educação humanizada para crianças felizes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Values />
      <Timeline />
      <Gallery compact />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
