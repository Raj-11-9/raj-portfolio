import { CheckCircle2, Github, Layers } from "lucide-react";
import { resume } from "@/data/resume";
import { Reveal, Section } from "./Section";

function NetworkVisual() {
  return (
    <svg viewBox="0 0 320 140" className="h-32 w-full" aria-hidden="true">
      <g stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
        <path d="M40 70 H120 M120 70 L200 30 M120 70 L200 110 M200 30 H280 M200 110 H280" />
      </g>
      {[
        [40, 70],
        [120, 70],
        [200, 30],
        [200, 110],
        [280, 30],
        [280, 110],
      ].map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="5"
          fill="var(--cyan)"
          style={{ animation: `node-pulse ${2.4 + i * 0.3}s ease-in-out infinite` }}
        />
      ))}
      <text x="40" y="96" fontSize="8" fill="var(--muted-foreground)" textAnchor="middle" className="font-mono">
        monitor
      </text>
      <text x="280" y="16" fontSize="8" fill="var(--muted-foreground)" textAnchor="middle" className="font-mono">
        hosts
      </text>
    </svg>
  );
}

function CloudVisual() {
  return (
    <svg viewBox="0 0 320 140" className="h-32 w-full" aria-hidden="true">
      <rect x="24" y="24" width="272" height="92" rx="10" fill="none" stroke="var(--border)" />
      <text x="34" y="40" fontSize="8" fill="var(--muted-foreground)" className="font-mono">
        aws region
      </text>
      {[
        { x: 46, label: "cli" },
        { x: 130, label: "ec2" },
        { x: 214, label: "apache" },
      ].map((box, i) => (
        <g key={box.label}>
          <rect
            x={box.x}
            y="58"
            width="60"
            height="34"
            rx="6"
            fill="var(--primary)"
            fillOpacity="0.1"
            stroke="var(--primary)"
            strokeOpacity="0.4"
          />
          <text
            x={box.x + 30}
            y="79"
            fontSize="9"
            textAnchor="middle"
            fill="var(--cyan)"
            className="font-mono"
          >
            {box.label}
          </text>
          {i < 2 ? (
            <line
              x1={box.x + 62}
              y1="75"
              x2={box.x + 82}
              y2="75"
              stroke="var(--cyan)"
              strokeOpacity="0.6"
              strokeDasharray="4 4"
              style={{ animation: `dash-flow ${5 + i}s linear infinite` }}
            />
          ) : null}
        </g>
      ))}
    </svg>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Practical infrastructure builds"
      description="Hands-on projects combining networking, Linux, scripting and cloud services."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {resume.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <article className="glass-card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <div className="grid-pattern border-b border-border bg-surface-2/50 px-4 pt-2">
                {project.visual === "network" ? <NetworkVisual /> : <CloudVisual />}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 rounded-lg border border-border bg-surface-2/50 p-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                    problem solved
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{project.problem}</p>
                </div>

                <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                  key features
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-cyan" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                  my contribution
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{project.contribution}</p>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Github className="size-3.5" aria-hidden="true" />
          <Layers className="size-3.5" aria-hidden="true" />
          Repository and live links available on request.
        </p>
      </Reveal>
    </Section>
  );
}
