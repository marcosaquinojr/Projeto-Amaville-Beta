import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { BookHeart, Globe, Music2, Salad, Sprout, HeartHandshake } from "lucide-react";
import { canonicalUrl } from "@/lib/school";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia — AmaVille Escola" },
      {
        name: "description",
        content:
          "Conheça a metodologia socioconstrutivista, o programa WIP da Wizard e a formação cristã da AmaVille.",
      },
      { property: "og:title", content: "Metodologia AmaVille" },
      {
        property: "og:description",
        content: "Aprendizagem socioconstrutivista, inglês Wizard diário e formação cristã.",
      },
      { property: "og:url", content: canonicalUrl("/metodologia") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/metodologia") }],
  }),
  component: Metodologia,
});

const pillars = [
  {
    icon: BookHeart,
    t: "Socioconstrutivismo",
    d: "A criança constrói conhecimento em experiências, interações e situações mediadas pelo professor.",
  },
  {
    icon: HeartHandshake,
    t: "Formação cristã",
    d: "Devocionais diários com leitura bíblica, oração e louvor apoiam a formação de valores.",
  },
  {
    icon: Globe,
    t: "Programa WIP",
    d: "Inglês Wizard todas as manhãs, do Infantil III ao 4º ano, com professor e certificação Wizard.",
  },
  {
    icon: Salad,
    t: "Educação alimentar",
    d: "Nutricionista responsável pelo cardápio também conduz experiências e aulas sobre alimentação.",
  },
  {
    icon: Music2,
    t: "Música e expressão",
    d: "Musicoterapia semanal e espaços para leitura, brincar e criar ampliam as formas de expressão.",
  },
  {
    icon: Sprout,
    t: "Natureza e movimento",
    d: "Área verde e atividades como balé, judô e futebol integram corpo, convivência e aprendizagem.",
  },
];

function Metodologia() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div
            className="blob"
            style={{ background: "var(--purple)", width: 380, height: 380, top: -100, right: -80 }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Metodologia
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
              Aprender com participação, <span className="text-gradient-warm">valores</span> e
              propósito.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A proposta socioconstrutivista coloca a criança em situações reais de descoberta,
              colaboração e construção do conhecimento, com mediação intencional do professor.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="bg-background rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]"
        aria-labelledby="pilares-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-3xl mb-12">
            <h2
              id="pilares-title"
              className="font-display font-extrabold text-3xl lg:text-5xl text-foreground"
            >
              Pilares que fazem parte da rotina
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05}>
                <article className="h-full p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center mb-5">
                    <p.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <CTA />
    </>
  );
}
