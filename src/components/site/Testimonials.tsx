import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Entro em casa e há uma calma que não sei explicar. Percebe-se que alguém esteve ali com cuidado, não com pressa.",
    name: "Mariana S.",
    role: "Moradia · São Vítor, Braga",
  },
  {
    quote:
      "Faço turnover de três apartamentos. Em dois anos, nunca um hóspede reparou em nada — que é exactamente o objectivo.",
    name: "Rui A.",
    role: "Alojamento Local · Centro Histórico",
  },
  {
    quote:
      "A limpeza profunda depois da obra devolveu-nos a casa. Levaram a sério a pedra, a madeira e o meu tapete antigo.",
    name: "Helena e Paulo M.",
    role: "Apartamento · Maximinos",
  },
];

export function Testimonials() {
  return (
    <section id="testemunhos" className="paper depth relative bg-sand py-32 md:py-56">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-graphite/55">Testemunhos</p>
          <h2 className="font-display mt-10 text-[clamp(2.35rem,4.6vw,4.05rem)] leading-[1.02] font-normal tracking-[-0.025em] text-graphite">
            Quem nos deixa
            <span className="block font-light italic text-petrol">entrar em casa.</span>
          </h2>
        </Reveal>

        <div className="mt-28 grid gap-7 md:mt-36 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={220 + i * 180} className={i === 1 ? "lg:-mt-12" : undefined}>
              <figure className="card-pad card-quiet flex h-full flex-col justify-between rounded-sm border border-graphite/[0.06] bg-ivory/70 shadow-soft hover:bg-ivory hover:shadow-lift">
                <span className="font-display block text-5xl leading-none text-gold/70">”</span>
                <blockquote className="font-display mt-8 text-[1.22rem] leading-[1.75] font-light text-graphite italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-11 border-t border-graphite/10 pt-7">
                  <p className="text-[0.85rem] tracking-wide text-graphite">{t.name}</p>
                  <p className="mt-1.5 text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
