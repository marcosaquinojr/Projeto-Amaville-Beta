import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import {
  Baby,
  Palette,
  BookOpen,
  Compass,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    age: "1 — 3 anos",
    phase: "Berçário & Infantil I",
    concept: "Acolhimento Sensorial & Primeiros Passos",
    desc: "Nesta fase primordial, priorizamos a transição afetiva do lar para a escola. Focamos no desenvolvimento sensorial, na exploração motora livre e na construção de vínculos de apego seguro em um ambiente feito sob medida para o brincar livre.",
    objectives: [
      "Estímulo sensorial integral e psicomotricidade guiada",
      "Adaptação afetiva humanizada e acolhimento individualizado",
      "Desenvolvimento da linguagem inicial e formas de expressão",
      "Introdução lúdica e natural à rotina escolar e independência",
    ],
    icon: Baby,
    color: "var(--turquoise)",
    bg: "var(--turquoise-soft)",
    badgeColor: "text-primary bg-turquoise-soft border-primary/20",
    shadow: "shadow-soft hover:shadow-[0_15px_40px_rgba(17,181,176,0.15)]",
  },
  {
    age: "4 — 6 anos",
    phase: "Infantil II ao V",
    concept: "Descoberta Criativa & Cem Linguagens",
    desc: "Inspirada na abordagem de Reggio Emilia, nossa pedagogia incentiva a criança a expressar suas hipóteses e teorias através da arte, música, corpo e narrativa. Estimulamos a socialização colaborativa e a autorregulação emocional.",
    objectives: [
      "Exploração ativa de artes visuais, musicalização e corpo",
      "Projetos de investigação baseados nas perguntas reais das crianças",
      "Resolução pacífica de conflitos e desenvolvimento da empatia",
      "Primeiros contatos lúdicos e significativos com letramento e números",
    ],
    icon: Palette,
    color: "var(--orange)",
    bg: "var(--orange-soft)",
    badgeColor: "text-secondary bg-orange-soft border-secondary/20",
    shadow: "shadow-warm hover:shadow-[0_15px_40px_rgba(245,124,32,0.18)]",
  },
  {
    age: "6 — 8 anos",
    phase: "Fundamental I (1º ao 3º)",
    concept: "Alfabetização Viva & Matemática Prática",
    desc: "Unindo afeto e rigor científico, consolidamos o processo de alfabetização e letramento matemático de forma concreta, contextualizada e conectada à realidade social da criança, estimulando sua paixão natural por descobrir.",
    objectives: [
      "Alfabetização fonológica e letramento reflexivo e autoral",
      "Raciocínio lógico-matemático através de materiais concretos",
      "Investigações científicas práticas de campo e projetos em grupo",
      "Desenvolvimento da auto-organização e rotinas sólidas de leitura",
    ],
    icon: BookOpen,
    color: "var(--purple)",
    bg: "var(--purple-soft)",
    badgeColor: "text-accent bg-purple-soft border-accent/20",
    shadow: "shadow-card hover:shadow-[0_15px_40px_rgba(106,13,189,0.15)]",
  },
  {
    age: "9 — 10 anos",
    phase: "Fundamental I (4º e 5º)",
    concept: "Autonomia, Pensamento Crítico & Liderança",
    desc: "Preparamos os estudantes para os desafios do próximo ciclo com foco em projetos autorais de impacto social, pesquisa avançada, ética cidadã e pensamento lógico analítico, fomentando a autogestão intelectual.",
    objectives: [
      "Desenvolvimento de projetos autorais e interdisciplinares",
      "Habilidades consolidadas de pesquisa, redação acadêmica e oratória",
      "Resolução de problemas matemáticos complexos e lógica computacional",
      "Transição serena, planejada e integrada para o Ensino Fundamental II",
    ],
    icon: Compass,
    color: "var(--orange)",
    bg: "var(--orange-soft)",
    badgeColor: "text-secondary bg-orange-soft border-secondary/20",
    shadow: "shadow-warm hover:shadow-[0_15px_40px_rgba(245,124,32,0.18)]",
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  const next = () => setActiveIndex((v) => (v + 1) % steps.length);
  const prev = () => setActiveIndex((v) => (v - 1 + steps.length) % steps.length);

  return (
    <section className="bg-mist rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="blob" style={{ background: "var(--turquoise)", width: 420, height: 420, top: -120, right: -100 }} />
        <div className="blob" style={{ background: "var(--purple)", width: 320, height: 320, bottom: -80, left: -60 }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-turquoise-soft px-4 py-2 text-xs font-semibold text-primary shadow-soft mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Jornada pedagógica
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            Uma trajetória <span className="text-gradient-warm">cuidada</span> do berçário ao 5º ano
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg">
            Nossa abordagem pedagógica respeita o ritmo de desenvolvimento biológico e intelectual de cada faixa etária com ciência e ternura.
          </p>
        </Reveal>

        {/* 1. Step Progression Bar */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          {/* Progress bar line */}
          <div className="absolute left-6 right-6 top-6 h-1 bg-border rounded-full -translate-y-1/2" />
          <div
            className="absolute left-6 top-6 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full -translate-y-1/2 transition-all duration-500 ease-out"
            style={{ width: `${(activeIndex / (steps.length - 1)) * 96}%` }}
          />

          {/* Interactive Steps */}
          <div className="relative flex justify-between">
            {steps.map((s, idx) => {
              const StepIcon = s.icon;
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={s.phase}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center gap-3 focus:outline-none group"
                >
                  <div
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border-4 transition-all duration-300 grid place-items-center relative z-10 ${
                      isSelected
                        ? "bg-card scale-110 shadow-soft"
                        : "bg-card border-border hover:border-muted text-muted-foreground"
                    }`}
                    style={{ borderColor: isSelected ? s.color : undefined }}
                  >
                    <StepIcon
                      className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110"
                      style={{ color: isSelected ? s.color : "var(--muted-foreground)" }}
                    />
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-2xl border border-primary/20 animate-pulse pointer-events-none" />
                    )}
                  </div>
                  <div className="text-center max-w-[90px] sm:max-w-none">
                    <span
                      className={`block text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors ${
                        isSelected ? "text-foreground font-extrabold" : "text-muted-foreground"
                      }`}
                    >
                      {s.phase.split(" ")[0]}
                    </span>
                    <span className="hidden sm:block text-[10px] text-muted-foreground mt-0.5">
                      {s.age}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Slide Card Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Side navigation arrows for desktop */}
          <button
            onClick={prev}
            aria-label="Etapa anterior"
            className="absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-card shadow-card border border-border/40 hover:bg-mist hover:scale-105 active:scale-95 transition grid place-items-center hidden md:grid"
          >
            <ChevronLeft className="h-5 w-5 text-foreground/80" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima etapa"
            className="absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-card shadow-card border border-border/40 hover:bg-mist hover:scale-105 active:scale-95 transition grid place-items-center hidden md:grid"
          >
            <ChevronRight className="h-5 w-5 text-foreground/80" />
          </button>

          {/* Large dynamic card with AnimatePresence */}
          <div className="relative min-h-[450px] lg:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`relative bg-card border border-border/50 rounded-[2.5rem] p-8 lg:p-12 shadow-soft hover:shadow-card transition-shadow duration-500 overflow-hidden ${active.shadow}`}
              >
                {/* Brand Color side border */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-2 rounded-r-full"
                  style={{ backgroundColor: active.color }}
                />

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Left Column */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div
                      className="relative h-60 w-60 sm:h-72 sm:w-72 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-soft group"
                      style={{ backgroundColor: active.bg }}
                    >
                      {/* background rotating blob decor */}
                      <div
                        className="absolute h-44 w-44 rounded-full filter blur-xl opacity-20 animate-blob-slow"
                        style={{ backgroundColor: active.color }}
                      />
                      
                      {/* Large Glowing Icon */}
                      <div className="relative h-28 w-28 rounded-[2rem] bg-card border border-border/40 shadow-soft grid place-items-center group-hover:scale-105 transition-transform duration-500">
                        <ActiveIcon className="h-14 w-14" style={{ color: active.color }} />
                        <div className="absolute -bottom-1.5 -right-1.5 h-6 w-6 rounded-full bg-secondary grid place-items-center shadow-soft">
                          <span className="text-[10px] font-extrabold text-secondary-foreground font-display">
                            {activeIndex + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detail Text Right Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      {/* Age range badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${active.badgeColor}`}
                      >
                        <Sparkles className="h-3 w-3" />
                        {active.age}
                      </span>
                      
                      <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-foreground mt-3">
                        {active.phase}
                      </h3>
                      <div className="text-sm font-semibold text-gradient-warm mt-1">
                        {active.concept}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                      {active.desc}
                    </p>

                    {/* Learning Goals list */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-foreground/80">
                        Principais Diretrizes & Objetivos:
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {active.objectives.map((obj, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="h-5 w-5 mt-0.5 flex-shrink-0"
                              style={{ color: active.color }}
                            />
                            <span className="text-sm text-foreground/80 leading-snug">
                              {obj}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sliding indicator dots for mobile/tablet */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ir para etapa ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-8" : "w-2.5 bg-border hover:bg-muted"
                }`}
                style={{ backgroundColor: idx === activeIndex ? active.color : undefined }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
