/* ==== paste into react‑live (scope: { React, motion }) ==== */

const ThreeDBar = ({ data, className = '' }) => {
    const ref = React.useRef(null)
    const [dim, setDim] = React.useState({ w: 0, h: 0 })
    const [hov, setHov] = React.useState(null)
  
    /* measure container */
    React.useEffect(() => {
      const measure = () => {
        if (ref.current) {
          const { width, height } = ref.current.getBoundingClientRect()
          setDim({ w: width || 600, h: height || 400 })
        }
      }
      measure()
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }, [])
  
    const { w, h } = dim
    if (!w) return <div ref={ref} className="w-full h-full" />   /* wait until measured */
  
    /* scales & dims */
    const max = Math.max(...data.map(d => d.value))
    const M  = { t: .1*h, r: .1*w, b: .15*h, l: .15*w }
    const cw = w - M.l - M.r
    const ch = h - M.t - M.b
    const bw = Math.min(cw / (data.length*2), 50)
    const gap= bw*1.6
  
    const y = v => h - M.b - (v / max) * ch
    const x = i => M.l + i * gap
  
    return (
      <div ref={ref} className={`w-full h-full ${className}`}>
        <svg className="w-full h-full" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
          {/* axes */}
          <line x1={M.l} y1={M.t} x2={M.l} y2={h-M.b} stroke="#000" strokeWidth={2}/>
          <line x1={M.l} y1={h-M.b} x2={w-M.r} y2={h-M.b} stroke="#000" strokeWidth={2}/>
  
          {/* grid / y labels */}
          {Array.from({length:5}).map((_,i)=>{
            const v = max/5*(i+1), yy = y(v)
            return (
              <g key={i}>
                <line x1={M.l} y1={yy} x2={w-M.r} y2={yy} stroke="#ccc" strokeDasharray="4 2"/>
                <text x={M.l-10} y={yy} fontSize={Math.min(w*.02,12)} textAnchor="end">{v}</text>
              </g>
            )
          })}
  
          {/* bars */}
          {data.map((d,i)=>{
            const bh = (d.value/max)*ch
            const xpos = x(i)
            const ypos = h - M.b - bh
            const on   = hov===i
            return (
              <motion.g key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}>
                <motion.rect
                  x={xpos} y={ypos} width={bw} height={bh}
                  fill="#2563eb"
                  style={{ transformOrigin:`${xpos+bw/2}px ${h-M.b}px`,
                           transform:on?"perspective(300px) rotateX(-30deg) rotateY(30deg)":"perspective(300px)" }}
                  initial={{ scaleY:0 }} animate={{ scaleY:1 }} transition={{ duration:.4 }}/>
                {on && (
                  <motion.text
                    x={xpos+bw/2} y={ypos-10}
                    fontSize={Math.min(w*.02,12)} textAnchor="middle" fill="#000"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}}>
                    {d.value}
                  </motion.text>
                )}
              </motion.g>
            )
          })}
  
          {/* x labels */}
          {data.map((d,i)=>(
            <text key={i} x={x(i)+bw/2} y={h-M.b+20} textAnchor="middle"
                  fontSize={Math.min(w*.02,12)}>{d.month}</text>
          ))}
        </svg>
      </div>
    )
  }
  
  /* ----- demo ----- */
  const demo = [
    { month:'Jan', value:200 },
    { month:'Feb', value:300 },
    { month:'Mar', value:250 },
    { month:'Apr', value:100 },
    { month:'May', value:400 },
    { month:'Jun', value:300 },
  ]
  
  render(<ThreeDBar data={demo} className="bg-white"/>)
  