/* ───── NO imports needed for react‑live ───── */

const Bar = ({data, cfg, className=''}) => {
    const [hov, setHov] = React.useState(null)
  
    /* dims & helpers */
    const w = 600, h = 400
    const m = {t:20,r:20,b:50,l:50}
    const keys = Object.keys(cfg)
    const max = Math.max(...data.flatMap(d => keys.map(k => +d[k]||0)))
    const x = i => m.l + i * ((w - m.l - m.r) / data.length)
    const y = v => h - m.b - (v / max) * (h - m.t - m.b)
    const bw = (w - m.l - m.r) / (data.length * keys.length)
  
    return (
      <svg className={`w-full ${className}`} viewBox={`0 0 ${w} ${h}`}>
        {/* axes */}
        <line x1={m.l} y1={h-m.b} x2={w-m.r} y2={h-m.b} stroke="#000"/>
        <line x1={m.l} y1={m.t} x2={m.l} y2={h-m.b} stroke="#000"/>
  
        {/* x labels */}
        {data.map((d,i)=>(
          <text key={i} x={x(i)+keys.length*bw/2} y={h-m.b+20} fontSize="12" textAnchor="middle">
            {d.month}
          </text>
        ))}
  
        {/* grid + y labels */}
        {Array.from({length:5}).map((_,i)=>{
          const v = max/5*(i+1), yy = y(v)
          return (
            <g key={i}>
              <line x1={m.l} y1={yy} x2={w-m.r} y2={yy} stroke="#ccc" strokeDasharray="4 2"/>
              <text x={m.l-10} y={yy+5} fontSize="12" textAnchor="end" color="white">{Math.round(v)}</text>
            </g>
          )
        })}
  
        {/* bars */}
        {data.map((d,i)=>keys.map((k,ki)=>{
          const val = +d[k]||0, id = `${i}-${k}`, on = hov?.id===id
          return (
            <g key={id}
               onMouseEnter={()=>setHov({id,label:cfg[k].label,x:x(i)+ki*bw+(bw-4)/2,y:y(val)-10})}
               onMouseLeave={()=>setHov(null)}>
              <rect x={x(i)+ki*bw} y={y(val)} width={bw-4}
                    height={h-m.b-y(val)} fill={cfg[k].color}/>
            </g>
          )
        }))}
  
        {/* tooltip label */}
        {hov && (
          <text x={hov.x} y={hov.y} textAnchor="middle" fontSize="12" fill="#000 dark:white " >
            {hov.label}
          </text>
        )}
      </svg>
    )
  }
  
  /* ───── demo ───── */
  const data = [
    {month:'Jan', desktop:100, mobile:80},
    {month:'Feb', desktop:100, mobile:200},
    {month:'Mar', desktop:200, mobile:120},
    {month:'Apr', desktop:300, mobile:190},
    {month:'May', desktop:300, mobile:130},
    {month:'Jun', desktop:400, mobile:140},
  ]
  const cfg = {
    desktop:{label:'Desktop',color:'#2563eb'},
    mobile :{label:'Mobile' ,color:'#60a5fa'}
  }
  
  render(<Bar data={data} cfg={cfg} className="bg-white" />)
  