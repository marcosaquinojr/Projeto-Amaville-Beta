import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "Quais turmas a AmaVille oferece?",
    answer:
      "A escola atende Infantil I, II, III, IV e V e Ensino Fundamental do 1º ao 4º ano. Na apresentação de 2027, as idades correspondem de 1 a 9 anos.",
  },
  {
    question: "Quais são os horários?",
    answer:
      "A Modalidade Escolar funciona das 7h30 às 11h30. A Modalidade Integral funciona das 7h30 às 18h.",
  },
  {
    question: "Como funciona o inglês?",
    answer:
      "O Wizard International Program (WIP) oferece inglês todas as manhãs, do Infantil III ao 4º ano, com professor Wizard e certificação incluída.",
  },
  {
    question: "A modalidade integral inclui alimentação?",
    answer:
      "Sim. A modalidade integral inclui quatro refeições. O cardápio é elaborado pela nutricionista da escola, que também participa de experiências de educação alimentar. A modalidade escolar não inclui refeições.",
  },
  {
    question: "Quais atividades fazem parte da proposta?",
    answer:
      "A apresentação da escola inclui musicoterapia semanal, brinquedoteca, biblioteca acessível, área verde e atividades como balé, judô e futebol.",
  },
  {
    question: "Como a formação cristã aparece na rotina?",
    answer:
      "A escola realiza devocionais diários com leitura bíblica, oração e louvor, integrando princípios e valores cristãos à formação das crianças.",
  },
  {
    question: "Como começar a matrícula?",
    answer:
      "O primeiro passo é falar com a equipe e receber a apresentação. Depois, a família agenda a visita, preenche a pré-matrícula e segue para contrato, pagamento, kit e aquisição dos materiais.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Perguntas frequentes
          </div>
          <h2
            id="faq-title"
            className="font-display font-extrabold text-3xl lg:text-5xl text-foreground leading-tight"
          >
            Informações para planejar a matrícula
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.03}>
              <details className="group rounded-2xl bg-card border border-border/60 shadow-soft open:shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 font-display font-bold text-lg text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="h-9 w-9 rounded-full bg-turquoise-soft grid place-items-center transition-transform flex-shrink-0 group-open:rotate-45">
                    <Plus className="h-4 w-4 text-primary" aria-hidden="true" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
