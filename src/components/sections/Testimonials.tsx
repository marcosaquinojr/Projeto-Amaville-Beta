import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Vasconcelos",
    role: "Mãe da Clara, 4 anos",
    text: "O acolhimento da AmaVille na Litorânea é inexplicável. Minha filha se adaptou super rápido, acorda feliz para ir à escola e conta empolgada sobre os projetos de investigação. Sentimos uma parceria de verdade e muita segurança no olhar atencioso da equipe.",
    rating: 5,
    date: "Há 2 semanas",
  },
  {
    name: "Felipe Albuquerque",
    role: "Pai do Davi, 6 anos",
    text: "Proposta pedagógica fantástica! Ver meu filho aprendendo matemática de forma prática e lendo com prazer é gratificante. O contato constante com a brisa da Litorânea e a natureza torna o espaço único em São Luís. Melhor escolha de escola que fizemos.",
    rating: 5,
    date: "Há 1 mês",
  },
  {
    name: "Camila Ribeiro",
    role: "Mãe do Theo, 2 anos",
    text: "A adaptação no berçário foi conduzida com um carinho que parecia coreografado. O Theo se sente amado, e o foco no bilinguismo e regulação emocional desde pequeno faz toda a diferença. Infraestrutura impecável e extremamente segura.",
    rating: 5,
    date: "Há 3 meses",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-background rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 lg:pb-32 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Quem vive, conta</div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            O que dizem as famílias <span className="text-gradient-brand">AmaVille</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative rounded-[2.5rem] bg-gradient-purple text-primary-foreground p-10 lg:p-16 overflow-hidden shadow-card">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="blob" style={{ background: "var(--turquoise)", width: 360, height: 360, top: -80, right: -80 }} />
              <div className="blob" style={{ background: "var(--orange)", width: 280, height: 280, bottom: -80, left: -50 }} />
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-primary-foreground/10 pb-6">
              {/* Google Reviews Badge */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-primary-foreground/10 px-3 py-1.5 rounded-full border border-primary-foreground/10">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.646 0-8.423-3.728-8.423-8.314 0-4.586 3.777-8.314 8.423-8.314 2.138 0 4.093.815 5.568 2.146l3.23-3.23C18.49 1.157 15.54 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.88 0 11.23-4.83 11.23-11.24 0-.7-.06-1.37-.18-1.955H12.24z"/>
                </svg>
                Google Review
              </div>
              <div className="text-xs opacity-75">{t.date}</div>
            </div>

            <Quote className="relative h-12 w-12 opacity-35 mb-6" />
            <p className="relative font-display text-xl sm:text-2xl lg:text-3xl leading-snug max-w-3xl">
              "{t.text}"
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-xs sm:text-sm opacity-70">{t.role}</div>
              </div>
              
              <div className="flex items-center gap-3">
                <button onClick={prev} aria-label="Anterior" className="h-12 w-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="text-sm tabular-nums opacity-85">
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
