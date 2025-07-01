
const LineGraphAlt = ({
    data,
    width = 600,
    height = 400,
    lineColor = "#10B981",
    dotColor = "#059669",
    backgroundColor = "#F0FDF4",
    className = "",
    ...props
  }) => {
    const [len, setLen] = useState(0)
    const pad = 50
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
      const p = document.querySelector(".line-path-alt")
      if (p) setLen(p.getTotalLength())
    }, [data])
    return (
      <div
        className={`relative ${className}`}
        style={{ width, height, backgroundColor }}
        {...props}
      >
        <svg width={width} height={height}>
          <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="#D1FAE5" strokeWidth="1" />
          <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="#D1FAE5" strokeWidth="1" />
          <motion.path
            d={pathD}
            className="line-path-alt"
            fill="none"
            stroke={lineColor}
            strokeWidth={3}
            strokeDasharray={len}
            strokeDashoffset={len}
            initial={{ strokeDashoffset: len }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          {data.map((d, i) => (
            <motion.circle
              key={i}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              r={6}
              fill={dotColor}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatType: "loop" }}
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
  
  const sample = [
    { x: "Jan", y: 10 },
    { x: "Feb", y: 25 },
    { x: "Mar", y: 15 },
    { x: "Apr", y: 30 },
    { x: "May", y: 22 },
    { x: "Jun", y: 33 }
  ]
  
  render(
    <LineGraphAlt
      data={sample}
      width={650}
      height={420}
      className="rounded-md"
    />
  )
  