import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 rounded-2xl bg-gradient-brand grid place-items-center shadow-soft transition-transform group-hover:scale-110">
            <span className="text-primary-foreground font-display font-extrabold text-lg">A</span>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-secondary" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-lg text-foreground">AmaVille</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Escola</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-3 inline-flex items-center rounded-full bg-gradient-warm text-secondary-foreground px-5 py-2.5 text-sm font-semibold shadow-warm hover:scale-105 transition-transform"
          >
            Agendar visita
          </Link>
        </nav>

        <button
          className="lg:hidden h-11 w-11 grid place-items-center rounded-full bg-card shadow-soft"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground border-b border-border/60"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center rounded-full bg-gradient-warm text-secondary-foreground px-5 py-3 text-sm font-semibold"
            >
              Agendar visita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
