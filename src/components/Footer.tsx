import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-gradient-purple text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="blob" style={{ background: "var(--turquoise)", width: 400, height: 400, top: -100, right: -80 }} />
        <div className="blob" style={{ background: "var(--orange)", width: 300, height: 300, bottom: -100, left: -50 }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-2xl bg-primary-foreground/15 backdrop-blur grid place-items-center">
              <span className="font-display font-extrabold text-xl">A</span>
            </div>
            <div>
              <div className="font-display font-extrabold text-xl">AmaVille</div>
              <div className="text-xs uppercase tracking-[0.18em] opacity-70">Escola</div>
            </div>
          </div>
          <p className="text-primary-foreground/80 max-w-md leading-relaxed">
            Um lugar seguro para aprender, crescer e sonhar. Educação Infantil e Anos Iniciais do Ensino Fundamental com afeto, ciência e propósito.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="h-10 w-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-10 w-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/sobre" className="hover:text-primary-foreground">Sobre</Link></li>
            <li><Link to="/metodologia" className="hover:text-primary-foreground">Metodologia</Link></li>
            <li><Link to="/galeria" className="hover:text-primary-foreground">Galeria</Link></li>
            <li><Link to="/contato" className="hover:text-primary-foreground">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> Rua das Acácias, 250 — Jardim Feliz</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (11) 4002-8922</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> ola@amaville.escola</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} AmaVille Escola. Feito com afeto.
      </div>
    </footer>
  );
}
