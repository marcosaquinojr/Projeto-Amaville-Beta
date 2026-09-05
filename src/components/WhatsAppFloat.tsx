import { MessageCircle } from "lucide-react";
import { makeWhatsAppUrl } from "@/lib/school";

export function WhatsAppFloat() {
  return (
    <a
      href={makeWhatsAppUrl("Olá! Gostaria de conhecer a AmaVille e agendar uma visita.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span className="relative flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground pl-4 pr-5 py-3 shadow-warm hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
      </span>
    </a>
  );
}
