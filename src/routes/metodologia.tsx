import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { Brain, Heart, Globe, Users, Sprout, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia — AmaVille Escola" },
      { name: "description", content: "Conheça a abordagem pedagógica da AmaVille: investigativa, humanizada e socioemocional." },
      { property: "og:title", content: "Metodologia AmaVille" },
      { property: "og:description", content: "Uma pedagogia viva inspirada em Reggio Emilia, Montessori e neurociência." },
    ],
  }),
  component: Metodologia,
});

const pillars = [
  { icon: Brain, t: "Pensamento investigativo", d: "Projetos autorais e perguntas reais como motor da aprendizagem." },
  { icon: Heart, t: "Socioemocional estruturado", d: "Rodas de conversa, mediação afetiva e regulação emocional como currículo." },
  { icon: HeartHandshake, t: "Princípios Cristãos", d: "Formação moral orientada pelo amor de Cristo, fé, respeito mútuo e caráter." },
  { icon: Globe, t: "Imersão Bilíngue Ativa", d: "O inglês vivenciado diariamente de forma natural e prática na rotina da criança." },
  { icon: Users, t: "Comunidade aprendente", d: "Famílias, professores e crianças co-construindo a escola todos os dias." },
  { icon: Sprout, t: "Natureza e movimento", d: "Tempo ao ar livre, hortas, escalada e brincar livre como direitos." },
];

function Metodologia() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="blob" style={{ background: "var(--purple)", width: 380, height: 380, top: -100, right: -80 }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Metodologia</div>
            <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
              Uma pedagogia <span className="text-gradient-warm">viva</span>, com ciência e ternura.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Inspirada em Reggio Emilia, Montessori e nas neurociências do desenvolvimento, nossa abordagem coloca a criança no centro — como protagonista, pesquisadora e cidadã.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="h-full p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center mb-5">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Timeline />
      <CTA />
    </>
  );
}
