/* ===== paste into react-live (scope: { React, motion }) ===== */

const BubbleChart = ({
  data,
  width = 700,
  height = 500,
  minRadius = 20,
  maxRadius = 80,
  animationDuration = 1.2,
  showLabels = true,
  colorMap = {
    'Category A': '#3B82F6',
    'Category B': '#10B981',
    'Category C': '#F59E0B',
    'Category D': '#8B5CF6',
    'Category E': '#EC4899'
  },
  ...props
}) => {
  const [hov, setHov] = React.useState(null);

  const padding = 40;
  const chartW = width - padding * 2;
  const chartH = height - padding * 2;

  const minVal = Math.min(...data.map(d => d.value));
  const maxVal = Math.max(...data.map(d => d.value));

  // group by category
  const grouped = {};
  data.forEach(d => {
    grouped[d.category] = grouped[d.category] || [];
    grouped[d.category].push(d);
  });
  const cats = Object.keys(grouped);

  // compute positions once (no layout engine)
  const positions = React.useMemo(() => {
    return data.map(item => {
      const radius = minRadius + ((item.value - minVal) / (maxVal - minVal)) * (maxRadius - minRadius);
      const catIdx = cats.indexOf(item.category);
      const xSec = chartW / cats.length;
      const xBase = padding + (catIdx + 0.5) * xSec;
      const itemsCat = grouped[item.category].length;
      const idx = grouped[item.category].indexOf(item);
      const ySec = chartH / (itemsCat + 1);
      const yBase = padding + (idx + 1) * ySec;
      const xRand = (Math.random() - 0.5) * (xSec * 0.5);
      const yRand = (Math.random() - 0.5) * (ySec * 0.5);
      const x = Math.max(padding + radius, Math.min(width - padding - radius, xBase + xRand));
      const y = Math.max(padding + radius, Math.min(height - padding - radius, yBase + yRand));
      return { x, y, radius };
    });
  }, []); // compute once

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* grid */}
        <rect x={padding} y={padding} width={chartW} height={chartH} fill="#f9fafb" stroke="#e5e7eb" rx={8} />

        {/* category labels */}
        {cats.map((c, i) => {
          const xSec = chartW / cats.length;
          const x = padding + (i + 0.5) * xSec;
          return (
            <text key={c} x={x} y={height - 10} fontSize="12" textAnchor="middle" fill="#374151">
              {c}
            </text>
          );
        })}

        {/* bubbles */}
        {data.map((item, idx) => {
          const { x, y, radius } = positions[idx];
          const color = item.color || colorMap[item.category] || '#3B82F6';
          const on = hov === idx;
          return (
            <g key={idx}>
              <motion.circle
                cx={x}
                cy={y}
                r={radius}
                fill={color}
                fillOpacity={on ? 0.9 : 0.7}
                stroke={color}
                strokeWidth={on ? 3 : 1}
                initial={{ r: 0, opacity: 0 }}
                animate={{ r: radius, opacity: 1 }}
                transition={{ duration: animationDuration, delay: idx * 0.05, type: 'spring', stiffness: 100 }}
                onMouseEnter={() => setHov(idx)}
                onMouseLeave={() => setHov(null)}
              />
              {showLabels && (
                <motion.text
                  x={x}
                  y={y}
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#000000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: animationDuration + idx * 0.05 }}
                >
                  {item.label}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>

      {/* legend */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded shadow text-xs">
        <div className="font-medium text-gray-700 mb-1">Categories</div>
        {cats.map(c => (
          <div key={c} className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 inline-block rounded-full" style={{ background: colorMap[c] || '#3B82F6' }}></span>
            <span className="text-gray-600">{c}</span>
          </div>
        ))}
      </div>

      {/* tooltip */}
      {hov !== null && (
        <div
          className="absolute bg-white p-2 rounded shadow text-xs z-10"
          style={{
            left: positions[hov].x,
            top: positions[hov].y - positions[hov].radius - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-medium mb-1">{data[hov].label}</div>
          <div>Value: {data[hov].value}</div>
          <div>Category: {data[hov].category}</div>
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData25 = [
  { label: 'Product A', value: 85, category: 'Category A' },
  { label: 'Product C', value: 120, category: 'Category B' },
  { label: 'Product E', value: 90, category: 'Category C' },
  { label: 'Product G', value: 110, category: 'Category D' },
  { label: 'Product I', value: 75, category: 'Category E' }
];

render(<BubbleChart data={demoData25} />);
