export const SCHOOL = {
  name: "AmaVille Escola",
  siteUrl: "https://amaviile.marcosaquinojunior.workers.dev",
  phoneDisplay: "(98) 98507-6586",
  phoneE164: "5598985076586",
  address: "Av. Litorânea, 07 — Olho D'Água, São Luís - MA, 65067-490",
  mapUrl: "https://www.google.com/maps/place/AmaVille/@-2.4837716,-44.2409785,17z",
  instagramUrl: "https://www.instagram.com/amavilleescolaprogramabilingue/",
  brochureUrl: "https://drive.google.com/file/d/12vlWQY2IUE6rFbsZP4N6YVOU0gn1ICgw/view?usp=sharing",
  schoolYear: "2027",
} as const;

/**
 * Fotos oficiais selecionadas do perfil da AmaVille.
 * O endpoint /media/?size=l é estável e o Instagram renova o CDN automaticamente.
 */
export const INSTAGRAM_MEDIA = {
  hero: "https://www.instagram.com/p/DP6fFA9EVS8/media/?size=l",
  about: "https://www.instagram.com/p/Dap_PmqFtWs/media/?size=l",
  gallery: [
    "https://www.instagram.com/p/DQaITVfAcNa/media/?size=l",
    "https://www.instagram.com/p/DP6fFA9EVS8/media/?size=l",
    "https://www.instagram.com/p/Dap_PmqFtWs/media/?size=l",
    "https://www.instagram.com/p/DbJi1OuBbFU/media/?size=l",
    "https://www.instagram.com/p/DbWb_sAh2QU/media/?size=l",
    "https://www.instagram.com/p/DZ-bL8XlOt-/media/?size=l",
  ],
} as const;

export function makeWhatsAppUrl(message: string) {
  return `https://wa.me/${SCHOOL.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function canonicalUrl(path = "/") {
  return `${SCHOOL.siteUrl}${path}`;
}
