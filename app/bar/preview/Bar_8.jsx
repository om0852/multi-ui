/* ==== paste into react‑live (scope: { React, motion }) ==== */

const OverlapBars = ({ data ,...props}) => {
    const ref = React.useRef(null)
    const [{ w, h }, setDim] = React.useState({ w: 700, h: 400 })
    const fSize = v => Math.min(w * 0.02, 12)
  
    /* measure */
    React.useEffect(() => {
      const onResize = () => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect()
          setDim({ w: width, h: Math.max(300, width * 0.6) })
        }
      }
      onResize()
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])
  
    const max = Math.max(...data.flatMap(d => [d.groupA, d.groupB]))
    const M = { t: .05*h, r: .05*w, b: .15*h, l: .1*w }
  
    const y = v => h - M.b - (v / max) * (h - M.t - M.b)
    const avail = w - M.l - M.r
    const space = Math.min(avail / (data.length * 2), 40)
    const bw = Math.min(space * .8, 20)
  
    const [tip, setTip] = React.useState(null)
  
    return (
      <div ref={ref} className="w-full h-full min-w-[300px]" {...props}>
        <svg className="w-full h-full" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
          {/* axes */}
          <line x1={M.l} y1={h-M.b} x2={w-M.r} y2={h-M.b} stroke="#000"/>
          <line x1={M.l} y1={M.t}   x2={M.l}   y2={h-M.b} stroke="#000"/>
  
          {/* y labels */}
          {Array.from({length:6}).map((_,i)=>{
            const v = Math.round(max/5*i), yy = y(v)
            return <text key={i} x={M.l-5} y={yy} textAnchor="end" fontSize={fSize()} dy=".3em">{v}</text>
          })}
  
          {/* x labels */}
          {data.map((d,i)=>{
            const x = M.l + i*space*2 + space
            return (
              <text key={i} x={x} y={h-M.b+fSize()*1.5}
                    fontSize={fSize()} textAnchor="middle"
                    transform={`rotate(-45 ${x} ${h-M.b+fSize()*1.5})`}>
                {d.label}
              </text>
            )
          })}
  
          {/* bars */}
          {data.map((d,i)=>{
            const x0 = M.l + i*space*2
            const xA = x0 + space - bw/2
            const xB = x0 + space + bw/2
            return (
              <g key={i}>
                {/* group A */}
                <motion.rect
                  x={xA} y={y(d.groupA)} width={bw}
                  height={h-M.b-y(d.groupA)} fill="#2563eb" opacity={.8}
                  whileHover={{opacity:1,scale:1.1}} transition={{duration:.2}}
                  onMouseEnter={()=>setTip({v:d.groupA,x:xA+bw/2,y:y(d.groupA)})}
                  onMouseLeave={()=>setTip(null)}
                />
                {/* group B */}
                <motion.rect
                  x={xB} y={y(d.groupB)} width={bw}
                  height={h-M.b-y(d.groupB)} fill="#60a5fa" opacity={.8}
                  whileHover={{opacity:1,scale:1.1}} transition={{duration:.2}}
                  onMouseEnter={()=>setTip({v:d.groupB,x:xB+bw/2,y:y(d.groupB)})}
                  onMouseLeave={()=>setTip(null)}
                />
              </g>
            )
          })}
  
          {/* tooltip */}
          {tip && (
            <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.2}}>
              <rect x={tip.x-25} y={tip.y-25} width={50} height={20} rx={4} fill="rgba(0,0,0,.8)"/>
              <text x={tip.x} y={tip.y-12} textAnchor="middle" fontSize={fSize()} fill="#fff">{tip.v}</text>
            </motion.g>
          )}
  
          {/* legend */}
          <g transform={`translate(${M.l},${M.t-10})`}>
            <rect width={12} height={12} fill="#2563eb" opacity={.8}/>
            <text x={16} y={10} fontSize={fSize()} >Group A</text>
            <rect x={70} width={12} height={12} fill="#60a5fa" opacity={.8}/>
            <text x={86} y={10} fontSize={fSize()} >Group B</text>
          </g>
        </svg>
      </div>
    )
  }
  
  /* --- demo --- */
  const demo = [
    { label: "Jan", groupA: 100, groupB: 80 },
    { label: "Feb", groupA: 120, groupB: 100},
    { label: "Mar", groupA: 140, groupB: 120},
    { label: "Apr", groupA:  90, groupB: 110},
    { label: "May", groupA: 160, groupB: 140},
    { label: "Jun", groupA: 130, groupB: 150},
  ]
  
  render(<OverlapBars data={demo} className={"bg-white"} />)
  