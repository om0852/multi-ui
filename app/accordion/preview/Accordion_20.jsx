const flow = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`
const ripple = keyframes`
  0%{transform:scale(0);opacity:1}
  100%{transform:scale(4);opacity:0}
`

/* layout */
const Bg = styled.div`
  padding:1rem;
  min-height:100%;
  background:linear-gradient(-45deg,#ff3d00,#ff1744,#d500f9,#651fff);
  background-size:400% 400%;
  animation:${flow} 15s ease infinite;
  position:relative;
  overflow:hidden;
`

/* button */
const Btn = styled(motion.button)`
  width:100%;
  padding:1rem;
  background:rgba(0,0,0,.3);
  backdrop-filter:blur(10px);
  border-radius:8px;
  color:#fff;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);
    transform:translateX(-100%);
    transition:transform .5s;
  }
  &:hover::before{transform:translateX(100%)}
`

/* ripple */
const Rip = styled.div`
  position:absolute;
  width:10px;height:10px;
  background:rgba(255,255,255,.4);
  border-radius:50%;
  pointer-events:none;
  left:${p=>p.x}px;
  top:${p=>p.y}px;
  animation:${ripple} 1s linear forwards;
`

/* panel */
const Wrap = styled(motion.div)`overflow:hidden;margin-top:.5rem`
const Box = styled.div`
  background:rgba(0,0,0,.3);
  backdrop-filter:blur(10px);
  border-radius:8px;
  padding:1rem;
  color:rgba(255,255,255,.9);
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;inset:0;
    background:linear-gradient(45deg,transparent,rgba(255,255,255,.1),transparent);
    background-size:200% 200%;
    animation:${flow} 10s linear infinite;
  }
`

/* text */
const Ttl = styled.span`
  font-size:1.125rem;
  font-weight:500;
  background:linear-gradient(90deg,#fff,#ff1744,#d500f9,#fff);
  background-size:300% 100%;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:${flow} 6s linear infinite;
`
const Ic  = styled(motion.div)`font-size:1.25rem;color:#fff;text-shadow:0 0 10px rgba(255,255,255,.5)`

/* item */
const Item = ({t,c,o,tgl})=>{
  const [rip,setRip]=useState([])
  const click=e=>{
    const r=e.currentTarget.getBoundingClientRect()
    const x=e.clientX-r.left,y=e.clientY-r.top,id=Date.now()
    setRip(p=>[...p,{x,y,id}])
    setTimeout(()=>setRip(p=>p.filter(r=>r.id!==id)),1000)
    tgl()
  }
  return(
    <div className="mb-4">
      <Btn onClick={click} whileHover={{scale:1.02}} whileTap={{scale:.98}}>
        {rip.map(r=><Rip key={r.id} x={r.x} y={r.y}/> )}
        <div className="flex justify-between items-center">
          <Ttl>{t}</Ttl>
          <Ic animate={{rotate:o?180:0,scale:o?1.2:1}} transition={{type:'spring',stiffness:200}}>▼</Ic>
        </div>
      </Btn>
      <AnimatePresence>
        {o&&(
          <Wrap initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}>
            <Box>{c}</Box>
          </Wrap>
        )}
      </AnimatePresence>
    </div>
  )
}

/* root */
const Accordion = ({data,multi=false})=>{
  const [open,setOpen]=useState([])
  const toggle=i=>setOpen(p=>multi?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return data.map((d,i)=><Item key={i} t={d.title} c={d.content} o={open.includes(i)} tgl={()=>toggle(i)}/>)
}

/* demo */
const Example = ()=>{
  const data=[
    {title:'What is Multi‑UI?',content:'Multi‑UI is an animated component library.'},
    {title:'How to install it?',content:'Run `npm install multi-ui-cli` to get started.'},
    {title:'Does it support animations?',content:'Yes! It includes Framer Motion animations.'}
  ]
  return <Bg><Accordion data={data} multi/></Bg>
}

render(<Example/>)
