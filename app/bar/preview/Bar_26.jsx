/* ===== paste into react-live (scope: { React, motion }) ===== */

const PolarAreaChart = ({
  data,
  width = 500,
  height = 500,
  startAngle = 0,
  endAngle = 360,
  innerRadius = 50,
  animationDuration = 0.8,
  showLabels = true,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1', '#14B8A6', '#F97316', '#06B6D4'],
  ...props
}) => {
  const [hovered, setHovered] = React.useState(null);

  const center = { x: width / 2, y: height / 2 };
  const maxRadius = Math.min(width, height) / 2 - 40;
  const angleRange = endAngle - startAngle;

  // pre-compute segments
  const segments = React.useMemo(() => {
    const maxVal = Math.max(...data.map(d => d.value));
    return data.map((item, idx) => {
      const sa = ((startAngle + idx * (angleRange / data.length)) * Math.PI) / 180;
      const ea = ((startAngle + (idx + 1) * (angleRange / data.length)) * Math.PI) / 180;
      const radius = innerRadius + ((maxRadius - innerRadius) * item.value) / maxVal;
      const path = [
        `M ${center.x + innerRadius * Math.cos(sa)} ${center.y + innerRadius * Math.sin(sa)}`,
        `L ${center.x + radius * Math.cos(sa)} ${center.y + radius * Math.sin(sa)}`,
        `A ${radius} ${radius} 0 0 1 ${center.x + radius * Math.cos(ea)} ${center.y + radius * Math.sin(ea)}`,
        `L ${center.x + innerRadius * Math.cos(ea)} ${center.y + innerRadius * Math.sin(ea)}`,
        `A ${innerRadius} ${innerRadius} 0 0 0 ${center.x + innerRadius * Math.cos(sa)} ${center.y + innerRadius * Math.sin(sa)}`,
        'Z'
      ].join(' ');
      const labelAngle = (sa + ea) / 2;
      const labelPos = {
        x: center.x + (radius * 0.7) * Math.cos(labelAngle),
        y: center.y + (radius * 0.7) * Math.sin(labelAngle)
      };
      return { path, labelPos, item, color: item.color || colorPalette[idx % colorPalette.length] };
    });
  }, [data, startAngle, endAngle, innerRadius, maxRadius]);

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* background circle */}
        <circle cx={center.x} cy={center.y} r={maxRadius} fill="#f8fafc" stroke="#e2e8f0" />
        {segments.map((seg, i) => {
          const on = hovered === i;
          return (
            <g key={i}>
              <motion.path
                d={seg.path}
                fill={seg.color}
                fillOpacity={on ? 0.9 : 0.7}
                stroke="white"
                strokeWidth={on ? 2 : 1}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: animationDuration, delay: i * 0.1, type: 'spring' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
              {showLabels && (
                <motion.text
                  x={seg.labelPos.x}
                  y={seg.labelPos.y}
                  fontSize="12"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#000000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: animationDuration + i * 0.1 }}
                >
                  {seg.item.label}
                </motion.text>
              )}
            </g>
          );
        })}
        {/* inner hole */}
        <circle cx={center.x} cy={center.y} r={innerRadius} fill="#f8fafc" stroke="#e2e8f0" />
      </svg>

      {/* legend */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded shadow text-xs">
        <div className="font-medium text-gray-900 mb-1">Legend</div>
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 inline-block rounded" style={{ background: seg.color }}></span>
            <span className="text-gray-600">{seg.item.label}: {seg.item.value}</span>
          </div>
        ))}
      </div>

      {/* tooltip */}
      {hovered !== null && (
        <div className="absolute bg-white p-2 rounded shadow text-xs" style={{ left: segments[hovered].labelPos.x, top: segments[hovered].labelPos.y - 40, transform: 'translateX(-50%)' }}>
          <div className="font-medium mb-1">{segments[hovered].item.label}</div>
          <div>Value: {segments[hovered].item.value}</div>
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData26 = [
  { label: 'Marketing', value: 30 },
  { label: 'Sales', value: 45 },
  { label: 'Dev', value: 25 }
];

render(<PolarAreaChart data={demoData26} />);
