import { BookOpen, Dumbbell, LibraryBig, Music2, Salad, Trees } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const experiences = [
  {
    icon: Music2,
    title: "Musicoterapia semanal",
    description: "Vivências musicais fazem parte da rotina semanal das turmas.",
  },
  {
    icon: LibraryBig,
    title: "Biblioteca acessível",
    description: "Livros ao alcance das crianças favorecem autonomia e vínculo com a leitura.",
  },
  {
    icon: BookOpen,
    title: "Brinquedoteca",
    description: "Um espaço dedicado ao brincar, à imaginação e às interações.",
  },
  {
    icon: Salad,
    title: "Educação alimentar",
    description: "Cardápio planejado e atividades conduzidas pela nutricionista da escola.",
  },
  {
    icon: Dumbbell,
    title: "Balé, judô e futebol",
    description: "Atividades esportivas ampliam o repertório corporal e social.",
  },
  {
    icon: Trees,
    title: "Área verde",
    description: "Contato com a natureza e espaço para experiências fora da sala de aula.",
  },
];

export function SchoolExperience() {
  return (
    <section className="py-24 lg:py-32 bg-background" aria-labelledby="experiencias-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            A experiência AmaVille
          </div>
          <h2
            id="experiencias-title"
            className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight"
          >
            Aprendizagem que envolve corpo, mente e valores
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A escola também realiza três projetos anuais dedicados à família, ao meio ambiente e à
            cidade de São Luís.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-turquoise-soft">
                  <experience.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {experience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
