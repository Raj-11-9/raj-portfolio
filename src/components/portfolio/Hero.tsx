import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { resume } from "@/data/resume";
import { NetworkBackdrop } from "./NetworkBackdrop";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-16 hidden h-72 max-w-6xl opacity-45 sm:mx-auto lg:block"
        aria-hidden="true"
      >
        <NetworkBackdrop />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            available_for_opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {resume.name}
          </h1>
          <p className="mt-3 font-display text-lg text-gradient sm:text-2xl">{resume.title}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {resume.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={resumeAsset.url}
              download="Raj_Kumar_Singh_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={resume.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-11 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              {resume.contact.location}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-3.5 text-primary" aria-hidden="true" />
              <a href={`mailto:${resume.contact.email}`} className="hover:text-foreground">
                {resume.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-primary" aria-hidden="true" />
              <a href={`tel:${resume.contact.phone}`} className="hover:text-foreground">
                {resume.contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
