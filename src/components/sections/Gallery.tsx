import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SCHOOL } from "@/lib/school";
import { INSTAGRAM_MEDIA } from "@/lib/instagram";

const items = [
  {
    src: INSTAGRAM_MEDIA.gallery[1],
    alt: "Crianças da AmaVille brincando ao ar livre",
  },
  { src: INSTAGRAM_MEDIA.gallery[0], alt: "Criança da AmaVille em atividade de aprendizagem" },
  { src: INSTAGRAM_MEDIA.gallery[2], alt: "Momento de devocional com a turma da AmaVille" },
  { src: INSTAGRAM_MEDIA.gallery[3], alt: "Piquenique da turma da AmaVille" },
  { src: INSTAGRAM_MEDIA.gallery[4], alt: "Registro de uma vivência escolar da AmaVille" },
  { src: INSTAGRAM_MEDIA.gallery[5], alt: "Projeto pedagógico da AmaVille" },
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {list.map((it, i) => (
            <Reveal
              key={it.alt}
              delay={i * 0.05}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-card shadow-soft"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Fotos selecionadas do perfil oficial da AmaVille no{" "}
          <a
            href={SCHOOL.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
