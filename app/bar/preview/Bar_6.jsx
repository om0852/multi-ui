/* ===== paste into react‑live (scope: { React, motion }) ===== */

const PopPyramid = ({ data, className = '' }) => {
    const ref = React.useRef(null)
    const [{ w, h }, setDim] = React.useState({ w: 700, h: 400 })
    const [hov, setHov] = React.useState(null)
  
    /* resize listener */
    React.useEffect(() => {
      const onResize = () => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect()
          const height = Math.max(400, width * 0.6)
          setDim({ w: width, h: height })
        }
      }
      onResize()
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])
  
    const max = Math.max(...data.map(d => Math.max(d.male, d.female)))
    const M = { t: .1*h, b: .1*h }
    const ch = h - M.t - M.b
    const bh = Math.min((ch / data.length) * .7, 30)
    const space = ch / data.length
    const cx = w / 2
    const maxW = Math.min(w * .4, 150)
    const fSize = v => Math.min(w * .02, 12)
  
    return (
      <div ref={ref} className={`w-full h-full min-w-[300px] ${className}`}>
        <svg className="w-full h-full" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
          {/* central axis */}
          <line x1={cx} y1={M.t} x2={cx} y2={h-M.b} stroke="#000" strokeWidth={2}/>
  
          {/* bars */}
          {data.map((d,i)=>{
            const wm = (d.male   / max) * maxW
            const wf = (d.female / max) * maxW
            const y  = M.t + i * space
            const on = hov===i
            return (
              <motion.g key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}>
                {/* male */}
                <motion.rect
                  x={cx-wm} y={y} width={wm} height={bh}
                  fill="#2563eb"
                  initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.3}}
                />
                {/* female */}
                <motion.rect
                  x={cx} y={y} width={wf} height={bh}
                  fill="#60a5fa"
                  initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.3}}
                />
  
                {/* labels on hover */}
                {on && (
                  <>
                    <motion.text
                      x={cx-wm-5} y={y+bh/2} textAnchor="end" fontSize={fSize()} fill="#000"
                      initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}}>
                      {d.male}
                    </motion.text>
                    <motion.text
                      x={cx+wf+5} y={y+bh/2} textAnchor="start" fontSize={fSize()} fill="#000"
                      initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}}>
                      {d.female}
                    </motion.text>
                  </>
                )}
  
                {/* age group */}
                <text x={cx} y={y+bh/2} textAnchor="middle" dy=".3em" fontSize={fSize()}>{d.ageGroup}</text>
              </motion.g>
            )
          })}
        </svg>
      </div>
    )
  }
  
  /* --- demo --- */
  const demo = [
    { ageGroup:"0-4",  male:500, female:480 },
    { ageGroup:"5-9",  male:520, female:500 },
    { ageGroup:"10-14",male:540, female:510 },
    { ageGroup:"15-19",male:480, female:460 },
    { ageGroup:"20-24",male:450, female:470 },
    { ageGroup:"25-29",male:400, female:420 },
    { ageGroup:"30-34",male:420, female:440 },
    { ageGroup:"35-39",male:410, female:400 },
    { ageGroup:"40-44",male:390, female:400 },
    { ageGroup:"45-49",male:380, female:370 },
    { ageGroup:"50-54",male:360, female:370 },
    { ageGroup:"55-59",male:340, female:350 },
    { ageGroup:"60-64",male:320, female:330 },
    { ageGroup:"65+",  male:300, female:310 },
  ]
  
  render(<PopPyramid data={demo}  className="bg-white"/>)
  