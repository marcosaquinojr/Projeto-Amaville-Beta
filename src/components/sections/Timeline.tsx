import { Reveal } from "@/components/Reveal";

const steps = [
  { age: "1 — 3 anos", title: "Berçário & Infantil I", desc: "Acolhimento sensorial, brincar livre, vínculos seguros e o despertar da autonomia." },
  { age: "4 — 5 anos", title: "Infantil II & III", desc: "Linguagens, projetos investigativos, socialização e desenvolvimento socioemocional." },
  { age: "6 — 8 anos", title: "Fundamental I (1º — 3º)", desc: "Alfabetização viva, matemática com sentido e protagonismo infantil." },
  { age: "9 — 10 anos", title: "Fundamental I (4º — 5º)", desc: "Pensamento crítico, projetos autorais e preparação serena para o próximo ciclo." },
];

export function Timeline() {
  return (
    <section className="py-24 lg:py-32 bg-mist relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="blob" style={{ background: "var(--turquoise)", width: 400, height: 400, top: -100, right: -100 }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Jornada pedagógica</div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
            Uma trajetória <span className="text-gradient-warm">cuidada</span> do berçário ao 5º ano
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40" />
          <div className="space-y-10 lg:space-y-20">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "lg:text-left" : "lg:text-right"}`}>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-secondary mb-2">{s.age}</div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md lg:inline-block">{s.desc}</p>
                  </div>
                  <div className="relative hidden lg:flex justify-center mt-6 lg:mt-0">
                    <div className="relative h-20 w-20 rounded-3xl bg-card shadow-card grid place-items-center font-display font-extrabold text-2xl text-gradient-brand">
                      {i + 1}
                      <div className="absolute -inset-2 rounded-3xl border border-primary/20" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
