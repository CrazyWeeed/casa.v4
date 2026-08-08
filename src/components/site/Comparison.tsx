import { Reveal, useParallax } from "./Reveal";
import detailDark from "@/assets/detail-dark.jpg";

const criteria = [
  {
    label: "Orçamento",
    ours: "Calculado conforme o imóvel, com valor fechado antes de agendar",
    theirs: "Estimativas por telefone que mudam no dia do serviço",
  },
  {
    label: "Processo",
    ours: "Checklist padronizado por ambiente, sempre igual",
    theirs: "Depende de quem aparece para trabalhar",
  },
  {
    label: "Equipa",
    ours: "Profissionais fixas, apresentadas antes da visita",
    theirs: "Rotatividade constante, sem apresentação prévia",
  },
  {
    label: "Comunicação",
    ours: "Confirmação de agendamento e de conclusão",
    theirs: "Silêncio entre o pedido e a chegada",
  },
  {
    label: "Materiais",
    ours: "Produtos e equipamentos incluídos no valor",
    theirs: "Uso dos produtos do cliente",
  },
  {
    label: "Garantia",
    ours: "Revisão gratuita em caso de qualquer detalhe",
    theirs: "Sem compromisso após o pagamento",
  },
];

function Check() {
  return (
    <span className="icon-slot">
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-sage" aria-hidden>
        <path
          d="M4 10.5 8 14.5 16 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Cross() {
  return (
    <span className="icon-slot">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-muted-foreground/35" aria-hidden>
        <path
          d="M5.5 5.5 14.5 14.5M14.5 5.5 5.5 14.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Comparison() {
  const parallax = useParallax<HTMLImageElement>(56);

  return (
    <section id="metodo" className="stone depth relative bg-stone py-40 md:py-64">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-24 lg:grid-cols-12 lg:gap-28">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-muted-foreground">O Método</p>
              <h2 className="font-display mt-10 text-[clamp(2.35rem,4.5vw,3.8rem)] leading-[1.02] font-normal tracking-[-0.025em] text-graphite">
                A diferença
                <span className="block font-light italic text-petrol">está no protocolo.</span>
              </h2>
              <p className="mt-11 max-w-sm text-[0.85rem] leading-[2.1] text-muted-foreground">
                Aquilo que separa uma casa limpa de uma casa bem tratada não é
                tempo — é método. Este é o nosso, sem véus.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-16 hidden lg:block">
              <figure className="img-breathe aspect-[4/5] overflow-hidden shadow-soft">
                <img
                  ref={parallax}
                  src={detailDark}
                  alt="Parede em azul petróleo com banco de carvalho"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
              <Reveal delay={140}>
                <div className="card-pad card-quiet relative h-full rounded-sm border border-gold/60 bg-ivory shadow-feature lg:-mt-5 lg:pb-14 hover:border-gold/80">
                  <span
                    className="absolute inset-x-0 top-0 h-[2px] bg-gold/85"
                    aria-hidden
                  />
                  <p className="eyebrow text-gold">Recomendado</p>
                  <h3 className="font-display mt-4 text-[2rem] leading-none font-normal tracking-[-0.01em] text-petrol">
                    Casa Nobre
                  </h3>
                  <div className="mt-8 h-px w-full bg-gold/45" />
                  <ul className="mt-10 space-y-9">
                    {criteria.map((c) => (
                      <li key={c.label} className="flex items-start gap-4">
                        <Check />
                        <div>
                          <p className="eyebrow text-muted-foreground">{c.label}</p>
                          <p className="mt-2 text-[0.88rem] leading-[1.85] text-graphite">
                            {c.ours}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="card-pad h-full rounded-sm border border-graphite/6 bg-linen/30 opacity-85 transition-opacity duration-700 hover:opacity-100">
                  <p className="eyebrow text-muted-foreground/40">Habitual</p>
                  <h3 className="font-display mt-4 text-[1.75rem] leading-none font-light text-muted-foreground/80">
                    Outras empresas
                  </h3>
                  <div className="mt-8 h-px w-full bg-graphite/6" />
                  <ul className="mt-10 space-y-9">
                    {criteria.map((c) => (
                      <li key={c.label} className="flex items-start gap-4">
                        <Cross />
                        <div>
                          <p className="eyebrow text-muted-foreground/40">{c.label}</p>
                          <p className="mt-2 text-[0.85rem] leading-[1.85] text-muted-foreground/65">
                            {c.theirs}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={420}>
              <blockquote className="font-display mt-24 max-w-xl text-[1.6rem] leading-[1.45] font-light text-petrol italic">
                “Se um pormenor não se nota, é porque foi bem feito.”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
