import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const slides = [
  {
    src: hero1,
    alt: "Sala de estar em tons de linho com luz de fim de tarde",
    phrase: "O fim de tarde entra e não encontra nada fora do lugar.",
  },
  {
    src: hero2,
    alt: "Cozinha contemporânea em carvalho e pedra",
    phrase: "A cozinha volta a cheirar apenas a casa.",
  },
  {
    src: hero3,
    alt: "Quarto minimalista com roupa de cama em linho",
    phrase: "Lençóis frescos — o melhor fim de um dia longo.",
  },
  {
    src: hero4,
    alt: "Apartamento de alojamento local com janela em arco",
    phrase: "Cada hóspede chega como se fosse o primeiro.",
  },
  {
    src: hero5,
    alt: "Casa de banho em travertino com apontamentos dourados",
    phrase: "Pedra morna, água clara, silêncio.",
  },
  {
    src: hero6,
    alt: "Corredor de uma casa portuguesa com luz natural",
    phrase: "Entrar em casa e sentir que alguém cuidou.",
  },
];


const DURATION = 6800;

export function Hero() {
  const [index, setIndex] = useState(0);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearInterval(id);
  }, []);

  /* Parallax bem discreto: a imagem desce devagar, o texto sobe. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${(y * 0.14).toFixed(2)}px, 0)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${(y * -0.05).toFixed(2)}px, 0)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / 620));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative h-[100svh] max-h-[860px] min-h-[540px] w-full overflow-hidden bg-petrol-deep"
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-[2200ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1200}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              className={cn(
                "h-full w-full object-cover transition-transform ease-linear",
                i === index ? "scale-[1.08] duration-[9000ms]" : "scale-100 duration-0",
              )}
            />
          </div>
        ))}
      </div>



      {/* Warm cinematic scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.248 0.042 228 / 0.52) 0%, oklch(0.248 0.042 228 / 0.20) 34%, oklch(0.248 0.042 228 / 0.32) 66%, oklch(0.2 0.035 228 / 0.72) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 15% 70%, oklch(0.248 0.042 228 / 0.45) 0%, transparent 62%)",
        }}
      />
      <div className="grain-light absolute inset-0" />
      {/* Continuidade: o petróleo dissolve-se no linho da secção seguinte */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.947 0.014 84 / 0.05) 62%, oklch(0.947 0.014 84 / 0.13) 100%)",
        }}
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col justify-end px-6 pb-16 pt-40 will-change-transform md:px-12 md:pb-20 md:pt-48 lg:pt-56"
      >
        <div className="max-w-3xl">

          <p
            className="eyebrow mb-8 animate-[fade-in_1.4s_cubic-bezier(0.22,1,0.36,1)_both] text-petrol-foreground/70"
            style={{ animationDelay: "200ms" }}
          >
            Braga · Portugal
          </p>
          <h1
            className="font-display animate-[fade-in_1.6s_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(2.9rem,7.4vw,6.4rem)] leading-[0.95] font-light tracking-[-0.02em] text-petrol-foreground"
            style={{ animationDelay: "380ms" }}
          >
            A sua casa
            <span className="block pl-[0.08em] italic text-petrol-foreground/85">merece isto.</span>
          </h1>
          <p
            className="mt-9 max-w-lg animate-[fade-in_1.6s_cubic-bezier(0.22,1,0.36,1)_both] text-[0.98rem] leading-[1.9] text-petrol-foreground/78"
            style={{ animationDelay: "620ms" }}
          >
            Limpeza residencial de alto padrão em Braga. Discreta, meticulosa e
            silenciosa — pensada para quem trata a casa como um lugar, não como
            uma tarefa.
          </p>
          <div
            className="mt-11 flex animate-[fade-in_1.6s_cubic-bezier(0.22,1,0.36,1)_both] flex-wrap items-center gap-8"
            style={{ animationDelay: "820ms" }}
          >
            <a
              href="#contacto"
              className="btn-wash border border-petrol-foreground/45 px-9 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-petrol-foreground hover:border-petrol-foreground hover:text-petrol-deep"
            >
              <span className="relative z-10">Pedir orçamento</span>
              <span className="btn-wash-fill bg-petrol-foreground" />
            </a>

            <a
              href="#servicos"
              className="link-quiet text-[0.72rem] tracking-[0.24em] uppercase text-petrol-foreground/75 hover:text-petrol-foreground"
            >
              Ver serviços
            </a>
          </div>
        </div>

        {/* Slide rail */}
        <div className="mt-14 flex items-end justify-between gap-8 border-t border-petrol-foreground/15 pt-6">
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Ver imagem ${i + 1}`}
                onClick={() => setIndex(i)}
                className="group py-3"
              >
                <span
                  className={cn(
                    "block h-px transition-all duration-700",
                    i === index
                      ? "w-14 bg-gold"
                      : "w-7 bg-petrol-foreground/30 group-hover:bg-petrol-foreground/70",
                  )}
                />
              </button>
            ))}
          </div>
          <p
            key={index}
            className="font-display hidden max-w-md animate-[fade-in_1.4s_cubic-bezier(0.22,1,0.36,1)_both] text-right text-[1.05rem] leading-[1.6] font-light text-petrol-foreground/70 italic sm:block"
          >
            {slides[index].phrase}
          </p>

        </div>
      </div>
    </section>
  );
}
