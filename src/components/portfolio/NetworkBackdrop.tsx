const nodes = [
  { x: 60, y: 200, label: "Client" },
  { x: 260, y: 120, label: "Network" },
  { x: 470, y: 220, label: "Server" },
  { x: 690, y: 110, label: "Cloud" },
];

export function NetworkBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 760 320"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="var(--cyan)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1];
        return (
          <path
            key={n.label}
            d={`M ${n.x} ${n.y} C ${(n.x + next.x) / 2} ${n.y}, ${(n.x + next.x) / 2} ${next.y}, ${next.x} ${next.y}`}
            fill="none"
            stroke="url(#linkGrad)"
            strokeWidth="1.4"
            strokeDasharray="6 10"
            style={{ animation: `dash-flow ${6 + i * 1.5}s linear infinite` }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={`${n.label}-node`}>
          <circle cx={n.x} cy={n.y} r="16" fill="var(--primary)" opacity="0.06" />
          <circle
            cx={n.x}
            cy={n.y}
            r="4"
            fill="var(--cyan)"
            style={{ animation: `node-pulse ${3 + i * 0.6}s ease-in-out infinite` }}
          />
          <text
            x={n.x}
            y={n.y + 34}
            textAnchor="middle"
            className="font-mono"
            fontSize="10"
            fill="var(--muted-foreground)"
            opacity="0.8"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
