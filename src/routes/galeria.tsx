import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/sections/Gallery";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/Reveal";
import { Instagram } from "lucide-react";
import { SCHOOL, canonicalUrl } from "@/lib/school";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — AmaVille Escola" },
      {
        name: "description",
        content: "Conheça ambientes e experiências que representam a proposta da AmaVille Escola.",
      },
      { property: "og:title", content: "Galeria AmaVille" },
      {
        property: "og:description",
        content: "Crianças felizes, ambientes acolhedores, aprendizado vivo.",
      },
      { property: "og:url", content: canonicalUrl("/galeria") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/galeria") }],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  return (
    <>
      <section className="pt-36 pb-12 text-center">
        <Reveal className="mx-auto max-w-3xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Galeria
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
            Um dia na <span className="text-gradient-brand">AmaVille</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Imagens que mostram o que palavras não alcançam.
          </p>
        </Reveal>
      </section>
      <Gallery />
      <section className="px-6 pb-16 text-center">
        <a
          href={SCHOOL.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Instagram className="h-5 w-5 text-primary" aria-hidden="true" />
          Ver a rotina mais recente no Instagram
        </a>
      </section>
      <CTA />
    </>
  );
}
