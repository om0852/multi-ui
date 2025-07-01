
const LineGraph = ({
    data,
    width = 600,
    height = 400,
    lineColor = "#3B82F6",
    dotColor = "#2563EB",
    className = "",
    ...props
  }) => {
    const [len, setLen] = useState(0)
    const pad = 40
    const chartW = width - pad * 2
    const chartH = height - pad * 2
    const xVals = data.map(d => d.x)
    const yVals = data.map(d => d.y)
    const minY = Math.min(...yVals)
    const maxY = Math.max(...yVals)
    const xScale = x => pad + (xVals.indexOf(x) / (xVals.length - 1)) * chartW
    const yScale = y => pad + chartH - ((y - minY) / (maxY - minY)) * chartH
    const pathD = `M ${data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(" L ")}`
    useEffect(() => {
      const p = document.querySelector(".line-path")
      if (p) setLen(p.getTotalLength())
    }, [data])
    return (
      <div className={`relative ${className}`} style={{ width, height }} {...props}>
        <svg width={width} height={height}>
          <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="#E5E7EB" />
          <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="#E5E7EB" />
          <motion.path
            d={pathD}
            className="line-path"
            fill="none"
            stroke={lineColor}
            strokeWidth={2}
            strokeDasharray={len}
            strokeDashoffset={len}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {data.map((d, i) => (
            <motion.circle
              key={i}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              r={4}
              fill={dotColor}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
          {data.map((d, i) => (
            <text
              key={`x-${i}`}
              x={xScale(d.x)}
              y={height - pad + 18}
              textAnchor="middle"
              fontSize="11"
              fill="#6B7280"
            >
              {d.x}
            </text>
          ))}
          {[...new Set(yVals.sort((a, b) => b - a).filter((_, i) => i % 2 === 0))].map((y, i) => (
            <text
              key={`y-${i}`}
              x={pad - 8}
              y={yScale(y)}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize="11"
              fill="#6B7280"
            >
              {y}
            </text>
          ))}
        </svg>
      </div>
    )
  }
  
  const sampleData = [
    { x: "Jan", y: 12 },
    { x: "Feb", y: 28 },
    { x: "Mar", y: 18 },
    { x: "Apr", y: 35 },
    { x: "May", y: 30 },
    { x: "Jun", y: 40 }
  ]
  
  render(
    <LineGraph
      data={sampleData}
      width={650}
      height={420}
      className="bg-white rounded-lg shadow"
      lineColor="#10B981"
      dotColor="#059669"
    />
  )
  