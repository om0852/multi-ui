/* ==== paste this in React Live (scope: { React, motion }) ==== */

const Sparkline = ({
    data,
    color = "#2563eb",
    width = 100,
    height = 30,
    strokeWidth = 2,
    className = "",
  }) => {
    const [hoverIdx, setHoverIdx] = React.useState(null)
  
    const max = Math.max(...data), min = Math.min(...data)
    const xs = i => (i / (data.length - 1)) * width
    const ys = v => height - ((v - min) / (max - min)) * height
  
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className={`w-full ${className}`} style={{ overflow: "visible" }}>
        {/* Path */}
        <motion.path
          d={`M${data.map((v,i)=>`${xs(i)},${ys(v)}`).join(" L")}`}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
        />
  
        {/* Points + Tooltip */}
        {data.map((v,i)=>(
          <g key={i} onMouseEnter={()=>setHoverIdx(i)} onMouseLeave={()=>setHoverIdx(null)}>
            <motion.circle
              cx={xs(i)} cy={ys(v)}
              r={hoverIdx === i ? 4 : 2}
              fill={color}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}
            />
            {hoverIdx === i && (
              <motion.text
                x={xs(i)} y={ys(v) - 10}
                fontSize="10" textAnchor="middle" fill="#000"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
              >
                {v}
              </motion.text>
            )}
          </g>
        ))}
      </svg>
    )
  }
  
  // Example
  const exampleData = [10, 15, 8, 12, 20, 18, 25]
  
  render(<Sparkline data={exampleData} color="#34d399" width={200} height={50} strokeWidth={2} className="bg-white" />)
  