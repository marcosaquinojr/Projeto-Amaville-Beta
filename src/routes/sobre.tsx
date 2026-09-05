import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/sections/CTA";
import { Values } from "@/components/sections/Values";
import { canonicalUrl } from "@/lib/school";
import { INSTAGRAM_MEDIA } from "@/lib/instagram";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AmaVille Escola" },
      {
        name: "description",
        content: "Conheça a história, a missão e os valores da AmaVille Escola.",
      },
      { property: "og:title", content: "Sobre a AmaVille Escola" },
      {
        property: "og:description",
        content: "Conheça a proposta cristã e socioconstrutivista da AmaVille Escola.",
      },
      { property: "og:url", content: canonicalUrl("/sobre") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/sobre") }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div
            className="blob"
            style={{ background: "var(--turquoise)", width: 400, height: 400, top: -80, left: -80 }}
          />
          <div
            className="blob"
            style={{ background: "var(--orange)", width: 300, height: 300, top: 100, right: -80 }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Sobre nós
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
              Uma escola que <span className="text-gradient-brand">acolhe</span>, escuta e
              transforma.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              A AmaVille reúne formação cristã, aprendizagem socioconstrutivista e cuidado integral
              para desenvolver competências, habilidades e valores em cada etapa da infância.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card">
              <img
                src={INSTAGRAM_MEDIA.about}
                alt="Turma da AmaVille reunida em um momento de devocional"
                className="h-full w-full object-cover"
                width={1080}
                height={1440}
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-16">
          {[
            {
              t: "Nossa missão",
              d: "Favorecer o desenvolvimento de competências e habilidades, formando cidadãos responsáveis, críticos e conscientes, com princípios e valores cristãos.",
            },
            {
              t: "Nossa proposta",
              d: "Criar situações de aprendizagem em que a criança participa, investiga, troca experiências e constrói conhecimento com a mediação do professor.",
            },
            {
              t: "Nossa rotina",
              d: "Unir aprendizagem, formação espiritual, alimentação orientada, movimento, artes e convivência em um ambiente acolhedor.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="font-display font-extrabold text-2xl text-gradient-brand mb-3">
                {b.t}
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Values />
      <CTA />
    </>
  );
}
