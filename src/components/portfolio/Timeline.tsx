import { Briefcase, GraduationCap, MapPin, Route } from "lucide-react";
import { resume } from "@/data/resume";
import { Reveal, Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Internship & hands-on work"
      description="Enterprise network exposure gained during my summer internship."
    >
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {resume.experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 70}>
            <div className="relative pb-2">
              <span className="absolute -left-[1.85rem] top-2 grid size-7 place-items-center rounded-full border border-primary/40 bg-background text-primary sm:-left-[2.35rem]">
                <Briefcase className="size-3.5" aria-hidden="true" />
              </span>
              <div className="glass-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-primary">{job.duration}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/90">{job.company}</p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {r}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="education" title="Academic background">
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {resume.education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 70}>
            <div className="relative pb-6">
              <span className="absolute -left-[1.85rem] top-2 grid size-7 place-items-center rounded-full border border-primary/40 bg-background text-primary sm:-left-[2.35rem]">
                <GraduationCap className="size-3.5" aria-hidden="true" />
              </span>
              <div className="glass-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold">{edu.degree}</h3>
                  <span className="font-mono text-xs text-primary">{edu.duration}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{edu.institution}</p>
                <p className="mt-2 inline-block rounded-md border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                  {edu.status}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Focus() {
  return (
    <Section
      id="focus"
      eyebrow="professional focus"
      title="Career roadmap"
      description="My learning path and career direction, built on the skills in my resume."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resume.focus.map((stage, i) => (
          <Reveal key={stage.stage} delay={i * 70}>
            <div className="glass-card relative h-full p-5">
              <span className="font-mono text-xs text-primary">{`0${i + 1}`}</span>
              <h3 className="mt-3 flex items-center gap-2 font-display text-base font-semibold">
                <Route className="size-4 text-cyan" aria-hidden="true" />
                {stage.stage}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
              {i < resume.focus.length - 1 ? (
                <span
                  className="absolute -right-2 top-1/2 hidden h-px w-4 bg-primary/40 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
