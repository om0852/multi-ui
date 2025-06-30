/* ==== paste into react‑live (scope: { React, motion }) ==== */

const ProgressBars = ({ data }) => {
    const ref = React.useRef(null)
    const [{ w }, setDim] = React.useState({ w: 0 })
    const [mob, setMob]   = React.useState(false)
    const [hov, setHov]   = React.useState(null)
  
    /* measure + mobile flag */
    React.useEffect(() => {
      const onResize = () => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect()
          setDim({ w: width })
          setMob(window.innerWidth < 640)
        }
      }
      onResize()
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])
  
    /* responsive sizes */
    const f   = Math.max(12, Math.min(w * 0.03, 16))   // font size
    const h   = mob ? 16 : 24                           // bar height
    const off = mob ? 24 : 32                           // tooltip offset
    const gap = mob ? 16 : 24                           // spacing
  
    return (
      <div ref={ref} className="w-full max-w-[800px] mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {data.map((d, i) => (
          <div key={i}
               className="relative"
               style={{ marginBottom: i === data.length - 1 ? 0 : gap }}
               onMouseEnter={() => setHov(i)}
               onMouseLeave={() => setHov(null)}
               onTouchStart={() => setHov(i)}
               onTouchEnd={() => setHov(null)}>
  
            {/* label row */}
            <div className="flex justify-between items-center mb-1.5 sm:mb-2">
              <p className="font-medium truncate mr-2" style={{ fontSize: f }}>{d.label}</p>
              <p className="text-gray-600 whitespace-nowrap" style={{ fontSize: f }}>{d.value}%</p>
            </div>
  
            {/* progress track */}
            <div className="bg-gray-200 rounded-full overflow-hidden w-full relative" style={{ height: h }}>
              <motion.div className="h-full bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${d.value}%` }}
                          transition={{ duration: .8, ease: 'easeOut' }} />
  
              {/* tooltip */}
              {hov === i && (
                <motion.div className="absolute top-0 pointer-events-none"
                            style={{ left: `${d.value}%`, transform: `translateX(-50%) translateY(-${off}px)` }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .2 }}>
                  <div className="bg-blue-600 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap"
                       style={{ fontSize: f }}>
                    {d.value}%
                  </div>
                  <div style={{
                    width: 0, height: 0, margin: '0 auto',
                    borderLeft:  '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop:   '6px solid #2563eb'
                  }} />
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  /* --- demo --- */
  const demo = [
    { label: 'Task 1', value: 75 },
    { label: 'Task 2', value: 50 },
    { label: 'Task 3', value: 90 },
    { label: 'Task 4', value: 30 },
    { label: 'Task 5', value: 60 },
  ]
  
  render(<ProgressBars data={demo} />)
  