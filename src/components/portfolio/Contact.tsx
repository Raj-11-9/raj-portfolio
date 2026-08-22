import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { resume } from "@/data/resume";
import { Reveal, Section } from "./Section";

const details = [
  { icon: Mail, label: "Email", value: resume.contact.email, href: `mailto:${resume.contact.email}` },
  { icon: Phone, label: "Phone", value: resume.contact.phone, href: `tel:${resume.contact.phone}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/get-raj",
    href: resume.contact.linkedin,
  },
  { icon: MapPin, label: "Location", value: resume.contact.location, href: undefined },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${resume.contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message.");
  };

  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's talk infrastructure"
      description="Open to entry-level opportunities in IT infrastructure, networking and cloud."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {details.map((d) => (
              <li key={d.label} className="glass-card flex items-center gap-4 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <d.icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="block truncate text-sm text-foreground hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm text-foreground">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={onSubmit} className="glass-card grid gap-4 p-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-lg border border-input bg-surface-2/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-lg border border-input bg-surface-2/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-y rounded-lg border border-input bg-surface-2/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about the role or project"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
