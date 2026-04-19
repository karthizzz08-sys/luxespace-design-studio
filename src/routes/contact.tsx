import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "./services";
import { Reveal } from "@/components/site/Reveal";
import { ADDRESS, EMAIL, PHONE, WHATSAPP_NUMBER } from "@/lib/data";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LuxeSpace Interiors" },
      {
        name: "description",
        content:
          "Visit our studio, call, email or message us on WhatsApp. We'd love to hear about your project.",
      },
      { property: "og:title", content: "Contact — LuxeSpace Interiors" },
      {
        property: "og:description",
        content: "Get in touch with the LuxeSpace design team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact the Studio"
        description="We respond within one business day."
      />

      <section className="py-20">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-8">
              <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
              <ContactItem icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactItem icon={<MapPin className="h-5 w-5" />} label="Studio" value={ADDRESS} />
              <ContactItem
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value="Chat with our team"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
              />

              <div className="overflow-hidden border border-border aspect-[4/3] mt-8">
                <iframe
                  title="LuxeSpace Studio location"
                  src="https://www.google.com/maps?q=Mumbai&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card p-8 md:p-10 shadow-soft space-y-6"
            >
              <h3 className="text-2xl font-display">Send a Message</h3>
              {sent ? (
                <p className="text-muted-foreground">
                  Thank you, {form.name || "we"}'ve received your message and will respond shortly.
                </p>
              ) : (
                <>
                  <Field label="Name">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                  </Field>
                  <Field label="Email">
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                  </Field>
                  <Field label="Message">
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
                  </Field>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.24em] hover:bg-gold hover:text-gold-foreground transition-colors"
                  >
                    Send Message
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="h-12 w-12 flex items-center justify-center bg-secondary text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-lg font-display">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
