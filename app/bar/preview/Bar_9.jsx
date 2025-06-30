/* ==== paste into react‑live (scope: { React, motion }) ==== */

const InteractiveBarChart = ({ data ,...props}) => {
    const w = 700, h = 400
    const M = { t: 20, r: 20, b: 100, l: 80 }
  
    const max = Math.max(...data.map(d => d.value))
    const y = v => h - M.b - (v / max) * (h - M.t - M.b)
    const bw = (w - M.l - M.r) / (data.length * 2)
  
    const [tip, setTip] = React.useState(null)
  
    return (
      <div className="w-full max-w-[700px] mx-auto pt-10" {...props}>
        <svg className="w-full" viewBox={`0 0 ${w} ${h}`}>
          {/* axes */}
          <line x1={M.l} y1={h-M.b} x2={w-M.r} y2={h-M.b} stroke="#000" />
          <line x1={M.l} y1={M.t}   x2={M.l}   y2={h-M.b} stroke="#000" />
  
          {/* y labels */}
          {Array.from({length:5}).map((_,i)=>{
            const v = Math.round((max / 5) * (i + 1))
            return <text key={i} x={M.l-10} y={y(v)} fontSize="12" textAnchor="end">{v}</text>
          })}
  
          {/* bars */}
          {data.map((d,i)=>{
            const x = M.l + i * bw * 2
            return (
              <motion.g
                key={d.label}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.rect
                  x={x} y={y(d.value)} width={bw}
                  height={h - M.b - y(d.value)}
                  fill="#2563eb"
                  onMouseEnter={() => setTip({ x: x + bw/2, y: y(d.value), v: d.value })}
                  onMouseLeave={() => setTip(null)}
                />
              </motion.g>
            )
          })}
  
          {/* x labels */}
          {data.map((d,i)=>{
            const x = M.l + i * bw * 2 + bw / 2
            return (
              <text key={d.label} x={x} y={h-M.b+15} textAnchor="middle" fontSize="12">
                {d.label}
              </text>
            )
          })}
  
          {/* tooltip */}
          {tip && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
              <rect x={tip.x - 20} y={tip.y - 30} width={40} height={20} rx={5} fill="rgba(0,0,0,0.7)" />
              <text x={tip.x} y={tip.y - 15} textAnchor="middle" fontSize="12" fill="#fff">
                {tip.v}
              </text>
            </motion.g>
          )}
        </svg>
      </div>
    )
  }
  
  /* --- demo --- */
  const exampleData = [
    { label: "Jan", value: 120 },
    { label: "Feb", value: 200 },
    { label: "Mar", value: 150 },
    { label: "Apr", value: 250 },
    { label: "May", value: 180 },
    { label: "Jun", value: 300 },
    { label: "Jul", value: 220 },
  ]
  
  render(<InteractiveBarChart data={exampleData} className={"bg-white"} />)
  