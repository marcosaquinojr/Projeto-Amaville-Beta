import hero from "@/assets/instagram/hero.jpg";
import about from "@/assets/instagram/about.jpg";
import gallery1 from "@/assets/instagram/gallery-1.jpg";
import gallery2 from "@/assets/instagram/gallery-2.jpg";
import gallery3 from "@/assets/instagram/gallery-3.jpg";
import gallery4 from "@/assets/instagram/gallery-4.jpg";

/**
 * Imagens oficiais selecionadas do perfil da AmaVille.
 * Elas ficam dentro do bundle para que o site não dependa dos endpoints
 * dinâmicos do Instagram, que podem bloquear ou expirar no navegador.
 */
export const INSTAGRAM_MEDIA = {
  hero,
  about,
  gallery: [hero, about, gallery1, gallery2, gallery3, gallery4],
} as const;
