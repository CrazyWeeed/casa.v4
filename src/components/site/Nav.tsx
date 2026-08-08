import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Perguntas", href: "#faq" },
  { label: "Orçamento", href: "#contacto" },
];

const sectionIds = ["top", ...links.map((l) => l.href.slice(1))];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.32;
      let current = "top";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-700",
        scrolled
          ? "bg-ivory/88 py-4 backdrop-blur-xl supports-[backdrop-filter]:bg-ivory/78"
          : "bg-transparent py-7",
      )}
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 px-6 md:px-12">
        <a
          href="#top"
          className={cn(
            "font-display leading-none tracking-[0.02em] transition-colors duration-700",
            scrolled ? "text-graphite" : "text-petrol-foreground drop-shadow-md",
          )}
        >
          <span className="block text-xl md:text-2xl">Casa Nobre</span>
          <span
            className={cn(
              "eyebrow mt-1 block font-sans text-[0.55rem] transition-opacity duration-700",
              scrolled ? "text-muted-foreground" : "text-petrol-foreground/70",
            )}
          >
            Braga · Limpezas
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative text-[0.8rem] tracking-[0.14em] uppercase transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold hover:scale-105 hover:-translate-y-0.5",
                  scrolled
                    ? isActive
                      ? "text-graphite"
                      : "text-muted-foreground hover:text-graphite"
                    : isActive
                      ? "text-petrol-foreground drop-shadow-md"
                      : "text-petrol-foreground/70 drop-shadow-md hover:text-petrol-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-px w-full origin-left bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </nav>


        <div className="flex items-center gap-4">
          {scrolled && (
            <a
              href="#contacto"
              className={cn(
                "border px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold hover:shadow-sm hover:-translate-y-px",
                "border-graphite/25 text-graphite hover:border-graphite hover:bg-graphite hover:text-ivory"
              )}
            >
              Pedir orçamento
            </a>
          )}
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden",
              scrolled ? "text-graphite" : "text-petrol-foreground",
            )}
          >
            <span
              className={cn(
                "block h-px w-6 bg-current transition-transform duration-500",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-current transition-transform duration-500",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-700 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-[92rem] flex-col gap-1 px-6 pt-6 pb-4 md:px-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-2xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                active === l.href.slice(1)
                  ? "text-petrol italic"
                  : "text-graphite/90 hover:text-petrol",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
