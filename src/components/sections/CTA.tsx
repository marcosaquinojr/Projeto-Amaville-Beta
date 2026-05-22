import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm text-secondary-foreground p-12 lg:p-20 text-center shadow-warm">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="blob" style={{ background: "var(--turquoise)", width: 400, height: 400, top: -100, left: -80 }} />
              <div className="blob" style={{ background: "var(--purple)", width: 320, height: 320, bottom: -100, right: -80 }} />
            </div>
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display font-extrabold text-3xl lg:text-5xl leading-tight">
                Venha sentir a AmaVille por dentro.
              </h2>
              <p className="mt-5 text-lg opacity-90">
                Uma visita vale mais que mil fotos. Conheça nossos espaços, converse com nossa equipe e descubra o que torna a AmaVille única.
              </p>
              <Link
                to="/contato"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-card text-foreground px-8 py-4 font-semibold shadow-card hover:scale-105 transition-transform"
              >
                Agendar visita guiada
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
