/* ===== paste into react-live (scope: { React, motion }) ===== */

const FunnelChart = ({
  data,
  width = 800,
  height = 500,
  gapBetweenLevels = 4,
  animationDuration = 0.8,
  showPercentages = true,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'],
  ...props
}) => {
  const [hovered, setHovered] = React.useState(null);

  const margin = { top: 40, right: 160, bottom: 40, left: 160 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;

  const sorted = [...data].sort((a, b) => b.value - a.value);
  const maxVal = sorted[0].value;
  const lvlH = (chartH - (data.length - 1) * gapBetweenLevels) / data.length;

  const levels = sorted.map((item, idx) => {
    const perc = (item.value / maxVal) * 100;
    const y = margin.top + idx * (lvlH + gapBetweenLevels);
    const topW = chartW * (perc / 100);
    const bottomW = idx < data.length - 1 ? chartW * (sorted[idx + 1].value / maxVal) : topW * 0.2;
    const drop = idx > 0 ? ((sorted[idx - 1].value - item.value) / sorted[idx - 1].value) * 100 : 0;
    return { item, y, height: lvlH, topW, bottomW, perc, drop };
  });

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {levels.map((lvl, idx) => {
          const on = hovered === idx;
          const color = lvl.item.color || colorPalette[idx % colorPalette.length];
          const pts = [
            `${margin.left + (chartW - lvl.topW) / 2},${lvl.y}`,
            `${margin.left + (chartW + lvl.topW) / 2},${lvl.y}`,
            `${margin.left + (chartW + lvl.bottomW) / 2},${lvl.y + lvl.height}`,
            `${margin.left + (chartW - lvl.bottomW) / 2},${lvl.y + lvl.height}`
          ].join(' ');
          return (
            <g key={idx}>
              <motion.polygon
                points={pts}
                fill={color}
                fillOpacity={on ? 0.9 : 0.7}
                stroke={color}
                strokeWidth={on ? 2 : 1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: animationDuration, delay: idx * 0.1, type: 'spring' }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              />
              <motion.text
                x={margin.left - 20}
                y={lvl.y + lvl.height / 2}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="12"
                fill="#374151"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: margin.left - 20 }}
                transition={{ duration: 0.3, delay: animationDuration + idx * 0.1 }}
              >
                {lvl.item.label}
              </motion.text>
              <motion.text
                x={width - margin.right + 20}
                y={lvl.y + lvl.height / 2}
                textAnchor="start"
                dominantBaseline="middle"
                fontSize="12"
                fill="#6b7280"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: width - margin.right + 20 }}
                transition={{ duration: 0.3, delay: animationDuration + idx * 0.1 }}
              >
                <tspan>{lvl.item.value.toLocaleString()}</tspan>
                {showPercentages && <tspan dx="8" fontSize="10">({lvl.perc.toFixed(1)}%)</tspan>}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {hovered !== null && (
        <div className="absolute bg-white p-3 rounded shadow text-xs z-10" style={{ left: width / 2, top: levels[hovered].y + levels[hovered].height / 2, transform: 'translate(-50%, -50%)' }}>
          <div className="font-medium mb-1">{levels[hovered].item.label}</div>
          <div>Value: {levels[hovered].item.value.toLocaleString()}</div>
          <div>Conversion: {levels[hovered].perc.toFixed(1)}%</div>
          {hovered > 0 && <div className="text-red-500">Dropoff: {levels[hovered].drop.toFixed(1)}%</div>}
          {levels[hovered].item.description && <div className="mt-1 text-gray-500">{levels[hovered].item.description}</div>}
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData28 = [
  { label: 'Visitors', value: 1000 },
  { label: 'Leads', value: 200 },
  { label: 'Proposals', value: 100 },
  { label: 'Negotiations', value: 50 },
  { label: 'Closed', value: 20 }
];

render(<FunnelChart data={demoData28} />);
