/* ==== Paste this in React Live (scope: { React }) ==== */

const Histogram = ({
    data,
    bins,
    width = 400,
    height = 300,
    className = "",
  }) => {
    const min = Math.min(...data)
    const max = Math.max(...data)
    const binWidth = (max - min) / bins
  
    const binCounts = Array(bins).fill(0)
    data.forEach((v) => {
      const idx = Math.min(Math.floor((v - min) / binWidth), bins - 1)
      binCounts[idx]++
    })
  
    const barW = width / bins
    const maxCount = Math.max(...binCounts)
  
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className={`w-full ${className}`} style={{ overflow: "visible" }}>
        {binCounts.map((count, i) => {
          const h = (count / maxCount) * height
          const x = i * barW
          const y = height - h
  
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barW - 1}
                height={h}
                fill="#76c7c0"
                stroke="#4f7c7a"
                strokeWidth={1}
              />
              <text
                x={x + barW / 2}
                y={height - 5}
                textAnchor="middle"
                fontSize="10"
                fill="#000"
              >
                {Math.round(min + i * binWidth)}
              </text>
            </g>
          )
        })}
      </svg>
    )
  }
  
  // Example
  const exampleData = [
    12, 14, 15, 18, 19, 20, 21, 22, 23, 24,
    30, 33, 34, 35, 37, 38, 39, 40, 42, 45,
    48, 50, 55, 57, 59, 60, 62, 63, 65, 68,
  ]
  
  render(<Histogram data={exampleData} bins={5} width={500} height={300} className="w-full bg-white" />)
  