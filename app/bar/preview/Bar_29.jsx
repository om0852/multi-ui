/* ===== paste into react-live (scope: { React, motion }) ===== */

const CirclePackingChart = ({
  data,
  width = 800,
  height = 800,
  padding = 2,
  animationDuration = 0.8,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'],
  ...props
}) => {
  const [hov, setHov] = React.useState(null);

  function pack(node) {
    if (!node.children || node.children.length === 0) return { x: 0, y: 0, r: Math.sqrt(Math.abs(node.value)), node };
    const kids = node.children.map(c => pack(c));
    const area = kids.reduce((s, c) => s + Math.PI * c.r * c.r, 0);
    const scale = Math.sqrt(Math.abs(node.value) / area);
    kids.forEach(c => { c.r *= scale; c.x *= scale; c.y *= scale; });
    let cx = 0, cy = 0, rowH = 0;
    kids.forEach(c => {
      if (cx + 2 * c.r > 200) { cx = 0; cy += rowH + padding; rowH = 0; }
      c.x = cx + c.r; c.y = cy + c.r; cx += 2 * c.r + padding; rowH = Math.max(rowH, 2 * c.r);
    });
    return { x: 0, y: 0, r: Math.sqrt(Math.abs(node.value)), node, children: kids };
  }

  const rootR = Math.min(width, height) / 2 - 40;
  const packed = React.useMemo(() => pack(data), [data]);
  const center = { x: width / 2, y: height / 2 };

  const render = (circle, depth = 0) => {
    const col = circle.node.color || colorPalette[depth % colorPalette.length];
    const on = hov === circle;
    return (
      <g key={circle.node.id}>
        <motion.circle
          cx={center.x + circle.x}
          cy={center.y + circle.y}
          r={circle.r}
          fill={col}
          fillOpacity={on ? 0.9 : 0.7}
          stroke={col}
          strokeWidth={on ? 2 : 1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: animationDuration, delay: depth * 0.1, type: 'spring' }}
          onMouseEnter={() => setHov(circle)}
          onMouseLeave={() => setHov(null)}
        />
        {circle.r > 30 && (
          <motion.text x={center.x + circle.x} y={center.y + circle.y} fontSize="12" textAnchor="middle" dominantBaseline="middle" fill="#000000" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: animationDuration + depth * 0.1 }}>
            {circle.node.label}
          </motion.text>
        )}
        {circle.children && circle.children.map(ch => render(ch, depth + 1))}
      </g>
    );
  };

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>{render(packed)}</svg>
      {hov && (
        <div className="absolute bg-white p-2 rounded shadow text-xs z-10" style={{ left: center.x + hov.x, top: center.y + hov.y - hov.r - 20, transform: 'translate(-50%, -100%)' }}>
          <div className="font-medium mb-1">{hov.node.label}</div>
          <div>Value: {hov.node.value}</div>
          {hov.children && <div className="text-gray-500">Children: {hov.children.length}</div>}
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData29 = {
  id: 'root', label: 'Root', value: 1000, children: [
    { id: 'A', label: 'A', value: 400 },
    { id: 'B', label: 'B', value: 300 },
    { id: 'C', label: 'C', value: 200 },
    { id: 'D', label: 'D', value: 100 }
  ]
};

render(<CirclePackingChart data={demoData29} />);
