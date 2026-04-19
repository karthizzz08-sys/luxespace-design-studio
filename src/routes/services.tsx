import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LuxeSpace Interiors" },
      {
        name: "description",
        content:
          "Luxury interior design services: home interiors, office design, modular kitchens, and bespoke furniture & decor.",
      },
      { property: "og:title", content: "Services — LuxeSpace Interiors" },
      {
        property: "og:description",
        content: "End-to-end luxury interior design services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Considered Design, End to End"
        description="From the first sketch to the final styling, we manage every detail of your project."
      />

      <section className="py-20">
        <div className="container-luxe space-y-24">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div className={`grid gap-10 md:gap-16 md:grid-cols-2 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-[1200ms]"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.24em] text-gold">
                    0{i + 1} — Service
                  </span>
                  <h2 className="mt-4 text-4xl md:text-5xl font-display">{s.title}</h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-foreground/80">
                    {s.price}
                  </p>
                  <Link
                    to="/booking"
                    className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-gold-foreground transition-colors"
                  >
                    Book Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-40 pb-20 bg-secondary">
      <div className="container-luxe text-center">
        <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
          <span className="gold-divider" /> {eyebrow}
        </span>
        <h1 className="mt-5 text-5xl md:text-6xl font-display">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
