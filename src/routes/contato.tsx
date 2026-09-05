import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import { CheckCircle2, Clock, MapPin, MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SCHOOL, canonicalUrl, makeWhatsAppUrl } from "@/lib/school";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e matrícula 2027 — AmaVille Escola" },
      {
        name: "description",
        content: "Fale com a AmaVille pelo WhatsApp e agende uma visita à escola em São Luís.",
      },
      { property: "og:title", content: "Fale com a AmaVille" },
      {
        property: "og:description",
        content: "Agende uma visita e consulte as vagas para 2027.",
      },
      { property: "og:url", content: canonicalUrl("/contato") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/contato") }],
  }),
  component: Contato,
});

function Contato() {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nome") ?? "").trim();
    const child = String(data.get("crianca") ?? "").trim();
    const phone = String(data.get("telefone") ?? "").trim();
    const stage = String(data.get("turma") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    const text = [
      "Olá! Gostaria de agendar uma visita à AmaVille.",
      `Responsável: ${name}`,
      `Criança: ${child}`,
      `Telefone para retorno: ${phone}`,
      `Turma de interesse: ${stage}`,
      message ? `Mensagem: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = makeWhatsAppUrl(text);

    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const contacts = [
    {
      icon: MapPin,
      title: "Endereço",
      description: SCHOOL.address,
      link: SCHOOL.mapUrl,
      action: "Ver no Google Maps",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: SCHOOL.phoneDisplay,
      link: makeWhatsAppUrl("Olá! Gostaria de conhecer a AmaVille."),
      action: "Iniciar conversa",
    },
    {
      icon: Clock,
      title: "Modalidades",
      description: "Escolar: 7h30 às 11h30\nIntegral: 7h30 às 18h",
    },
  ];

  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div
            className="blob"
            style={{
              background: "var(--turquoise)",
              width: 360,
              height: 360,
              top: -80,
              left: -80,
            }}
          />
          <div
            className="blob"
            style={{
              background: "var(--orange)",
              width: 320,
              height: 320,
              top: 60,
              right: -80,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Contato
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
              Venha conhecer a <span className="text-gradient-warm">AmaVille</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Conte um pouco sobre sua família e continue o atendimento pelo WhatsApp oficial da
              escola.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20" aria-labelledby="agendamento-title">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-5">
            {contacts.map((contact) => (
              <article
                key={contact.title}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-soft"
              >
                <div className="h-12 w-12 rounded-2xl bg-turquoise-soft grid place-items-center flex-shrink-0">
                  <contact.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-bold text-foreground">{contact.title}</h2>
                  <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">
                    {contact.description}
                  </p>
                  {contact.link && (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex rounded text-sm font-bold text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {contact.action}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-card border border-border/60 p-8 lg:p-10 shadow-card space-y-5"
            >
              <div>
                <h2
                  id="agendamento-title"
                  className="font-display font-extrabold text-2xl text-foreground"
                >
                  Prepare sua mensagem de visita
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Os campos marcados com * são obrigatórios.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nome do responsável *" name="nome" autoComplete="name" required />
                <Field label="Nome da criança *" name="crianca" required />
                <Field
                  label="Telefone para retorno *"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  minLength={10}
                  required
                />
                <div>
                  <label className="text-sm font-medium text-foreground/80" htmlFor="turma">
                    Turma de interesse *
                  </label>
                  <select
                    id="turma"
                    name="turma"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="" disabled>
                      Selecione uma turma
                    </option>
                    <option>Infantil I — 1 ano</option>
                    <option>Infantil II — 2 anos</option>
                    <option>Infantil III — 3 anos</option>
                    <option>Infantil IV — 4 anos</option>
                    <option>Infantil V — 5 anos</option>
                    <option>1º ano — 6 anos</option>
                    <option>2º ano — 7 anos</option>
                    <option>3º ano — 8 anos</option>
                    <option>4º ano — 9 anos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  maxLength={600}
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Conte qual modalidade procura ou deixe sua dúvida."
                />
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Ao continuar, as informações preenchidas serão incluídas em uma mensagem no
                WhatsApp. O envio só acontece depois que você revisar e confirmar a mensagem no
                aplicativo.
              </p>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-7 py-3.5 font-semibold shadow-warm hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Continuar no WhatsApp
              </button>

              {preparedUrl && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-2xl bg-turquoise-soft p-4 text-sm text-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p>
                    A conversa foi preparada. Se o WhatsApp não abriu, use este{" "}
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-primary underline underline-offset-4"
                    >
                      link direto
                    </a>
                    .
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "tel";
  minLength?: number;
  required?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  minLength,
  required,
}: FieldProps) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        minLength={minLength}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
