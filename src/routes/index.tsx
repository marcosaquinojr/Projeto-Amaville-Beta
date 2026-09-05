import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { SchoolExperience } from "@/components/sections/SchoolExperience";
import { Enrollment } from "@/components/sections/Enrollment";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { canonicalUrl } from "@/lib/school";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AmaVille Escola — Educação Infantil e Fundamental I" },
      {
        name: "description",
        content:
          "Escola cristã em São Luís com Educação Infantil, Fundamental até o 4º ano e inglês Wizard todos os dias pelo programa WIP.",
      },
      { property: "og:title", content: "AmaVille Escola" },
      {
        property: "og:description",
        content: "Educação cristã, metodologia socioconstrutivista e inglês Wizard diário.",
      },
      { property: "og:url", content: canonicalUrl("/") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Values />
      <Timeline />
      <Enrollment />
      <Gallery compact />
      <SchoolExperience />
      <FAQ />
      <CTA />
    </>
  );
}
