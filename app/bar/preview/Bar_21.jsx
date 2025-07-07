/* ===== paste into react-live (scope: { React, motion }) ===== */

const WaterfallChart = ({
  data,
  width = 800,
  height = 500,
  barWidth = 40,
  animationDuration = 0.8,
  showConnectors = true,
  colorPalette = { positive: '#10B981', negative: '#EF4444', total: '#3B82F6' },
  ...props
}) => {
  const [hov, setHov] = React.useState(null);

  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;

  // totals
  let running = 0;
  const totals = data.map(item => {
    if (item.isTotal) return item.value;
    running += item.value;
    return running;
  });
  const minVal = Math.min(0, ...totals);
  const maxVal = Math.max(...totals);
  const range = maxVal - minVal;

  const bars = data.map((item, idx) => {
    const prev = idx === 0 ? 0 : totals[idx - 1];
    const x = margin.left + (chartW / (data.length + 1)) * (idx + 1);
    let y, h;
    if (item.isTotal) {
      y = margin.top + chartH - ((item.value - minVal) / range) * chartH;
      h = ((item.value - minVal) / range) * chartH;
    } else {
      const start = prev;
      const end = start + item.value;
      const startY = margin.top + chartH - ((start - minVal) / range) * chartH;
      const endY = margin.top + chartH - ((end - minVal) / range) * chartH;
      y = item.value >= 0 ? endY : startY;
      h = Math.abs(startY - endY);
    }
    return { x, y, w: barWidth, h, item, total: item.isTotal ? item.value : prev + item.value };
  });

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* grid */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = margin.top + (chartH / 5) * i;
          const val = maxVal - (range / 5) * i;
          return (
            <g key={i}>
              <line x1={margin.left} y1={y} x2={width - margin.right} y2={y} stroke="#e2e8f0" strokeDasharray="4 2" />
              <text x={margin.left - 10} y={y} fontSize="10" textAnchor="end" fill="#6b7280">{val.toFixed(0)}</text>
            </g>
          );
        })}

        {/* connectors */}
        {showConnectors && bars.map((b, idx) => {
          if (idx === 0) return null;
          const prev = bars[idx - 1];
          return (
            <motion.line key={idx}
              x1={prev.x + barWidth}
              y1={prev.y}
              x2={b.x}
              y2={b.y}
              stroke="#94A3B8" strokeDasharray="4 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: animationDuration, delay: idx * 0.1 }}
            />
          );
        })}

        {/* bars */}
        {bars.map((b, idx) => {
          const on = hov === idx;
          const col = b.item.color || (b.item.isTotal ? colorPalette.total : b.item.value >= 0 ? colorPalette.positive : colorPalette.negative);
          return (
            <g key={idx}>
              <motion.rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                fill={col}
                fillOpacity={on ? 0.9 : 0.7}
                stroke={col}
                strokeWidth={on ? 2 : 1}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: animationDuration, delay: idx * 0.1, type: 'spring' }}
                onMouseEnter={() => setHov(idx)}
                onMouseLeave={() => setHov(null)}
              />
              <motion.text x={b.x + barWidth / 2} y={b.y - 8} fontSize="10" textAnchor="middle" fill="#374151" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: animationDuration + idx * 0.1 }}>
                {b.item.value >= 0 ? '+' : ''}{b.item.value}
              </motion.text>
              <motion.text x={b.x + barWidth / 2} y={height - margin.bottom + 20} fontSize="10" textAnchor="middle" fill="#6b7280" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: animationDuration + idx * 0.1 }}>
                {b.item.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* tooltip */}
      {hov !== null && (
        <div className="absolute bg-white p-2 rounded shadow text-xs z-10" style={{ left: bars[hov].x + barWidth / 2, top: bars[hov].y - 40, transform: 'translateX(-50%)' }}>
          <div className="font-medium mb-1">{bars[hov].item.label}</div>
          <div>Change: {bars[hov].item.value >= 0 ? '+' : ''}{bars[hov].item.value}</div>
          <div>Total: {bars[hov].total}</div>
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData27 = [
  { label: 'Jan', value: 1200, isTotal: true },
  { label: 'Feb', value: -200 },
  { label: 'Mar', value: 300 },
  { label: 'Apr', value: -150 },
  { label: 'May', value: 500 },
  { label: 'Jun', value: 300 }
];

render(<WaterfallChart data={demoData27} />);
