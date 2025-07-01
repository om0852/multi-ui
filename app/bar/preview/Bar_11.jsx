/* ==== paste into react-live (scope: { React, motion }) ==== */

const AreaChart = ({ data, config, xKey, yKeys, className }) => {
    const [hover, setHover] = React.useState(null)
  
    const W = 600, H = 400
    const M = { t: 20, r: 20, b: 50, l: 50 }
    const max = Math.max(...data.flatMap(d => yKeys.map(k => +d[k]||0)))
  
    const xs = i => M.l + i * ((W - M.l - M.r) / (data.length - 1))
    const ys = v => H - M.b - (v / max) * (H - M.t - M.b)
  
    return (
      <svg className={`w-full ${className}`} viewBox={`0 0 ${W} ${H}`}>
        {/* axes */}
        <line x1={M.l} y1={H-M.b} x2={W-M.r} y2={H-M.b} stroke="#000"/>
        <line x1={M.l} y1={M.t}   x2={M.l}   y2={H-M.b} stroke="#000"/>
  
        {/* x labels */}
        {data.map((d,i)=>(
          <text key={i} x={xs(i)} y={H-M.b+20} fontSize="12" textAnchor="middle">
            {d[xKey]}
          </text>
        ))}
  
        {/* y grid + labels */}
        {Array.from({length:5}).map((_,i)=>{
          const v = max/5*(i+1), y = ys(v)
          return (
            <g key={i}>
              <line x1={M.l} y1={y} x2={W-M.r} y2={y} stroke="#ccc" strokeDasharray="4 2"/>
              <text x={M.l-10} y={y+5} fontSize="12" textAnchor="end">{Math.round(v)}</text>
            </g>
          )
        })}
  
        {/* areas + lines */}
        {yKeys.map(k=>(
          <g key={k}>
            {/* filled area */}
            <motion.path
              d={`M${data.map((d,i)=>`${xs(i)},${ys(+d[k]||0)}`).join(' ')}
                  L${xs(data.length-1)},${H-M.b}
                  L${xs(0)},${H-M.b} Z`}
              fill={config[k]?.color||"#000"} fillOpacity="0.3"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .5 }}
            />
            {/* outline line */}
            <motion.path
              d={`M${data.map((d,i)=>`${xs(i)},${ys(+d[k]||0)}`).join(' L')}`}
              fill="none" stroke={config[k]?.color||"#000"} strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .5 }}
            />
          </g>
        ))}
  
        {/* points + tooltips */}
        {yKeys.map(k=>data.map((d,i)=>{
          const cx=xs(i), cy=ys(+d[k]||0)
          const on = hover?.k===k && hover?.i===i
          return (
            <g key={`${k}-${i}`} onMouseEnter={()=>setHover({k,i})} onMouseLeave={()=>setHover(null)}>
              <motion.circle
                cx={cx} cy={cy} r={on?6:4}
                fill={on?"#f00":(config[k]?.color||"#000")}
                initial={{scale:0}} animate={{scale:1}} transition={{duration:.3}}
              />
              {on && (
                <motion.text
                  x={cx} y={cy-20} textAnchor="middle"
                  fontSize="12" fill="#000"
                  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.2}}
                >
                  {`${config[k]?.label}: ${d[k]}`}
                </motion.text>
              )}
            </g>
          )
        }))}
      </svg>
    )
  }
  
  /* --- demo --- */
  const exampleData = [
    { month: "Jan", sales: 100, car: 200 },
    { month: "Feb", sales: 200, car: 300 },
    { month: "Mar", sales: 150, car: 400 },
    { month: "Apr", sales: 300, car: 300 },
    { month: "May", sales: 250, car: 500 },
  ]
  
  const exampleConfig = {
    sales: { color: "#2563eb", label: "Sales" },
    car:   { color: "#34d399", label: "Car" }
  }
  
  render(<AreaChart data={exampleData} config={exampleConfig} xKey="month" yKeys={["sales","car"]} className={"bg-white"} />)
  