import { Link } from "@tanstack/react-router";
import { Clock3, FileText, Utensils } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/school";

const modalities = [
  {
    name: "Modalidade Escolar",
    hours: "7h30 às 11h30",
    meals: "Sem refeições incluídas",
    monthly: "R$ 1.450/mês",
    prompt: "R$ 1.250 com pontualidade",
    color: "var(--turquoise)",
  },
  {
    name: "Modalidade Integral",
    hours: "7h30 às 18h",
    meals: "4 refeições incluídas",
    monthly: "R$ 2.600/mês",
    prompt: "R$ 2.300 com pontualidade",
    color: "var(--purple)",
  },
];

const steps = [
  "Entre em contato com a escola",
  "Receba a apresentação da AmaVille",
  "Agende uma visita à escola",
  "Preencha a pré-matrícula",
  "Assine o contrato e efetue o pagamento",
  "Receba o kit de matrícula",
  "Adquira os materiais",
  "Prepare-se para o início das aulas",
];

export function Enrollment() {
  return (
    <section
      className="bg-background rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 lg:pb-32"
      aria-labelledby="modalidades-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Matrículas {SCHOOL.schoolYear}
          </div>
          <h2
            id="modalidades-title"
            className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight"
          >
            Escolha a rotina que funciona para sua família
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            As duas modalidades incluem a proposta pedagógica da AmaVille. No integral, a criança
            permanece na escola durante todo o dia e recebe quatro refeições.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {modalities.map((modality, index) => (
            <Reveal key={modality.name} delay={index * 0.06}>
              <article className="h-full rounded-3xl bg-card border border-border/70 p-8 shadow-soft">
                <div
                  className="h-2 w-16 rounded-full mb-6"
                  style={{ backgroundColor: modality.color }}
                />
                <h3 className="font-display text-2xl font-extrabold text-foreground">
                  {modality.name}
                </h3>
                <div className="mt-5 space-y-3 text-foreground/80">
                  <p className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
                    {modality.hours}
                  </p>
                  <p className="flex items-center gap-3">
                    <Utensils className="h-5 w-5 text-primary" aria-hidden="true" />
                    {modality.meals}
                  </p>
                </div>
                <div className="mt-7 rounded-2xl bg-mist p-5">
                  <p className="font-display text-xl font-bold text-foreground">
                    {modality.monthly}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">{modality.prompt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Valores informados na apresentação de {SCHOOL.schoolYear}. Matrícula e materiais são
          cobrados separadamente; o material Wizard deve ser confirmado com a escola. Consulte
          disponibilidade, condições e atualização dos valores no atendimento.
        </p>

        <div className="mt-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Como se matricular
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-foreground leading-tight">
              Um processo claro, da conversa ao primeiro dia
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              As aulas de {SCHOOL.schoolYear} estão previstas para começar em 18 de janeiro. A
              equipe confirma vagas e documentos durante o atendimento.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Iniciar atendimento
              </Link>
              <a
                href={SCHOOL.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Ver apresentação 2027
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ol className="grid sm:grid-cols-2 gap-3">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-soft"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-purple-soft font-display text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm font-semibold text-foreground/80">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
