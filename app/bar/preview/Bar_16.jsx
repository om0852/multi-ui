/* ==== paste in React Live (scope: { React, motion }) ==== */


const PieChart = ({
    data,
    width = 400,
    height = 400,
    className = '',
    ...props            /* ← forward any other props */
  }) => {
    const [hover, setHover] = useState(null)
  
    /* ---- geometry helpers ---- */
    const total  = data.reduce((s, d) => s + d.value, 0)
    const ctr    = { x: width / 2, y: height / 2 }
    const R      = Math.min(width, height) / 2 - 40   // leave room for labels
    const deg2rad = d => (d - 90) * (Math.PI / 180)
  
    let start = 0
    const slices = data.map(d => {
      const pct   = d.value / total
      const angle = pct * 360
      const end   = start + angle
  
      const p1 = { x: ctr.x + R * Math.cos(deg2rad(start)),
                   y: ctr.y + R * Math.sin(deg2rad(start)) }
      const p2 = { x: ctr.x + R * Math.cos(deg2rad(end)),
                   y: ctr.y + R * Math.sin(deg2rad(end)) }
  
      const large = angle > 180 ? 1 : 0
      const path  = `M${ctr.x},${ctr.y} L${p1.x},${p1.y}
                     A${R},${R} 0 ${large} 1 ${p2.x},${p2.y} Z`
  
      // label position
      const midRad = deg2rad(start + angle / 2)
      const label  = {
        x: ctr.x + (R + 25) * Math.cos(midRad),
        y: ctr.y + (R + 25) * Math.sin(midRad),
      }
  
      start = end
      return { ...d, path, pct, ...label }
    })
  
    return (
      <div
        className={`relative ${className}`}   /* merge external className */
        style={{ width, height }}
        {...props}                            /* ← spread the rest */
      >
        <svg width={width} height={height}>
          {slices.map(s => (
            <g key={s.id}>
              <motion.path
                d={s.path}
                fill={s.color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: hover === s.id ? 1.1 : 1
                }}
                transition={{ duration: .45, type: 'spring', stiffness: 280 }}
                whileHover={{ scale: 1.15 }}
                onMouseEnter={() => setHover(s.id)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: 'pointer', transformOrigin: `${ctr.x}px ${ctr.y}px` }}
              />
              <text
                x={s.x} y={s.y}
                fontSize="11" textAnchor="middle" fill="#374151"
                style={{ fontWeight: 600, opacity: hover === s.id ? 1 : .8 }}
              >
                {s.label} ({Math.round(s.pct * 100)}%)
              </text>
            </g>
          ))}
        </svg>
  
        {/* legend */}
        <div className="absolute top-2 left-2 rounded-md bg-white/80 backdrop-blur-sm p-3">
          {data.map(d => (
            <div key={d.id} className="flex items-center gap-2 mb-1 last:mb-0">
              <span className="inline-block w-4 h-4 rounded" style={{ background: d.color }} />
              <span className="text-xs text-gray-700">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  /* ---- demo ---- */
  const sample = [
    { id:'a', value:40, color:'#f87171', label:'Apple'  },
    { id:'b', value:30, color:'#fbbf24', label:'Banana' },
    { id:'c', value:20, color:'#34d399', label:'Cherry' },
    { id:'d', value:10, color:'#60a5fa', label:'Date'   },
  ]
  
  render(<PieChart data={sample} width={320} height={320} className="bg-white" />)
  