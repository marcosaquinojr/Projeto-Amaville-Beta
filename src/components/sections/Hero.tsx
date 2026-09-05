import { Link } from "@tanstack/react-router";
import { ArrowRight, BookHeart, Languages, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import hero960 from "@/assets/hero-children-960.webp";
import hero1440 from "@/assets/hero-children-1440.webp";
import { SCHOOL } from "@/lib/school";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="blob"
          style={{
            background: "var(--turquoise)",
            width: 460,
            height: 460,
            top: -120,
            left: -100,
            opacity: 0.35,
          }}
        />
        <div
          className="blob"
          style={{
            background: "var(--orange)",
            width: 360,
            height: 360,
            top: 100,
            right: -120,
            opacity: 0.3,
          }}
        />
        <div
          className="blob"
          style={{
            background: "var(--purple)",
            width: 280,
            height: 280,
            bottom: -100,
            left: "40%",
            opacity: 0.15,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur px-4 py-2 text-xs font-semibold text-accent shadow-soft mb-6">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Matrículas abertas para {SCHOOL.schoolYear}
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Ensino com <span className="text-gradient-brand">amor</span>, valores e um mundo de
            descobertas.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Escola cristã com Educação Infantil, Ensino Fundamental até o 4º ano e inglês Wizard
            todos os dias pelo programa WIP.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-7 py-4 font-semibold shadow-warm hover:scale-[1.03] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Agendar uma visita
              <ArrowRight
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/metodologia"
              className="inline-flex items-center justify-center rounded-full bg-card/90 backdrop-blur text-foreground px-7 py-4 font-semibold border border-border hover:bg-card transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Conhecer a proposta
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card">
            <picture className="block h-full w-full">
              <source
                type="image/webp"
                srcSet={`${hero960} 960w, ${hero1440} 1440w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <img
                src={heroImg}
                alt="Crianças participando de uma atividade educativa"
                width={1920}
                height={1080}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-purple/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 lg:-left-10 top-12 rounded-2xl bg-card shadow-card p-4 max-w-[215px] animate-float">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-turquoise-soft grid place-items-center">
                <Languages className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Inglês Wizard diário</div>
                <div className="text-[11px] text-muted-foreground">Programa WIP e certificação</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-6 bottom-12 rounded-2xl bg-card shadow-card p-4 animate-float-slow">
            <div className="flex items-center gap-3">
              <BookHeart className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <div className="text-xs font-semibold text-foreground">Formação cristã</div>
                <div className="text-[11px] text-muted-foreground">Devocionais todos os dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
