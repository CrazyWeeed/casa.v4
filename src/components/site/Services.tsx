import { Reveal } from "./Reveal";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const services = [
  {
    n: "I",
    title: "Limpeza Residencial",
    sub: "Regular · semanal ou quinzenal",
    image: hero1,
    alt: "Sala de estar cuidada com luz natural",
    body: "Uma rotina discreta que mantém a casa sempre no mesmo estado: o de quem acabou de a receber. Mesma equipa, mesmos produtos, mesma ordem.",
    points: ["Equipa fixa atribuída", "Produtos neutros e seguros", "Registo de preferências da casa"],
  },
  {
    n: "II",
    title: "Limpeza Profunda",
    sub: "Pontual · sazonal ou pós-obra",
    image: hero3,
    alt: "Quarto minimalista impecável",
    body: "O trabalho que se faz uma vez e se nota durante meses. Interiores de armários, rodapés, juntas, vidros, têxteis e tudo o que normalmente fica para depois.",
    points: ["Checklist de 96 pontos", "Tratamento de pedra e madeira", "Relatório fotográfico final"],
  },
  {
    n: "III",
    title: "Alojamento Local",
    sub: "Turnover · entre estadias",
    image: hero4,
    alt: "Apartamento de alojamento local preparado para hóspedes",
    body: "Preparação completa entre hóspedes, com lavandaria, reposição e verificação final. Pontualidade absoluta — a sua avaliação depende disso.",
    points: ["Janelas de 3 horas", "Lavandaria de hotelaria", "Fotos de conformidade"],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="grain-light depth-dark relative bg-petrol py-40 text-petrol-foreground md:py-64"
    >
      <div className="section-seam-light" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-petrol-foreground/55">Os Serviços</p>
            <h2 className="font-display mt-10 text-[clamp(2.35rem,4.6vw,4.05rem)] leading-[1.02] font-normal tracking-[-0.025em]">
              Três formas de cuidar
              <span className="block font-light italic text-gold">do mesmo lugar.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-xs text-[0.83rem] leading-[2] text-petrol-foreground/60">
              Cada casa recebe uma proposta escrita, com âmbito, duração e
              equipa definidos antes de começarmos.
            </p>
          </Reveal>
        </div>


        <div className="mt-28 grid gap-12 md:mt-36 lg:grid-cols-3 lg:gap-9">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={320 + i * 180}
              className={i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-8" : undefined}
            >
              <article className="card-pad card-quiet group flex h-full flex-col rounded-sm border border-petrol-foreground/[0.07] bg-petrol-foreground/[0.045] backdrop-blur-[2px] hover:border-gold/25 hover:bg-petrol-foreground/[0.075]">
                <div className="img-breathe relative aspect-[5/4] overflow-hidden rounded-sm shadow-soft">
                  <img
                    src={s.image}
                    alt={s.alt}
                    width={1920}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="font-display absolute top-4 left-5 text-sm tracking-[0.2em] text-petrol-foreground/90">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display mt-9 text-[1.85rem] leading-tight font-normal tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="eyebrow mt-3 text-gold/85">{s.sub}</p>
                <p className="mt-6 text-[0.84rem] leading-[2.05] text-petrol-foreground/68">{s.body}</p>
                <ul className="mt-10 space-y-4 border-t border-petrol-foreground/12 pt-7">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[0.78rem] leading-[1.65] text-petrol-foreground/72"
                    >
                      <span className="icon-slot">
                        <span className="h-px w-4 bg-gold/70" />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="link-quiet mt-10 self-start text-[0.72rem] tracking-[0.22em] uppercase text-petrol-foreground/80 hover:text-petrol-foreground"
                >
                  Falar sobre este serviço
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
