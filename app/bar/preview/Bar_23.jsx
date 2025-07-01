/* ===== paste into react-live (scope: { React, motion }) ===== */

const StackedHorizontalBarChart = ({
  data,
  width = 700,
  height = 400,
  barHeight = 40,
  animationDuration = 0.8,
  showLegend = true,
  showValues = true,
  ...props
}) => {
  const [hovered, setHovered] = React.useState(null); // {row, seg}

  const padding = { top: 20, right: 20, bottom: 20, left: 120 };
  const chartWidth = width - padding.left - padding.right;

  const maxTotal = Math.max(
    ...data.map(d => d.segments.reduce((s, seg) => s + seg.value, 0))
  );

  // legend from first row
  const legend = data[0]?.segments.map(s => ({ label: s.label, color: s.color })) || [];

  const calcHeight = Math.max(
    height,
    padding.top + padding.bottom + data.length * (barHeight + 10)
  );

  return (
    <div className="relative bg-white" style={{ width, height: calcHeight }} {...props}>
      <svg width={width} height={calcHeight}>
        {/* Y labels */}
        {data.map((row, r) => (
          <text
            key={r}
            x={padding.left - 10}
            y={padding.top + r * (barHeight + 10) + barHeight / 2}
            fontSize="12"
            textAnchor="end"
            dominantBaseline="middle"
            fill="#374151"
          >
            {row.label}
          </text>
        ))}

        {/* X axis line */}
        <line
          x1={padding.left}
          y1={calcHeight - padding.bottom}
          x2={width - padding.right}
          y2={calcHeight - padding.bottom}
          stroke="#e5e7eb"
        />

        {/* X ticks */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
          const x = padding.left + chartWidth * t;
          return (
            <g key={i}>
              <line x1={x} y1={calcHeight - padding.bottom} x2={x} y2={calcHeight - padding.bottom + 5} stroke="#e5e7eb" />
              <text x={x} y={calcHeight - padding.bottom + 15} fontSize="10" textAnchor="middle" fill="#6b7280">
                {Math.round(maxTotal * t)}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((row, r) => {
          let xOffset = 0;
          return row.segments.map((seg, s) => {
            const segW = (seg.value / maxTotal) * chartWidth;
            const x = padding.left + xOffset;
            const y = padding.top + r * (barHeight + 10);
            const isH = hovered && hovered.row === r && hovered.seg === s;
            xOffset += segW;
            return (
              <g key={`${r}-${s}`}>
                <motion.rect
                  x={x}
                  y={y}
                  width={segW}
                  height={barHeight}
                  fill={seg.color}
                  rx={4}
                  opacity={isH ? 1 : 0.85}
                  initial={{ width: 0 }}
                  animate={{ width: segW }}
                  transition={{ duration: animationDuration, delay: s * 0.1 }}
                  onMouseEnter={() => setHovered({ row: r, seg: s })}
                  onMouseLeave={() => setHovered(null)}
                />
                {showValues && segW > 40 && (
                  <motion.text
                    x={x + segW / 2}
                    y={y + barHeight / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fill="#000000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: animationDuration + s * 0.1 }}
                  >
                    {seg.value}
                  </motion.text>
                )}
              </g>
            );
          });
        })}
      </svg>

      {/* Legend */}
      {showLegend && (
        <div className="absolute top-0 right-0 bg-white bg-opacity-90 p-2 rounded shadow text-xs">
          <div className="font-medium text-gray-700 mb-1">Legend</div>
          {legend.map((l, i) => (
            <div key={i} className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 inline-block rounded-sm" style={{ background: l.color }}></span>
              <span className="text-gray-600">{l.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tooltip */}
      {hovered && (
        <div
          className="absolute bg-white p-2 rounded shadow text-xs z-10"
          style={{
            left:
              padding.left +
              data[hovered.row].segments
                .slice(0, hovered.seg)
                .reduce((s, se) => s + (se.value / maxTotal) * chartWidth, 0) +
              ((data[hovered.row].segments[hovered.seg].value / maxTotal) * chartWidth) / 2,
            top: padding.top + hovered.row * (barHeight + 10) - 30,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-medium mb-1">{data[hovered.row].segments[hovered.seg].label}</div>
          <div>Value: {data[hovered.row].segments[hovered.seg].value}</div>
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData23 = [
  {
    label: 'Sales',
    segments: [
      { value: 150, color: '#3b82f6', label: 'Online' },
      { value: 220, color: '#10b981', label: 'In-store' },
      { value: 180, color: '#f59e0b', label: 'Mobile' }
    ]
  },
  {
    label: 'Profit',
    segments: [
      { value: 50, color: '#3b82f6', label: 'Online' },
      { value: 70, color: '#10b981', label: 'In-store' },
      { value: 55, color: '#f59e0b', label: 'Mobile' }
    ]
  }
];

render(<StackedHorizontalBarChart data={demoData23} />);
