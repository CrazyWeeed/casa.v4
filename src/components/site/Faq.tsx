import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Preciso de estar em casa durante o serviço?",
    a: "Não. A maioria dos nossos clientes não está. Trabalhamos com chave, código ou caixa de segurança, sempre com registo de entrada e saída e a mesma equipa atribuída à sua casa.",
  },
  {
    q: "Que produtos utilizam?",
    a: "Fórmulas neutras, de baixo odor, seguras para crianças, animais e superfícies delicadas. Pedra natural, madeira e têxteis recebem tratamento específico, nunca produto universal.",
  },
  {
    q: "Como é definido o preço?",
    a: "Após uma visita ou uma breve chamada, enviamos uma proposta escrita com âmbito, duração estimada e valor fixo. Sem custos por hora extra e sem surpresas no fim.",
  },
  {
    q: "Trabalham fora de Braga?",
    a: "Servimos Braga e um raio de cerca de 25 km — incluindo Vila Verde, Amares, Barcelos e Guimarães. Fora desta área, avaliamos caso a caso.",
  },
  {
    q: "E se algo não ficar como esperava?",
    a: "Avise-nos nas 24 horas seguintes e voltamos, sem custo. Temos seguro de responsabilidade civil e assumimos qualquer dano da nossa responsabilidade.",
  },
  {
    q: "Com que antecedência devo marcar?",
    a: "Serviços regulares iniciam-se normalmente na semana seguinte. Limpezas profundas requerem 7 a 10 dias. Para alojamento local, garantimos janelas fixas de turnover.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="grain-light depth-dark relative bg-petrol-deep py-40 text-petrol-foreground md:py-64"
    >
      <div className="section-seam-light" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-28">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-petrol-foreground/55">Perguntas</p>
            <h2 className="font-display mt-10 text-[clamp(2.35rem,4.5vw,3.8rem)] leading-[1.02] font-normal tracking-[-0.025em]">
              Antes de
              <span className="block font-light italic text-gold">nos convidar.</span>
            </h2>
            <p className="mt-11 max-w-xs text-[0.83rem] leading-[2.05] text-petrol-foreground/60">
              Se a sua dúvida não estiver aqui, escreva-nos. Respondemos no
              próprio dia útil.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={180 + i * 90}>

                  <div className="border-b border-petrol-foreground/12">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start justify-between gap-8 py-8 text-left"
                    >
                      <span
                        className={cn(
                          "font-display text-[1.22rem] leading-snug font-light transition-colors duration-500 md:text-[1.42rem]",
                          isOpen ? "text-gold" : "text-petrol-foreground group-hover:text-gold/80",
                        )}
                      >
                        {f.q}
                      </span>
                      <span className="relative mt-3 block h-3 w-3 shrink-0">
                        <span className="absolute top-1/2 left-0 h-px w-3 bg-current" />
                        <span
                          className={cn(
                            "absolute top-1/2 left-0 h-px w-3 bg-current transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            isOpen ? "rotate-0" : "rotate-90",
                          )}
                        />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pb-9 text-[0.9rem] leading-[2.05] text-petrol-foreground/68">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
