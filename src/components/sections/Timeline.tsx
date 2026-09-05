import { useState } from "react";
import {
  Baby,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Palette,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    age: "1 ano",
    shortLabel: "Infantil I",
    phase: "Infantil I",
    concept: "Acolhimento e primeiras descobertas",
    desc: "A rotina combina cuidado, vínculo, movimento e exploração em experiências adequadas ao início da vida escolar.",
    objectives: [
      "Construção de vínculos com a equipe",
      "Exploração por meio dos sentidos",
      "Desenvolvimento motor e da linguagem",
      "Contato gradual com a rotina escolar",
    ],
    icon: Baby,
    color: "var(--turquoise)",
    bg: "var(--turquoise-soft)",
  },
  {
    age: "2 anos",
    shortLabel: "Infantil II",
    phase: "Infantil II",
    concept: "Autonomia, linguagem e convivência",
    desc: "Brincadeiras, interações e propostas mediadas ajudam a criança a ampliar a comunicação, a autonomia e a convivência.",
    objectives: [
      "Ampliação da linguagem oral",
      "Autonomia nas rotinas diárias",
      "Brincadeira e interação com o grupo",
      "Expressão corporal, artística e musical",
    ],
    icon: Palette,
    color: "var(--orange)",
    bg: "var(--orange-soft)",
  },
  {
    age: "3 a 5 anos",
    shortLabel: "Infantil III–V",
    phase: "Infantil III, IV e V",
    concept: "Investigar, criar e aprender em inglês",
    desc: "A proposta socioconstrutivista ganha novas linguagens e passa a incluir o inglês Wizard todas as manhãs pelo programa WIP.",
    objectives: [
      "Inglês Wizard diário com professor da Wizard",
      "Certificação incluída no programa",
      "Projetos, leitura, música e brincadeira",
      "Construção de conhecimento em grupo",
    ],
    icon: BookOpen,
    color: "var(--purple)",
    bg: "var(--purple-soft)",
  },
  {
    age: "6 a 9 anos",
    shortLabel: "1º–4º ano",
    phase: "Ensino Fundamental — 1º ao 4º ano",
    concept: "Conhecimento, autonomia e valores",
    desc: "Os anos iniciais aprofundam competências acadêmicas e humanas com materiais Poliedro e continuidade do programa WIP.",
    objectives: [
      "Coleções Gressus e Phases do Poliedro",
      "Inglês Wizard todas as manhãs",
      "Projetos interdisciplinares anuais",
      "Formação cristã e devocionais diários",
    ],
    icon: BookOpen,
    color: "var(--purple)",
    bg: "var(--purple-soft)",
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const ActiveIcon = active.icon;
  const next = () => setActiveIndex((value) => (value + 1) % steps.length);
  const prev = () => setActiveIndex((value) => (value - 1 + steps.length) % steps.length);

  return (
    <section className="bg-mist rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div
          className="blob"
          style={{
            background: "var(--turquoise)",
            width: 420,
            height: 420,
            top: -120,
            right: -100,
          }}
        />
        <div
          className="blob"
          style={{
            background: "var(--purple)",
            width: 320,
            height: 320,
            bottom: -80,
            left: -60,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-turquoise-soft px-4 py-2 text-xs font-semibold text-primary shadow-soft mb-4">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Turmas e idades
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            Do Infantil I ao 4º ano do Ensino Fundamental
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg">
            Conheça as turmas oferecidas para 2027 e os principais elementos da proposta em cada
            etapa.
          </p>
        </Reveal>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
          role="group"
          aria-label="Selecione uma etapa escolar"
        >
          {steps.map((step, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={step.phase}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={selected}
                aria-controls="etapa-detalhes"
                className={`rounded-2xl border px-3 py-4 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  selected
                    ? "border-primary bg-card shadow-card"
                    : "border-border bg-card/70 hover:border-primary/50"
                }`}
              >
                <span className="block font-display text-sm font-bold text-foreground">
                  {step.shortLabel}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{step.age}</span>
              </button>
            );
          })}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button
            type="button"
            onClick={prev}
            aria-label="Etapa anterior"
            className="absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-card shadow-card border border-border hover:bg-mist transition hidden md:grid place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeft className="h-5 w-5 text-foreground/80" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima etapa"
            className="absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-card shadow-card border border-border hover:bg-mist transition hidden md:grid place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRight className="h-5 w-5 text-foreground/80" aria-hidden="true" />
          </button>

          <article
            id="etapa-detalhes"
            aria-live="polite"
            className="relative bg-card border border-border/60 rounded-[2.5rem] p-8 lg:p-12 shadow-card overflow-hidden"
          >
            <div
              className="absolute left-0 top-8 bottom-8 w-2 rounded-r-full"
              style={{ backgroundColor: active.color }}
            />
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div
                  className="h-52 w-52 rounded-[2rem] grid place-items-center shadow-soft"
                  style={{ backgroundColor: active.bg }}
                >
                  <ActiveIcon
                    className="h-20 w-20"
                    style={{ color: active.color }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full bg-mist px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground/80">
                  {active.age}
                </span>
                <h3 className="mt-3 font-display font-extrabold text-2xl lg:text-3xl text-foreground">
                  {active.phase}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">{active.concept}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">{active.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {active.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                        style={{ color: active.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-foreground/80 leading-snug">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="mt-6 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
