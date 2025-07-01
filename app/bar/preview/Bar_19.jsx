
const LineGraphDesign3 = ({
    data,
    width = 600,
    height = 400,
    lineColor = "#EF4444",
    gradientStart = "#FEE2E2",
    gradientEnd = "#EF4444",
    dotColor = "#DC2626",
    className = "",
    ...props
  }) => {
    const pad = 50
    const chartW = width - pad * 2
    const chartH = height - pad * 2
    const xVals = data.map(d => d.x)
    const yVals = data.map(d => d.y)
    const minY = Math.min(...yVals)
    const maxY = Math.max(...yVals)
    const xScale = x => pad + (xVals.indexOf(x) / (xVals.length - 1)) * chartW
    const yScale = y => pad + chartH - ((y - minY) / (maxY - minY)) * chartH
    const points = data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(" L ")
  
    return (
      <div className={`relative ${className}`} style={{ width, height }} {...props}>
        <svg width={width} height={height}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width={width} height={height} fill="url(#lineGradient)" opacity="0.2" />
          <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="#E5E7EB" strokeWidth="1" />
          <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="#E5E7EB" strokeWidth="1" />
          <motion.path
            d={`M ${points}`}
            fill="none"
            stroke={lineColor}
            strokeWidth="3"
            className="line-path"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          {data.map((d, i) => (
            <motion.circle
              key={i}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              r="6"
              fill={dotColor}
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2, type: "spring", stiffness: 300 }}
            />
          ))}
          {data.map((d, i) => (
            <motion.text
              key={`x-${i}`}
              x={xScale(d.x)}
              y={height - pad + 25}
              textAnchor="middle"
              className="text-xs fill-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {d.x}
            </motion.text>
          ))}
          {[...new Set(yVals.filter((_, i) => i % 2 === 0))].map((y, i) => (
            <motion.text
              key={`y-${i}`}
              x={pad - 15}
              y={yScale(y)}
              textAnchor="end"
              dominantBaseline="middle"
              className="text-xs fill-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {y}
            </motion.text>
          ))}
        </svg>
      </div>
    )
  }
  
  const example = [
    { x: "Mon", y: 14 },
    { x: "Tue", y: 22 },
    { x: "Wed", y: 18 },
    { x: "Thu", y: 30 },
    { x: "Fri", y: 24 },
    { x: "Sat", y: 28 },
    { x: "Sun", y: 20 }
  ]
  
  render(<LineGraphDesign3 data={example} width={650} height={420} className="rounded-lg bg-white" />)
  