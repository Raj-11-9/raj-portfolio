import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Identity, Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Architecture } from "@/components/portfolio/Architecture";
import { Education, Experience, Focus } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Reveal, Section } from "@/components/portfolio/Section";
import { resume } from "@/data/resume";

const title = `${resume.name} | ${resume.title}`;
const description =
  "Portfolio of Raj Kumar Singh — B.Tech CSE student and aspiring IT infrastructure and cloud professional skilled in Cisco networking, VLANs, Linux administration, Bash scripting, AWS EC2 and Docker.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: resume.name,
          jobTitle: resume.title,
          email: `mailto:${resume.contact.email}`,
          telephone: resume.contact.phone,
          address: { "@type": "PostalAddress", addressLocality: "Bathinda, Punjab, India" },
          sameAs: [resume.contact.linkedin],
          alumniOf: { "@type": "CollegeOrUniversity", name: "Guru Kashi University" },
          knowsAbout: ["Computer Networking", "Cisco", "Linux", "AWS", "Docker", "Python", "Bash"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function About() {
  return (
    <Section
      id="about"
      eyebrow="about me"
      title="Infrastructure-first, from the wire to the cloud"
      description={resume.objective}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="glass-card h-full p-6">
            <h3 className="font-display text-base font-semibold">Academics</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pursuing a B.Tech in Computer Science and Engineering at Guru Kashi University
              (2023–2027), with self-directed focus on networking, Linux and cloud fundamentals.
            </p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="glass-card h-full p-6">
            <h3 className="font-display text-base font-semibold">Hands-on practice</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Configured Cisco switches and VLANs during my internship at Jindal Stainless Ltd., and
              built projects around network monitoring and automated AWS web server deployment using
              Bash, Python, Linux and Docker.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass-card h-full p-6">
            <h3 className="font-display text-base font-semibold">Direction</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Looking for an entry-level role in network configuration, troubleshooting and
              infrastructure management, while growing into enterprise IT and cloud technologies.
            </p>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-2">
          <div className="glass-card h-full p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              soft skills
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {resume.softSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1.5 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              interests
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {resume.interests.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1.5 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="glass-card h-full p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              languages
            </h3>
            <ul className="mt-4 space-y-2">
              {resume.languages.map((l) => (
                <li key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Identity />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Focus />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {resume.name}
          </p>
          <p>
            {resume.title} · {resume.contact.location}
          </p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
