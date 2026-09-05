import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g1Webp from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.jpg";
import g2Webp from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.jpg";
import g3Webp from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.jpg";
import g4Webp from "@/assets/gallery-4.webp";
import g5 from "@/assets/gallery-5.jpg";
import g5Webp from "@/assets/gallery-5.webp";
import hero from "@/assets/hero-children.jpg";
import heroWebp from "@/assets/hero-children.webp";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const items = [
  {
    src: g3,
    webp: g3Webp,
    alt: "Crianças brincando ao ar livre",
    className: "row-span-2",
  },
  { src: g1, webp: g1Webp, alt: "Criança lendo um livro" },
  { src: g2, webp: g2Webp, alt: "Professora acompanhando uma atividade" },
  { src: g4, webp: g4Webp, alt: "Atividade com blocos coloridos" },
  { src: g5, webp: g5Webp, alt: "Ambiente escolar", className: "col-span-2" },
  { src: hero, webp: heroWebp, alt: "Crianças em atividade educativa" },
];

export function Gallery({ compact = false }: { compact?: boolean }) {
  const list = compact ? items.slice(0, 4) : items;
  return (
    <section className="py-24 lg:py-32 bg-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Galeria
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
              Momentos que <span className="text-gradient-warm">contam</span> nossa história
            </h2>
          </div>
          {compact && (
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver toda a galeria
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] lg:auto-rows-[240px] gap-4">
          {list.map((it, i) => (
            <Reveal
              key={it.alt}
              delay={i * 0.05}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${it.className ?? ""}`}
            >
              <picture className="block h-full w-full">
                <source srcSet={it.webp} type="image/webp" />
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
