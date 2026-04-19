import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./services";
import { Reveal } from "@/components/site/Reveal";
import { team } from "@/lib/data";
import heroImg from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LuxeSpace Interiors" },
      {
        name: "description",
        content:
          "LuxeSpace is a boutique interior design studio with over a decade of experience crafting bespoke spaces.",
      },
      { property: "og:title", content: "About — LuxeSpace Interiors" },
      {
        property: "og:description",
        content: "A boutique studio with a decade of craft and considered design.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A Studio Built on Craft"
      />

      <section className="py-20">
        <div className="container-luxe grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={heroImg} alt="Studio" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs uppercase tracking-[0.24em] text-gold">Established 2013</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display">
              Twelve years of <span className="italic">considered</span> design.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              LuxeSpace was founded on a simple belief: a great interior is felt, not just seen.
              We work intimately with each client — listening, sketching, refining — until every
              surface, joinery and shadow earns its place.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From private residences to executive workspaces, our portfolio spans 200+ projects
              across India, with international commissions in Dubai and Singapore.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value="200+" label="Projects" />
              <Stat value="12" label="Years" />
              <Stat value="98%" label="Repeat Clients" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-luxe grid md:grid-cols-2 gap-16">
          <Reveal>
            <h3 className="text-3xl font-display">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To create spaces of quiet luxury — interiors that feel timeless, personal, and
              built to outlast trend cycles.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-3xl font-display">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To deliver every project with craftsmanship, transparency, and a white-glove
              experience our clients trust.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                <span className="gold-divider" /> The Team
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display">Designers Behind the Studio</h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="bg-card p-8 text-center hover-lift">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-gold flex items-center justify-center text-2xl font-display text-gold-foreground">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h4 className="mt-6 font-display text-xl">{m.name}</h4>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gold">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
    </div>
  );
}
