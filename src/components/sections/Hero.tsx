import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-hero">
      {/* floating shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="blob" style={{ background: "var(--turquoise)", width: 460, height: 460, top: -120, left: -100, opacity: 0.35 }} />
        <div className="blob" style={{ background: "var(--orange)", width: 360, height: 360, top: 100, right: -120, opacity: 0.3 }} />
        <div className="blob" style={{ background: "var(--purple)", width: 280, height: 280, bottom: -100, left: "40%", opacity: 0.15 }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-4 py-2 text-xs font-semibold text-purple shadow-soft mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Matrículas abertas para 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground"
          >
            Um lugar seguro para{" "}
            <span className="text-gradient-brand">aprender</span>,{" "}
            <span className="text-gradient-warm">crescer</span>{" "}
            e sonhar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Educação Infantil e Anos Iniciais do Ensino Fundamental com uma abordagem humanizada, lúdica e socioemocional — onde cada criança é vista, ouvida e amada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-7 py-4 font-semibold shadow-warm hover:scale-[1.03] transition-transform"
            >
              Agende uma visita
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/metodologia"
              className="inline-flex items-center justify-center rounded-full bg-card/80 backdrop-blur text-foreground px-7 py-4 font-semibold border border-border hover:bg-card transition"
            >
              Conheça nossa metodologia
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex items-center gap-8"
          >
            {[
              { n: "+18", l: "anos de história" },
              { n: "12:1", l: "alunos por professor" },
              { n: "98%", l: "famílias indicariam" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-2xl text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card">
            <img
              src={heroImg}
              alt="Crianças felizes aprendendo na AmaVille Escola"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple/30 via-transparent to-transparent" />
          </div>

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 lg:-left-10 top-12 rounded-2xl bg-card shadow-card p-4 max-w-[200px]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-turquoise-soft grid place-items-center text-turquoise">
                <Sparkles className="h-5 w-5" style={{ color: "var(--turquoise)" }} />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Acolhimento real</div>
                <div className="text-[11px] text-muted-foreground">Adaptação afetiva</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 lg:-right-6 bottom-12 rounded-2xl bg-card shadow-card p-4"
          >
            <div className="flex -space-x-2 mb-2">
              {["#11B5B0", "#F57C20", "#6A0DAD"].map((c) => (
                <div key={c} className="h-7 w-7 rounded-full border-2 border-card" style={{ background: c }} />
              ))}
            </div>
            <div className="text-xs font-semibold text-foreground">Famílias felizes</div>
            <div className="text-[11px] text-muted-foreground">+ de 800 atendidas</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
