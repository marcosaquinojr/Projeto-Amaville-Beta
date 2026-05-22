import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511400289220"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
      <span className="relative flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground pl-4 pr-5 py-3 shadow-warm hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
      </span>
    </a>
  );
}
