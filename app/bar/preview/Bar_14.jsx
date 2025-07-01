/* ==== Paste this in React Live (scope: { React }) ==== */

const BoxPlot = ({ data, width = 400, height = 200 ,...props}) => {
    const sorted = [...data].sort((a, b) => a - b)
    const q1 = sorted[Math.floor(sorted.length / 4)]
    const median = sorted[Math.floor(sorted.length / 2)]
    const q3 = sorted[Math.floor(3 * sorted.length / 4)]
    const iqr = q3 - q1
    const min = Math.min(...data)
    const max = Math.max(...data)
    const lw = Math.max(min, q1 - 1.5 * iqr)
    const uw = Math.min(max, q3 + 1.5 * iqr)
    const outliers = sorted.filter(d => d < lw || d > uw)
  
    const pad = 20
    const chartW = width - 2 * pad
    const chartH = height - 2 * pad
    const scaleX = v => pad + ((v - min) / (max - min)) * chartW
    const boxH = chartH / 3
  
    return (
      <svg viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }} {...props}>
        {/* IQR Box */}
        <rect x={scaleX(q1)} y={pad + boxH} width={scaleX(q3) - scaleX(q1)} height={boxH} fill="skyblue" stroke="black" />
        {/* Median Line */}
        <line x1={scaleX(median)} y1={pad + boxH} x2={scaleX(median)} y2={pad + 2 * boxH} stroke="black" strokeWidth={2} />
        {/* Whiskers */}
        <line x1={scaleX(lw)} x2={scaleX(q1)} y1={pad + boxH * 1.5} y2={pad + boxH * 1.5} stroke="black" />
        <line x1={scaleX(uw)} x2={scaleX(q3)} y1={pad + boxH * 1.5} y2={pad + boxH * 1.5} stroke="black" />
        {/* Outliers */}
        {outliers.map((v, i) => (
          <circle key={i} cx={scaleX(v)} cy={pad + boxH * 1.5} r="3" fill="red" stroke="black" />
        ))}
        {/* Labels */}
        {[{ val: lw }, { val: q1 }, { val: median }, { val: q3 }, { val: uw }].map(({ val }, i) => (
          <text
            key={i}
            x={scaleX(val)}
            y={pad + boxH * (i === 1 || i === 3 ? 0.8 : i === 2 ? 2.4 : 1.2)}
            fontSize="10"
            textAnchor="middle"
          >
            {val.toFixed(2)}
          </text>
        ))}
      </svg>
    )
  }
  
  // Example
  const data = [12, 15, 14, 10, 13, 18, 25, 23, 22, 30, 35, 28, 27, 31, 32, 40, 42, 20, 10]
  
  render(<BoxPlot data={data} width={500} height={250} className="bg-white"/>)
  