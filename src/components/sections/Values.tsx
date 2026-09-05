import { BookHeart, HeartHandshake, Languages, Leaf, Salad, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: BookHeart,
    title: "Aprendizagem socioconstrutivista",
    desc: "A criança participa de experiências e interações que dão sentido ao conhecimento.",
    color: "var(--turquoise)",
    bg: "var(--turquoise-soft)",
  },
  {
    icon: HeartHandshake,
    title: "Princípios cristãos",
    desc: "Leitura bíblica, oração e louvor fazem parte dos devocionais diários.",
    color: "var(--purple)",
    bg: "var(--purple-soft)",
  },
  {
    icon: Languages,
    title: "Programa WIP",
    desc: "Inglês Wizard todas as manhãs, do Infantil III ao 4º ano, com certificação.",
    color: "var(--orange)",
    bg: "var(--orange-soft)",
  },
  {
    icon: Salad,
    title: "Educação alimentar",
    desc: "Cardápio orientado e experiências de aprendizagem com a nutricionista da escola.",
    color: "var(--turquoise)",
    bg: "var(--turquoise-soft)",
  },
  {
    icon: Leaf,
    title: "Natureza e movimento",
    desc: "Área verde, balé, judô e futebol ampliam as vivências das crianças.",
    color: "var(--orange)",
    bg: "var(--orange-soft)",
  },
  {
    icon: Users,
    title: "Escola e família",
    desc: "Projetos anuais aproximam família, meio ambiente e a cidade de São Luís.",
    color: "var(--purple)",
    bg: "var(--purple-soft)",
  },
];

export function Values() {
  return (
    <section className="bg-background rounded-t-[3rem] lg:rounded-t-[4.5rem] relative z-10 -mt-16 pt-32 lg:pt-40 pb-24 lg:pb-32 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Nossa proposta
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            Uma formação que cuida da criança por inteiro
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Conhecimento, fé, linguagem, saúde, movimento e vínculos fazem parte de uma mesma
            experiência educativa.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <article className="group h-full p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500">
                <div
                  className="h-14 w-14 rounded-2xl grid place-items-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: value.bg }}
                >
                  <value.icon
                    className="h-6 w-6"
                    style={{ color: value.color }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
