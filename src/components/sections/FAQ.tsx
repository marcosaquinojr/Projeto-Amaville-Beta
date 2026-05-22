import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Quais idades a escola atende?", a: "Atendemos do berçário (a partir de 1 ano) até o 5º ano do Ensino Fundamental I, com turmas pequenas e olhar atento em cada fase." },
  { q: "Como funciona o processo de adaptação?", a: "Construímos um plano individual com a família, respeitando o tempo único de cada criança. A adaptação é gradual, acolhedora e feita em parceria com pais e responsáveis." },
  { q: "A escola oferece período integral?", a: "Sim. Temos meio período (manhã ou tarde) e período integral, com almoço supervisionado por nutricionista, descanso e atividades extras." },
  { q: "Quais são os diferenciais pedagógicos?", a: "Currículo investigativo inspirado em Reggio Emilia e Montessori, desenvolvimento socioemocional estruturado, projetos autorais e duas línguas estrangeiras a partir da Educação Infantil." },
  { q: "Como funcionam as matrículas?", a: "Agende uma visita guiada com nossa equipe. Após conhecer a escola, oferecemos uma entrevista familiar e o processo é finalizado em poucos dias." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Perguntas frequentes</div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            Tudo que você precisa saber
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-2xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-card transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-bold text-lg text-foreground">{f.q}</span>
                  <span
                    className={`h-9 w-9 rounded-full bg-turquoise-soft grid place-items-center transition-transform flex-shrink-0 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" style={{ color: "var(--turquoise)" }} />
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-500 ${
                    open === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
