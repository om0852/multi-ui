/* ===== paste into react‑live (scope: { React, motion }) ===== */

const AnimatedBarChart = ({ data, cfg, className='' }) => {
    const [hov, setHov] = React.useState(null)
  
    /* dims */
    const W = 600, H = 400, M = {t:20,r:20,b:50,l:50}
    const keys = Object.keys(cfg)
    const max = Math.max(...data.flatMap(d => keys.map(k => +d[k]||0)))
    const xs = i => M.l + i * ((W - M.l - M.r) / data.length)
    const ys = v => H - M.b - (v / max) * (H - M.t - M.b)
    const bw = (W - M.l - M.r) / (data.length * keys.length)
  
    return (
      <svg className={`w-full ${className}`} viewBox={`0 0 ${W} ${H}`}>
        {/* axes */}
        <line x1={M.l} y1={H-M.b} x2={W-M.r} y2={H-M.b} stroke="#000"/>
        <line x1={M.l} y1={M.t}  x2={M.l}   y2={H-M.b} stroke="#000"/>
  
        {/* x labels */}
        {data.map((d,i)=>(
          <text key={i} x={xs(i)+keys.length*bw/2} y={H-M.b+20} fontSize="12" textAnchor="middle">
            {d.month}
          </text>
        ))}
  
        {/* grid + y labels */}
        {Array.from({length:5}).map((_,i)=>{
          const v = max/5*(i+1), y = ys(v)
          return (
            <g key={i}>
              <line x1={M.l} y1={y} x2={W-M.r} y2={y} stroke="#ccc" strokeDasharray="4 2"/>
              <text x={M.l-10} y={y+5} fontSize="12" textAnchor="end">{Math.round(v)}</text>
            </g>
          )
        })}
  
        {/* bars */}
        {data.map((d,i)=>
          keys.map((k,ki)=>{
            const val = +d[k]||0, id=`${i}-${k}`, on=hov?.id===id
            const x = xs(i)+ki*bw, barH=H-M.b-ys(val)
            return (
              <g key={id}
                 onMouseEnter={()=>setHov({id,label:cfg[k].label,x:x+(bw-4)/2,y:ys(val)-10})}
                 onMouseLeave={()=>setHov(null)}>
                <motion.rect
                  x={x} y={ys(val)} width={bw-4} height={barH}
                  fill={cfg[k].color}
                  initial={{scaleY:0}} animate={{scaleY:1}}
                  transition={{duration:.5}}
                  transform={`translate(0 ${ys(val)+barH}) scaleY(-1)`}/>
              </g>
            )
          })
        )}
  
        {/* tooltip */}
        {hov && (
          <motion.text
            x={hov.x} y={hov.y} textAnchor="middle" fontSize="12" fill="#000"
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}}>
            {hov.label}
          </motion.text>
        )}
      </svg>
    )
  }
  
  /* ——— demo ——— */
  const demoData = [
    {month:'Jan', desktop:186, mobile:80},
    {month:'Feb', desktop:305, mobile:200},
    {month:'Mar', desktop:237, mobile:120},
    {month:'Apr', desktop:73 , mobile:190},
    {month:'May', desktop:209, mobile:130},
    {month:'Jun', desktop:214, mobile:140},
  ]
  const demoCfg = {
    desktop:{label:'Desktop', color:'#2563eb'},
    mobile :{label:'Mobile' , color:'#60a5fa'}
  }
  
  render(<AnimatedBarChart data={demoData} cfg={demoCfg} className="bg-white"/>)
  