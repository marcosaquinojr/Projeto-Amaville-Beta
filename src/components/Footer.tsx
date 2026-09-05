import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, FileText } from "lucide-react";
import { Logo } from "./Logo";
import { SCHOOL, makeWhatsAppUrl } from "@/lib/school";

export function Footer() {
  return (
    <footer className="relative bg-gradient-purple text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="blob"
          style={{ background: "var(--turquoise)", width: 400, height: 400, top: -100, right: -80 }}
        />
        <div
          className="blob"
          style={{ background: "var(--orange)", width: 300, height: 300, bottom: -100, left: -50 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link
            to="/"
            aria-label="AmaVille Escola — início"
            className="inline-block rounded-lg mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Logo variant="dark" heightClass="h-14 lg:h-[72px]" />
          </Link>
          <p className="text-primary-foreground/80 max-w-md leading-relaxed">
            Escola cristã com Educação Infantil, Ensino Fundamental até o 4º ano e inglês Wizard
            todos os dias pelo programa WIP.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={SCHOOL.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da AmaVille"
              className="h-10 w-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SCHOOL.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apresentação da AmaVille 2027"
              className="h-10 w-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display font-bold mb-4">Navegação</h2>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link
                to="/sobre"
                className="rounded hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/metodologia"
                className="rounded hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Metodologia
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                className="rounded hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="rounded hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display font-bold mb-4">Contato</h2>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <a
                href={SCHOOL.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded hover:text-primary-foreground underline underline-offset-4 decoration-primary-foreground/30 hover:decoration-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {SCHOOL.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <a
                href={makeWhatsAppUrl("Olá! Gostaria de falar com a AmaVille.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded hover:text-primary-foreground underline underline-offset-4 decoration-primary-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {SCHOOL.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/80">
        © {new Date().getFullYear()} AmaVille Escola. Feito com afeto.
      </div>
    </footer>
  );
}
