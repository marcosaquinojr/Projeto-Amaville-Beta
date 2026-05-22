import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/sections/Gallery";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — AmaVille Escola" },
      { name: "description", content: "Veja momentos reais do dia a dia da AmaVille Escola." },
      { property: "og:title", content: "Galeria AmaVille" },
      { property: "og:description", content: "Crianças felizes, ambientes acolhedores, aprendizado vivo." },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  return (
    <>
      <section className="pt-36 pb-12 text-center">
        <Reveal className="mx-auto max-w-3xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Galeria</div>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
            Um dia na <span className="text-gradient-brand">AmaVille</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Imagens que mostram o que palavras não alcançam.
          </p>
        </Reveal>
      </section>
      <Gallery />
      <CTA />
    </>
  );
}
