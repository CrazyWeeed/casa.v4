import { useState } from "react";
import { Reveal } from "./Reveal";
import hero6 from "@/assets/hero-6.jpg";

const fieldClass =
  "w-full border-b border-graphite/20 bg-transparent pt-3 pb-3 text-[0.92rem] text-graphite transition-all duration-500 placeholder:text-muted-foreground/60 focus:border-gold focus:ring-2 focus:ring-gold/30 focus:ring-offset-0";

const labelClass = "eyebrow text-muted-foreground";

const tiposImovel = ["Apartamento", "Moradia", "Alojamento Local"];
const tiposLimpeza = ["Residencial", "Profunda", "Alojamento Local"];
const extras = ["Forno", "Frigorífico", "Vidros", "Outro"];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-2.5 text-[0.74rem] tracking-[0.08em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 ${
        active
          ? "border-gold bg-gold/18 text-graphite shadow-soft hover:-translate-y-1"
          : "border-graphite/15 text-muted-foreground hover:border-gold/60 hover:bg-gold/[0.06] hover:text-graphite hover:shadow-sm hover:-translate-y-1"
      }`}
    >
      {children}
    </button>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [imovel, setImovel] = useState(tiposImovel[0]);
  const [limpeza, setLimpeza] = useState(tiposLimpeza[0]);
  const [selecionados, setSelecionados] = useState<string[]>([]);

  const toggleExtra = (e: string) =>
    setSelecionados((prev) => (prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]));

  return (
    <section id="contacto" className="grain depth relative bg-linen py-40 md:py-64">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-24 lg:grid-cols-12 lg:gap-28">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Contacto</p>
              <h2 className="font-display mt-10 text-[clamp(2.35rem,4.6vw,4.05rem)] leading-[1.02] font-normal tracking-[-0.025em] text-graphite">
                Comece por
                <span className="block font-light italic text-petrol">uma conversa.</span>
              </h2>
              <p className="mt-11 max-w-sm text-[0.85rem] leading-[2.1] text-muted-foreground">
                Abrimos uma conversa já preenchida — basta enviar. Ou deixe os
                detalhes do imóvel ao lado para uma proposta escrita em 24 horas.
              </p>
            </Reveal>


            <Reveal delay={180}>
              <div className="card-pad card-quiet mt-16 rounded-sm border border-graphite/[0.06] bg-ivory/80 shadow-soft hover:bg-ivory">
                <p className="font-display text-[1.45rem] leading-none font-normal text-petrol">
                  Fale connosco agora
                </p>
                <a
                  href="https://wa.me/351910333390?text=Olá%2C%20gostaria%20de%20um%20orçamento%20de%20limpeza."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wash mt-8 flex items-center justify-center border border-gold/70 bg-gold/20 px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-graphite hover:border-gold"
                >
                  <span className="relative z-10">Pedir orçamento por WhatsApp</span>
                  <span className="btn-wash-fill bg-gold/40" />
                </a>

                <dl className="mt-10 space-y-6 border-t border-border pt-8 text-[0.88rem]">
                  {[
                    ["Telefone", "+351 910 333 390"],
                    ["Email", "casanobre.braga@gmail.com"],
                    ["Serviço", "Vamos até ao seu imóvel para realizar a limpeza."],
                    ["Horário", "Seg – Sáb · 08h00 – 19h00"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6">
                      <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="text-graphite">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>


            <Reveal delay={300}>
              <figure className="img-breathe mt-16 hidden aspect-[16/10] overflow-hidden shadow-soft lg:block">
                <img
                  src={hero6}
                  alt="Entrada de uma casa portuguesa com luz natural"
                  width={1920}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={140}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="card-pad rounded-sm border border-graphite/[0.06] bg-ivory/80 shadow-soft lg:ml-auto lg:w-[90%]"
              >
                <p className="font-display text-[1.5rem] leading-none font-normal text-petrol">
                  Detalhes do imóvel
                </p>
                <p className="mt-4 text-[0.82rem] leading-[1.8] text-muted-foreground">
                  Quanto mais completo, mais preciso será o orçamento.
                </p>


                <div className="mt-11 grid gap-10 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Nome</span>
                    <input required name="nome" placeholder="O seu nome" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Telefone</span>
                    <input name="telefone" placeholder="+351" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="nome@email.pt"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Morada</span>
                    <input name="morada" placeholder="Rua, freguesia" className={fieldClass} />
                  </label>
                </div>

                <fieldset className="mt-12">
                  <legend className={labelClass}>Tipo de imóvel</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tiposImovel.map((t) => (
                      <Chip key={t} active={imovel === t} onClick={() => setImovel(t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                  <input type="hidden" name="tipo_imovel" value={imovel} />
                </fieldset>

                <div className="mt-11 grid gap-10 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Número de quartos</span>
                    <input
                      name="quartos"
                      inputMode="numeric"
                      placeholder="Ex.: 3"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Número de casas de banho</span>
                    <input
                      name="banhos"
                      inputMode="numeric"
                      placeholder="Ex.: 2"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <fieldset className="mt-12">
                  <legend className={labelClass}>Tipo de limpeza</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tiposLimpeza.map((t) => (
                      <Chip key={t} active={limpeza === t} onClick={() => setLimpeza(t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                  <input type="hidden" name="tipo_limpeza" value={limpeza} />
                </fieldset>

                <fieldset className="mt-12">
                  <legend className={labelClass}>Serviços adicionais</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {extras.map((t) => (
                      <Chip
                        key={t}
                        active={selecionados.includes(t)}
                        onClick={() => toggleExtra(t)}
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>
                  <input type="hidden" name="extras" value={selecionados.join(", ")} />
                </fieldset>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Data preferencial</span>
                    <input type="date" name="data" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Horário preferencial</span>
                    <input type="time" name="hora" className={fieldClass} />
                  </label>
                </div>

                <label className="mt-11 block">
                  <span className={labelClass}>Mensagem</span>
                  <textarea
                    name="mensagem"
                    rows={4}
                    maxLength={1000}
                    placeholder="Cuidados especiais, animais em casa, acesso ao edifício…"
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
                  <p className="max-w-[16rem] text-[0.7rem] leading-relaxed text-muted-foreground">
                    Os seus dados servem apenas para preparar o orçamento.
                  </p>
                  <button
                    type="submit"
                    className="btn-wash border border-petrol/70 px-9 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-petrol hover:border-petrol hover:text-ivory"
                  >
                    <span className="relative z-10">
                      {sent ? "Recebido — obrigado" : "Enviar pedido de orçamento"}
                    </span>
                    <span className="btn-wash-fill bg-petrol" />
                  </button>

                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grain-light relative bg-petrol-deep py-20 text-petrol-foreground md:py-24">
      <div className="mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 border-b border-petrol-foreground/12 pb-12 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl leading-none font-light">Casa Nobre</p>
            <p className="eyebrow mt-3 text-petrol-foreground/50">Limpezas · Braga, Portugal</p>
          </div>
          <p className="font-display max-w-sm text-[1.22rem] leading-[1.65] font-light text-petrol-foreground/75 italic">
            A sua casa merece isto.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-[0.72rem] tracking-[0.12em] text-petrol-foreground/45 md:flex-row">
          <p>© {new Date().getFullYear()} Casa Nobre Limpezas</p>
          <p>Livro de Reclamações · Política de Privacidade</p>
        </div>
      </div>
    </footer>
  );
}
