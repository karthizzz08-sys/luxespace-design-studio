import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-living.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { projects, services, testimonials } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LuxeSpace Interiors — Designing Your Dream Spaces" },
      {
        name: "description",
        content:
          "Award-winning luxury interior design studio. Residential, commercial, modular kitchens and bespoke furniture across India.",
      },
      { property: "og:title", content: "LuxeSpace Interiors — Designing Your Dream Spaces" },
      {
        property: "og:description",
        content: "Luxury interior design studio crafting timeless, considered spaces.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <ServicesOverview />
      <BeforeAfter />
      <Testimonials />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury living room interior with marble accents and warm beige tones"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="relative h-full container-luxe flex flex-col justify-end pb-24 md:justify-center md:pb-0">
        <div className="max-w-2xl text-background">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-background/80">
              <span className="gold-divider" /> Luxury Interior Studio
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
              Designing Your<br />
              <span className="italic text-gold">Dream Spaces.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-background/85 leading-relaxed">
              A boutique design studio crafting residences, workspaces and bespoke
              interiors with quiet luxury and meticulous detail.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-gold-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-background/60 text-background text-xs uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected Projects"
            description="A glimpse into spaces we've crafted — each tailored to its inhabitants and place."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link
                to="/projects"
                className="group block overflow-hidden bg-card hover-lift"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-display">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.style} · {p.area}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] border-b border-foreground/30 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            Explore All Projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container-luxe">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="From private residences to commercial workspaces, we deliver fully-managed, end-to-end design."
          />
        </Reveal>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <div className="bg-secondary h-full p-8 group hover:bg-background transition-colors">
                <Sparkles className="h-6 w-6 text-gold" />
                <h3 className="mt-6 text-2xl font-display">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:text-gold transition-colors"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <SectionHeading
            eyebrow="Transformations"
            title="Before & After"
            description="Drag the slider to see how we reimagine spaces."
          />
        </Reveal>

        <Reveal>
          <div
            className="relative mt-16 aspect-[16/9] w-full overflow-hidden select-none shadow-luxe"
            onMouseMove={(e) => {
              const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setPos(((e.clientX - r.left) / r.width) * 100);
            }}
            onTouchMove={(e) => {
              const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setPos(((e.touches[0].clientX - r.left) / r.width) * 100);
            }}
          >
            <img src={afterImg} alt="After" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImg}
                alt="Before"
                loading="lazy"
                className="absolute inset-0 h-full object-cover"
                style={{ width: `${10000 / pos}%` }}
              />
            </div>
            <div
              className="absolute inset-y-0 w-px bg-gold pointer-events-none"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-gold-foreground text-xs">
                ⇆
              </div>
            </div>
            <span className="absolute top-4 left-4 px-3 py-1 bg-foreground/70 text-background text-[10px] uppercase tracking-[0.2em]">Before</span>
            <span className="absolute top-4 right-4 px-3 py-1 bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.2em]">After</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-luxe">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-background/70">
              <span className="gold-divider" /> Clients
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display">In Their Words</h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="border border-background/15 p-8 h-full">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-6 text-lg leading-relaxed font-display italic">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="text-gold">{t.name}</div>
                  <div className="text-background/60">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="py-24">
      <div className="container-luxe">
        <Reveal>
          <div className="bg-secondary p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display">
              Ready to design your <span className="italic text-gold">dream space</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a complimentary consultation with our design team.
            </p>
            <Link
              to="/booking"
              className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground">
        <span className="gold-divider" /> {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl md:text-5xl font-display">{title}</h2>
      {description && <p className="mt-5 text-muted-foreground">{description}</p>}
    </div>
  );
}
