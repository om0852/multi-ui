/* ===== paste into react-live (scope: { React, motion }) ===== */

const RadialBarChart = ({
  data,
  width = 500,
  height = 500,
  innerRadius = 80,
  animationDuration = 0.8,
  showLabels = true,
  showValues = true,
  ...props
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = Math.min(centerX, centerY) - 20;

  const maxValue = Math.max(...data.map(d => d.value), 1);
  const anglePerSegment = (2 * Math.PI) / data.length;

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* Background circle */}
        <circle cx={centerX} cy={centerY} r={outerRadius} fill="none" stroke="#f3f4f6" strokeWidth="1" />
        {/* Inner circle */}
        <circle cx={centerX} cy={centerY} r={innerRadius} fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />

        {/* Radial bars */}
        {data.map((item, index) => {
          const angle = index * anglePerSegment - Math.PI / 2;
          const normalizedValue = item.value / maxValue;
          const barRadius = innerRadius + (outerRadius - innerRadius) * normalizedValue;

          const x1 = centerX + innerRadius * Math.cos(angle);
          const y1 = centerY + innerRadius * Math.sin(angle);
          const x2 = centerX + barRadius * Math.cos(angle);
          const y2 = centerY + barRadius * Math.sin(angle);

          const isHovered = hoveredIndex === index;

          return (
            <g key={index}>
              {/* Background line */}
              <line x1={x1} y1={y1} x2={centerX + outerRadius * Math.cos(angle)} y2={centerY + outerRadius * Math.sin(angle)} stroke="#e5e7eb" strokeWidth="2" />

              {/* Value line */}
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={item.color}
                strokeWidth={isHovered ? 4 : 3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: animationDuration, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />

              {/* Dot */}
              <motion.circle
                cx={x2}
                cy={y2}
                r={isHovered ? 6 : 4}
                fill={item.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </g>
          );
        })}

        {/* Center label */}
        <text x={centerX} y={centerY} textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#374151">
          {hoveredIndex !== null ? data[hoveredIndex].label : 'Metrics'}
        </text>

        {/* Value display */}
        {showValues && hoveredIndex !== null && (
          <motion.text
            x={centerX}
            y={centerY + 20}
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {data[hoveredIndex].value}
          </motion.text>
        )}

        {/* Outer labels */}
        {showLabels && data.map((item, index) => {
          const angle = index * anglePerSegment - Math.PI / 2;
          const labelRadius = outerRadius + 20;
          const x = centerX + labelRadius * Math.cos(angle);
          const y = centerY + labelRadius * Math.sin(angle);

          return (
            <motion.text
              key={index}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="#374151"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: animationDuration + 0.2 + index * 0.05 }}
            >
              {item.label}
            </motion.text>
          );
        })}
      </svg>
    </div>
  );
};

/* ——— demo ——— */
const demoData22 = [
  { label: 'A', value: 30, color: '#ef4444' },
  { label: 'B', value: 50, color: '#f97316' },
  { label: 'C', value: 80, color: '#10b981' },
  { label: 'D', value: 60, color: '#3b82f6' },
  { label: 'E', value: 40, color: '#8b5cf6' }
];

render(<RadialBarChart data={demoData22} />);
