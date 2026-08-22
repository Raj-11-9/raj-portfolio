import { Boxes, Cloud, Globe, Monitor, Server, Shield } from "lucide-react";
import { Reveal, Section } from "./Section";

const layers = [
  { icon: Monitor, label: "User", detail: "SSH / browser client" },
  { icon: Globe, label: "Internet", detail: "DNS, NAT, public IP" },
  { icon: Shield, label: "Network & Security", detail: "Security groups, ACLs, VLAN segmentation" },
  { icon: Cloud, label: "AWS EC2", detail: "Key pair access, EBS volumes, AMI baseline" },
  { icon: Boxes, label: "Docker Container", detail: "Packaged monitoring / service runtime" },
  { icon: Server, label: "Application", detail: "Apache web server, monitoring output" },
];

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="infrastructure architecture"
      title="How my projects fit together"
      description="A simplified view of the request path across the technologies I work with — from client to network controls, cloud compute, containers and the application itself."
    >
      <div className="glass-card grid-pattern overflow-hidden p-6 sm:p-8">
        <ol className="grid gap-4">
          {layers.map((layer, i) => (
            <Reveal key={layer.label} delay={i * 60}>
              <li className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <layer.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1 rounded-lg border border-border bg-surface-2/60 px-4 py-3">
                  <p className="font-display text-sm font-semibold">{layer.label}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{layer.detail}</p>
                </div>
                <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                  {`L${i + 1}`}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
