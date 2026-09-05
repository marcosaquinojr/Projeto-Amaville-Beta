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

export function makeWhatsAppUrl(message: string) {
  return `https://wa.me/${SCHOOL.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function canonicalUrl(path = "/") {
  return `${SCHOOL.siteUrl}${path}`;
}
