import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "./services";
import { WHATSAPP_NUMBER } from "@/lib/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Consultation — LuxeSpace Interiors" },
      {
        name: "description",
        content:
          "Book a free interior design consultation with LuxeSpace. Tell us about your project.",
      },
      { property: "og:title", content: "Book Consultation — LuxeSpace Interiors" },
      {
        property: "og:description",
        content: "Free design consultation, tailored to your project.",
      },
    ],
  }),
  component: BookingPage,
});

const projectTypes = ["Home Interior", "Office Interior", "Modular Kitchen", "Furniture & Decor"];
const budgets = ["Under ₹5L", "₹5L – ₹15L", "₹15L – ₹40L", "₹40L+"];

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    type: projectTypes[0],
    budget: budgets[1],
    date: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hi LuxeSpace, I'd like to book a consultation.\n\n` +
        `Name: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\n` +
        `Project: ${form.type}\nBudget: ${form.budget}\nPreferred Date: ${form.date}`,
    );
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    }, 1200);
  };

  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title="Book Your Free Consultation"
        description="Share a few details and our design team will reach out within 24 hours."
      />

      <section className="py-20">
        <div className="container-luxe max-w-2xl">
          {submitted ? (
            <div className="text-center bg-secondary p-12">
              <div className="mx-auto h-16 w-16 rounded-full bg-gold flex items-center justify-center">
                <Check className="h-8 w-8 text-gold-foreground" />
              </div>
              <h2 className="mt-6 text-3xl font-display">Thank you, {form.name || "friend"}.</h2>
              <p className="mt-4 text-muted-foreground">
                Your enquiry is in. Redirecting you to WhatsApp to confirm details with our team…
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6 bg-card p-8 md:p-12 shadow-soft">
              <Field label="Full Name">
                <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" />
              </Field>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Phone">
                  <input required type="tel" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+91" />
                </Field>
                <Field label="Location">
                  <input required value={form.location} onChange={update("location")} className={inputCls} placeholder="City" />
                </Field>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Project Type">
                  <select value={form.type} onChange={update("type")} className={inputCls}>
                    {projectTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select value={form.budget} onChange={update("budget")} className={inputCls}>
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Preferred Date">
                <input required type="date" value={form.date} onChange={update("date")} className={inputCls} />
              </Field>
              <button
                type="submit"
                className="w-full mt-4 px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.24em] hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                Submit Enquiry
              </button>
              <p className="text-xs text-muted-foreground text-center">
                On submit, we'll redirect you to WhatsApp with your details prefilled.
              </p>
            </form>
          )}
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
