import { useEffect, useState } from "react";

const lines = [
  { cmd: "whoami", out: "raj-kumar-singh — infrastructure & cloud engineer" },
  { cmd: "cat skills.txt", out: "networking | linux | aws | docker | python | bash" },
  { cmd: "uptime --experience", out: "network engineer intern @ jindal stainless ltd. (2025)" },
  { cmd: "status", out: "available_for_opportunities" },
];

export function Terminal() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = lines[step % lines.length];
    if (!current) return;
    let i = 0;
    setTyped("");
    const typer = setInterval(() => {
      i += 1;
      setTyped(current.cmd.slice(0, i));
      if (i >= current.cmd.length) {
        clearInterval(typer);
      }
    }, 55);
    const next = setTimeout(() => setStep((s) => s + 1), 2600 + current.cmd.length * 55);
    return () => {
      clearInterval(typer);
      clearTimeout(next);
    };
  }, [step]);

  const shown = lines.slice(0, (step % lines.length) + 1);

  return (
    <div className="glass-card overflow-hidden shadow-elegant">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-chart-5/70" />
        <span className="size-2.5 rounded-full bg-chart-4/70" />
        <p className="ml-2 font-mono text-xs text-muted-foreground">raj@infra ~ bash</p>
      </div>
      <div className="space-y-3 p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
        {shown.map((line, idx) => {
          const isLast = idx === shown.length - 1;
          return (
            <div key={line.cmd} className="space-y-1">
              <p className="flex flex-wrap items-center gap-1.5">
                <span className="text-primary">$</span>
                <span className="text-foreground">{isLast ? typed : line.cmd}</span>
                {isLast ? (
                  <span
                    className="inline-block h-4 w-1.5 bg-cyan align-middle"
                    style={{ animation: "caret-blink 1s step-end infinite" }}
                  />
                ) : null}
              </p>
              {!isLast || typed === line.cmd ? (
                <p className="pl-4 text-muted-foreground">{line.out}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
