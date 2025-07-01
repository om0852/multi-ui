/* ===== paste into react-live (scope: { React, motion }) ===== */

const CircularProgressChart = ({
  data,
  width = 600,
  height = 400,
  thickness = 20,
  animationDuration = 1.5,
  showLabels = true,
  showValues = true,
  maxValue = 100,
  ...props
}) => {
  const [hov, setHov] = React.useState(null);

  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy) - thickness / 2 - 20;

  const arcSpacing = 10; // degrees between arcs
  const arcAngle = (360 - data.length * arcSpacing) / data.length;

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {data.map((item, i) => {
          const startA = i * (arcAngle + arcSpacing);
          const endA = startA + arcAngle;
          const startR = ((startA - 90) * Math.PI) / 180;
          const endR = ((endA - 90) * Math.PI) / 180;
          const x1 = cx + radius * Math.cos(startR);
          const y1 = cy + radius * Math.sin(startR);
          const x2 = cx + radius * Math.cos(endR);
          const y2 = cy + radius * Math.sin(endR);
          const largeArc = arcAngle > 180 ? 1 : 0;

          const progress = Math.min(item.value / maxValue, 1);
          const progEndA = startA + arcAngle * progress;
          const progEndR = ((progEndA - 90) * Math.PI) / 180;
          const px2 = cx + radius * Math.cos(progEndR);
          const py2 = cy + radius * Math.sin(progEndR);
          const largeProg = arcAngle * progress > 180 ? 1 : 0;
          const on = hov === i;

          return (
            <g key={i}>
              {/* background arc */}
              <path d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`} fill="none" stroke="#e5e7eb" strokeWidth={thickness} strokeLinecap="round" />
              {/* progress arc */}
              <motion.path
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeProg} 1 ${px2} ${py2}`}
                fill="none"
                stroke={item.color}
                strokeWidth={on ? thickness + 4 : thickness}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress }}
                transition={{ duration: animationDuration, ease: 'easeOut' }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              />
              {/* label */}
              {showLabels && (() => {
                const midA = (startA + endA) / 2;
                const midR = ((midA - 90) * Math.PI) / 180;
                const lr = radius + thickness / 2 + 20;
                const lx = cx + lr * Math.cos(midR);
                const ly = cy + lr * Math.sin(midR);
                return (
                  <motion.text
                    x={lx}
                    y={ly}
                    fontSize="12"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#374151"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 + animationDuration / 2 }}
                  >
                    {item.label}
                  </motion.text>
                );
              })()}
              {/* value */}
              {showValues && (() => {
                const midA = (startA + progEndA) / 2;
                const midR = ((midA - 90) * Math.PI) / 180;
                const vr = radius - thickness / 2 - 15;
                const vx = cx + vr * Math.cos(midR);
                const vy = cy + vr * Math.sin(midR);
                return (
                  <motion.text
                    x={vx}
                    y={vy}
                    fontSize="10"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#6b7280"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: on || progress > 0.1 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.value}%
                  </motion.text>
                );
              })()}
            </g>
          );
        })}
        {/* center text */}
        <text x={cx} y={cy} fontSize="16" textAnchor="middle" dominantBaseline="middle" fill="#374151">
          {hov !== null ? `${data[hov].value}%` : 'Progress'}
        </text>
      </svg>
    </div>
  );
};

/* ——— demo ——— */
const demoData24 = [
  { label: 'Views', value: 75, color: '#3b82f6' },
  { label: 'Likes', value: 50, color: '#f472b6' },
  { label: 'Shares', value: 30, color: '#10b981' }
];

render(<CircularProgressChart data={demoData24} />);
