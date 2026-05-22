import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mariana & Felipe",
    role: "Pais da Helena, 5 anos",
    text: "A AmaVille transformou nossa rotina. A Helena vai feliz para a escola, conta tudo o que viveu no dia e demonstra uma maturidade emocional que nos surpreende. Sentimos que estamos numa parceria de verdade.",
  },
  {
    name: "Camila Ribeiro",
    role: "Mãe do Theo, 3 anos",
    text: "A adaptação foi conduzida com tanto cuidado que parecia coreografada. Cada detalhe pensado no nosso filho como indivíduo. Não imagino outro lugar para ele.",
  },
  {
    name: "Rafael Mendes",
    role: "Pai da Júlia, 8 anos",
    text: "A Júlia desenvolveu uma paixão genuína por aprender. Os projetos são profundos, os professores são presentes e o ambiente respira respeito. Vale cada momento.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Quem vive, conta</div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            Histórias reais de famílias <span className="text-gradient-brand">AmaVille</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative rounded-[2.5rem] bg-gradient-purple text-primary-foreground p-10 lg:p-16 overflow-hidden shadow-card">
            <div className="absolute inset-0 opacity-20">
              <div className="blob" style={{ background: "var(--turquoise)", width: 360, height: 360, top: -80, right: -80 }} />
              <div className="blob" style={{ background: "var(--orange)", width: 280, height: 280, bottom: -80, left: -50 }} />
            </div>
            <Quote className="relative h-12 w-12 opacity-40 mb-6" />
            <p className="relative font-display text-2xl lg:text-3xl leading-snug max-w-3xl">
              {t.text}
            </p>
            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-sm opacity-70">{t.role}</div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={prev} aria-label="Anterior" className="h-12 w-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="text-sm tabular-nums opacity-80">
                  {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </div>
                <button onClick={next} aria-label="Próximo" className="h-12 w-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
