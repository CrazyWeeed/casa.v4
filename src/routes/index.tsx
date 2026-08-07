import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Services } from "@/components/site/Services";
import { Comparison } from "@/components/site/Comparison";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Casa Nobre Limpezas — Limpeza residencial de alto padrão em Braga";
const description =
  "Limpeza residencial, profunda e de alojamento local em Braga. Equipa fixa, protocolo próprio e discrição absoluta. A sua casa merece isto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Casa Nobre Limpezas",
          description,
          areaServed: "Braga, Portugal",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua do Souto",
            addressLocality: "Braga",
            addressCountry: "PT",
          },
          telephone: "+351910333390",
          email: "casanobre.braga@gmail.com",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Comparison />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
