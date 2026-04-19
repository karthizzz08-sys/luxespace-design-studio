import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "./services";
import { X } from "lucide-react";

const filters = ["All", "Living Room", "Bedroom", "Kitchen", "Office"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — LuxeSpace Interiors" },
      {
        name: "description",
        content:
          "Browse our portfolio of luxury residential and commercial interior design projects.",
      },
      { property: "og:title", content: "Projects — LuxeSpace Interiors" },
      {
        property: "og:description",
        content: "A curated portfolio of bespoke interior design work.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Our Projects"
        description="A curated selection of recent residential and commercial work."
      />

      <section className="py-16">
        <div className="container-luxe">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] border transition-colors ${
                  active === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/70 hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <button
                  onClick={() => setOpen(p)}
                  className="group block w-full text-left overflow-hidden bg-card hover-lift"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-display">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.style} · {p.area}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-background overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center bg-background/90 hover:bg-foreground hover:text-background transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={open.image} alt={open.title} className="w-full h-full object-cover max-h-[80vh]" />
            <div className="p-8 md:p-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                {open.category}
              </span>
              <h3 className="mt-3 text-3xl md:text-4xl font-display">{open.title}</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">{open.description}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Area</dt>
                  <dd className="mt-1 font-display text-xl">{open.area}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Investment</dt>
                  <dd className="mt-1 font-display text-xl">{open.cost}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Style</dt>
                  <dd className="mt-1 font-display text-xl">{open.style}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
