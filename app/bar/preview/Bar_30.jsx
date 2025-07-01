/* ===== paste into react-live (scope: { React, motion }) ===== */

const RadialProgressChart = ({
  data,
  width = 400,
  height = 400,
  innerRadius = 60,
  gap = 4,
  animationDuration = 1.2,
  showLabels = true,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'],
  gradientOffset = 0.2,
  ...props
}) => {
  const [hov, setHov] = React.useState(null);

  const center = { x: width / 2, y: height / 2 };
  const maxR = Math.min(width, height) / 2 - 40;

  const rings = React.useMemo(() => {
    return data.map((ring, idx) => {
      const thick = ring.thickness || (maxR - innerRadius - (data.length - 1) * gap) / data.length;
      const radius = innerRadius + idx * (thick + gap);
      const col = ring.color || colorPalette[idx % colorPalette.length];
      const maxVal = ring.maxValue || 100;
      const perc = (ring.value / maxVal) * 100;
      const circ = 2 * Math.PI * radius;
      return { ...ring, radius, thick, col, perc, circ, dash: `${(perc * circ) / 100} ${circ}` };
    });
  }, [data, width, height]);

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {rings.map((r, idx) => (
          <g key={idx}>
            {/* background */}
            <circle cx={center.x} cy={center.y} r={r.radius} fill="none" stroke="#e2e8f0" strokeWidth={r.thick} opacity={0.2} />
            {/* progress */}
            <motion.circle
              cx={center.x}
              cy={center.y}
              r={r.radius}
              fill="none"
              stroke={r.col}
              strokeWidth={r.thick}
              strokeDasharray={r.dash}
              strokeDashoffset={r.circ * 0.25}
              transform={`rotate(-90 ${center.x} ${center.y})`}
              strokeLinecap="round"
              initial={{ strokeDasharray: `0 ${r.circ}` }}
              animate={{ strokeDasharray: r.dash }}
              transition={{ duration: animationDuration, delay: idx * 0.2, type: 'spring', stiffness: 60 }}
              onMouseEnter={() => setHov(idx)}
              onMouseLeave={() => setHov(null)}
            />
            {showLabels && (
              <text x={center.x} y={center.y - r.radius + 15} fontSize="12" textAnchor="middle" fill="#374151">
                {r.label}
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* tooltip */}
      {hov !== null && (
        <div className="absolute bg-white p-2 rounded shadow text-xs z-10" style={{ left: center.x, top: center.y - rings[hov].radius, transform: 'translate(-50%, -100%)' }}>
          <div className="font-medium mb-1">{rings[hov].label}</div>
          <div>Value: {rings[hov].value}</div>
          <div>Progress: {rings[hov].perc.toFixed(1)}%</div>
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData30 = [
  { label: 'Sales', value: 100 },
  { label: 'Profit', value: 80 },
  { label: 'Customers', value: 90 },
  { label: 'Inventory', value: 70 }
];

render(<RadialProgressChart data={demoData30} />);
