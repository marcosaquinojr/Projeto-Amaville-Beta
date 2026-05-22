import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import hero from "@/assets/hero-children.jpg";

const items = [
  { src: g3, alt: "Crianças brincando ao ar livre", className: "row-span-2" },
  { src: g1, alt: "Criança lendo livro" },
  { src: g2, alt: "Professora e alunos em atividade" },
  { src: g4, alt: "Mãos com blocos coloridos" },
  { src: g5, alt: "Fachada da escola", className: "col-span-2" },
  { src: hero, alt: "Sala de aula iluminada" },
];

export function Gallery({ compact = false }: { compact?: boolean }) {
  const list = compact ? items.slice(0, 4) : items;
  return (
    <section className="py-24 lg:py-32 bg-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-12 flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Galeria</div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight">
              Momentos que <span className="text-gradient-warm">contam</span> nossa história
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] lg:auto-rows-[240px] gap-4">
          {list.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className={`group relative overflow-hidden rounded-3xl shadow-soft ${it.className ?? ""}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
