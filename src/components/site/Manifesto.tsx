import { Reveal, useParallax } from "./Reveal";
import detailLinen from "@/assets/detail-linen.jpg";
import detailLight from "@/assets/detail-light.jpg";

export function Manifesto() {
  const parallax = useParallax<HTMLImageElement>(46);

  return (
    <section id="manifesto" className="grain depth relative bg-linen py-40 md:py-64">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-24 lg:grid-cols-12 lg:gap-28">
          <div className="lg:col-span-5 lg:pt-14">
            <Reveal>
              <p className="eyebrow text-muted-foreground">O Manifesto</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-10 text-[clamp(2.35rem,4.6vw,4.05rem)] leading-[1.02] font-normal tracking-[-0.025em] text-graphite">
                Não limpamos casas.
                <span className="block font-light italic text-petrol">Devolvemos o silêncio.</span>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-14 max-w-md space-y-8 text-[0.87rem] leading-[2.15] text-muted-foreground">
                <p>
                  Há uma diferença entre uma casa arrumada e uma casa em ordem.
                  A primeira vê-se. A segunda sente-se — ao entrar, quando a luz
                  atravessa a sala e nada nos chama a atenção.
                </p>
                <p>
                  Em Braga, trabalhamos para famílias, profissionais
                  e proprietários de alojamento local que preferem não pensar
                  nisto. Chegamos, fazemos, desaparecemos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <dl className="mt-20 grid max-w-md grid-cols-3 gap-8 border-t border-border pt-10">
                {[
                  ["Atendimento", "em Braga"],
                  ["Orçamento", "personalizado"],
                  ["Equipa 100%", "interna"],
                ].map(([n, label], idx) => (
                  <div key={label}>
                    <dt className="font-display text-sm font-normal text-petrol">{n}</dt>
                    <dd className={`mt-2 text-[0.68rem] leading-relaxed tracking-[0.14em] uppercase text-muted-foreground ${idx === 2 ? 'text-[0.65rem] leading-tight' : ''}`}>
                      {idx === 2 ? "Profissionais da nossa equipa, preparados para garantir um padrão de qualidade consistente." : label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-5 md:gap-7">
              <Reveal className="col-span-8 col-start-5 lg:col-span-7 lg:col-start-6">
                <figure className="img-breathe relative aspect-[4/5] overflow-hidden shadow-soft">
                  <img
                    ref={parallax}
                    src={detailLinen}
                    alt="Têxteis de linho dobrados sobre madeira de carvalho"
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
              <Reveal delay={180} className="col-span-7 -mt-24 lg:col-span-6 lg:-mt-40">
                <figure className="img-breathe relative aspect-[4/3] overflow-hidden shadow-lift">
                  <img
                    src={detailLight}
                    alt="Luz de janela sobre superfície de pedra"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <figcaption className="mt-5 max-w-[18rem] text-[0.76rem] leading-[1.8] text-muted-foreground">
                  <span className="mr-2 text-gold">—</span>
                  O detalhe que ninguém pede é exactamente aquele de que todos
                  se lembram.
                </figcaption>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
