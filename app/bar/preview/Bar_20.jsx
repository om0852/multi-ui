
function LineGraphDesign4({
    data,
    width = 600,
    height = 400,
    lineColor = '#6366F1',
    dotColor = '#4F46E5',
    backgroundColor = '#EEF2FF',
    ...props
  }) {
    const padding = 50
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2
    const xValues = data.map(d => d.x)
    const yValues = data.map(d => d.y)
  
    const xScale = x => {
      const i = xValues.indexOf(x)
      return (i / (xValues.length - 1)) * chartWidth + padding
    }
  
    const yScale = y => {
      const min = Math.min(...yValues)
      const max = Math.max(...yValues)
      return chartHeight - ((y - min) / (max - min)) * chartHeight + padding
    }
  
    const points = data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(' ')
  
    useEffect(() => {
      const p = document.querySelector('.line-path-design4')
      if (p) {
        const len = p.getTotalLength()
        p.style.strokeDasharray = `${len} ${len}`
      }
    }, [data])
  
    return (
      <div {...props} className="relative" style={{ width, height, backgroundColor }}>
        <svg width={width} height={height}>
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1={padding}
              y1={padding + (chartHeight / 4) * i}
              x2={width - padding}
              y2={padding + (chartHeight / 4) * i}
              stroke="#E0E7FF"
              strokeWidth=".5"
            />
          ))}
  
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#CBD5E1" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#CBD5E1" />
  
          <motion.path
            d={`M ${points}`}
            fill="none"
            stroke={lineColor}
            strokeWidth="3"
            className="line-path-design4"
            initial={{ strokeDashoffset: chartWidth }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
  
          {data.map((d, i) => (
            <motion.circle
              key={i}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              r="5"
              fill={dotColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
            />
          ))}
  
          {data.map((d, i) => (
            <motion.text
              key={i}
              x={xScale(d.x)}
              y={height - padding + 20}
              textAnchor="middle"
              className="text-sm fill-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {d.x}
            </motion.text>
          ))}
  
          {yValues.filter((_, i) => i % 2 === 0).map((y, i) => (
            <motion.text
              key={i}
              x={padding - 15}
              y={yScale(y)}
              textAnchor="end"
              dominantBaseline="middle"
              className="text-sm fill-gray-600"
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
    { x: 'Mon', y: 120 },
    { x: 'Tue', y: 180 },
    { x: 'Wed', y: 100 },
    { x: 'Thu', y: 220 },
    { x: 'Fri', y: 160 },
    { x: 'Sat', y: 240 },
    { x: 'Sun', y: 190 }
  ]
  
  render(<LineGraphDesign4 data={sample} />)
  