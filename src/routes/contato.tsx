import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — AmaVille Escola" },
      { name: "description", content: "Agende uma visita guiada ou fale com nossa equipe." },
      { property: "og:title", content: "Fale com a AmaVille" },
      { property: "og:description", content: "Estamos prontos para conhecer sua família." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="blob" style={{ background: "var(--turquoise)", width: 360, height: 360, top: -80, left: -80 }} />
          <div className="blob" style={{ background: "var(--orange)", width: 320, height: 320, top: 60, right: -80 }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Contato</div>
            <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-foreground leading-[1.05]">
              Venha nos conhecer <span className="text-gradient-warm">pessoalmente</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Agende uma visita guiada — é a melhor forma de sentir a AmaVille de verdade.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, t: "Endereço", d: "Rua das Acácias, 250\nJardim Feliz — São Paulo/SP" },
              { icon: Phone, t: "Telefone", d: "(11) 4002-8922" },
              { icon: Mail, t: "E-mail", d: "ola@amaville.escola" },
              { icon: Clock, t: "Horário", d: "Seg a Sex — 7h às 19h" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-soft">
                <div className="h-12 w-12 rounded-2xl bg-turquoise-soft grid place-items-center flex-shrink-0">
                  <c.icon className="h-5 w-5" style={{ color: "var(--turquoise)" }} />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">{c.t}</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line mt-1">{c.d}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl bg-card border border-border/60 p-8 lg:p-10 shadow-card space-y-5"
            >
              <h2 className="font-display font-extrabold text-2xl text-foreground">Agende sua visita</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Seu nome" name="nome" />
                <Field label="Nome da criança" name="crianca" />
                <Field label="E-mail" type="email" name="email" />
                <Field label="Telefone" name="telefone" />
              </div>
              <Field label="Idade da criança" name="idade" />
              <div>
                <label className="text-sm font-medium text-foreground/80">Mensagem</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="Conte um pouco sobre sua família..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-7 py-3.5 font-semibold shadow-warm hover:scale-[1.02] transition-transform disabled:opacity-80"
              >
                {sent ? (<><Check className="h-4 w-4" /> Recebido! Entraremos em contato.</>) : (<><Send className="h-4 w-4" /> Enviar pedido</>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />
    </div>
  );
}
