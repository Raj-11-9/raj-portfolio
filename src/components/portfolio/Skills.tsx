import { Cloud, Code2, Container, Network, TerminalSquare } from "lucide-react";
import { resume } from "@/data/resume";
import { Reveal, Section } from "./Section";

const icons = {
  network: Network,
  terminal: TerminalSquare,
  cloud: Cloud,
  container: Container,
  code: Code2,
} as const;

export function Identity() {
  return (
    <section id="identity" className="border-t border-border/60 py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            technical identity
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skillGroups.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <Reveal key={group.key} delay={i * 60}>
                <div className="glass-card h-full p-5 transition-colors hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-md border border-border bg-surface-2 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold">{group.label}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p>
                  <p className="mt-4 font-mono text-xs text-primary/80">
                    {group.items.slice(0, 5).join(" · ")}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="technical skills"
      title="Skills across the infrastructure stack"
      description="Technologies I have worked with through coursework, labs, internship work and personal projects."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {resume.skillGroups.map((group, i) => {
          const Icon = icons[group.icon as keyof typeof icons];
          return (
            <Reveal key={group.key} delay={i * 50}>
              <div className="glass-card h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-semibold">{group.label}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {group.items.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
