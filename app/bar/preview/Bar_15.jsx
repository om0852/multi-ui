/* ==== Paste this in React Live (scope: { React }) ==== */

const PieChart = ({ data, width = 300, height = 300,...props }) => {
    const [hovered, setHovered] = useState(null);
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const center = { x: width / 2, y: height / 2 };
    const radius = Math.min(width, height) / 2 - 20;
  
    let currentAngle = 0;
  
    const slices = data.map((d) => {
      const pct = d.value / total;
      const angle = pct * 360;
      const start = currentAngle;
      const end = currentAngle + angle;
      const rad = deg => (deg - 90) * (Math.PI / 180);
      const x1 = center.x + radius * Math.cos(rad(start));
      const y1 = center.y + radius * Math.sin(rad(start));
      const x2 = center.x + radius * Math.cos(rad(end));
      const y2 = center.y + radius * Math.sin(rad(end));
      const largeArc = angle > 180 ? 1 : 0;
  
      const labelAngle = rad(start + angle / 2);
      const labelX = center.x + (radius + 20) * Math.cos(labelAngle);
      const labelY = center.y + (radius + 20) * Math.sin(labelAngle);
  
      currentAngle += angle;
  
      return {
        ...d,
        path: `M${center.x},${center.y} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`,
        labelX,
        labelY,
        pct,
      };
    });
  
    return (
      <svg width={width} height={height} {...props}>
        {slices.map((s, i) => (
          <g key={i}>
            <path
              d={s.path}
              fill={s.color}
              stroke="#fff"
              strokeWidth="1"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transformOrigin: `${center.x}px ${center.y}px`,
                transform: hovered === s.id ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
            />
            <text
              x={s.labelX}
              y={s.labelY}
              fontSize="10"
              textAnchor="middle"
              fill="#333"
            >
              {s.label} ({Math.round(s.pct * 100)}%)
            </text>
          </g>
        ))}
      </svg>
    );
  };
  
  // Example usage
  const sampleData = [
    { id: "1", value: 40, label: "Apple", color: "#f87171" },
    { id: "2", value: 30, label: "Banana", color: "#fbbf24" },
    { id: "3", value: 20, label: "Cherry", color: "#34d399" },
    { id: "4", value: 10, label: "Date", color: "#60a5fa" },
  ];
  
  render(<PieChart data={sampleData} width={320} height={320} className="bg-white" />);
  