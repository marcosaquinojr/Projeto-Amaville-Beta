import { Heart, Shield, Sparkles, Leaf, Users, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const values = [
  { icon: Heart, title: "Afeto que educa", desc: "Vínculos seguros são a base para qualquer aprendizagem real.", color: "var(--orange)", bg: "var(--orange-soft)" },
  { icon: Shield, title: "Segurança total", desc: "Infraestrutura, processos e olhar atento em cada momento do dia.", color: "var(--turquoise)", bg: "var(--turquoise-soft)" },
  { icon: Sparkles, title: "Criatividade viva", desc: "Linguagens artísticas, brincar livre e curiosidade como combustível.", color: "var(--purple)", bg: "var(--purple-soft)" },
  { icon: Leaf, title: "Desenvolvimento integral", desc: "Cognitivo, emocional, social e motor — tudo conectado.", color: "var(--turquoise)", bg: "var(--turquoise-soft)" },
  { icon: Users, title: "Comunidade", desc: "Família e escola caminhando juntas em diálogo constante.", color: "var(--orange)", bg: "var(--orange-soft)" },
  { icon: BookOpen, title: "Aprender com sentido", desc: "Projetos investigativos que conectam o saber à vida real.", color: "var(--purple)", bg: "var(--purple-soft)" },
];

export function Values() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Nossos valores</div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            O que move a <span className="text-gradient-brand">AmaVille</span> todos os dias
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Construímos uma escola onde cada criança é protagonista da própria história — com escuta, presença e propósito.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="group h-full p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500">
                <div
                  className="h-14 w-14 rounded-2xl grid place-items-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: v.bg }}
                >
                  <v.icon className="h-6 w-6" style={{ color: v.color }} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
