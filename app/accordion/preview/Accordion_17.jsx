'use client'

/* Animation */
const move =keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

/* Layout */
const Bg = styled.div`
  padding:1rem;
  min-height:100%;
  background:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
  background-size:400% 400%;
  animation:${move} 15s ease infinite;
  position:relative;
  overflow:hidden;
`

/* Card */
const Card = styled(motion.button)`
  width:100%;
  background:rgba(255,255,255,.1);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.2);
  border-radius:16px;
  padding:1rem;
  color:#fff;
  position:relative;
  overflow:hidden;
  box-shadow:0 4px 30px rgba(0,0,0,.1);
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);
    transform:translateX(-100%);
    transition:transform .5s ease;
  }
  &:hover::before{transform:translateX(100%)}
`

/* Body */
const Wrap = styled(motion.div)`overflow:hidden;margin-top:.5rem`
const Box = styled.div`
  background:rgba(255,255,255,.05);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.1);
  border-radius:16px;
  padding:1rem;
  color:rgba(255,255,255,.9);
  position:relative;
  box-shadow:0 4px 30px rgba(0,0,0,.1);
`

/* Text */
const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  color:#fff;
  text-shadow:0 2px 5px rgba(0,0,0,.2);
  z-index:1;
  position:relative;
`
const Icon = styled(motion.div)`
  font-size:1.25rem;
  color:#fff;
  text-shadow:0 2px 5px rgba(0,0,0,.2);
  z-index:1;
  position:relative;
`

/* Light Blur Circles */
const Blur = styled.div<{s:number,b:number}>`
  position:absolute;
  width:${p=>p.s}px;
  height:${p=>p.s}px;
  background:rgba(255,255,255,.1);
  backdrop-filter:blur(${p=>p.b}px);
  border-radius:50%;
  pointer-events:none;
`

/* Accordion Item */
const Item=({t,c,o,tgl})=>(
  <div className="mb-4">
    <Card onClick={tgl} whileHover={{scale:1.02}} whileTap={{scale:.98}}>
      <div className="flex justify-between items-center">
        <Title>{t}</Title>
        <Icon animate={{rotate:o?180:0,scale:o?1.2:1}} transition={{type:"spring",stiffness:200}}>▼</Icon>
      </div>
    </Card>
    <AnimatePresence>
      {o&&(
        <Wrap
          initial={{height:0,opacity:0}}
          animate={{height:'auto',opacity:1}}
          exit={{height:0,opacity:0}}
          transition={{duration:.3}}
        >
          <Box>{c}</Box>
        </Wrap>
      )}
    </AnimatePresence>
  </div>
)

/* Accordion Root */
const Accordion = ({data,multi=false})=>{
  const [open,setOpen]=useState([])
  const toggle=i=>setOpen(p=>multi?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return(
    <Bg>
      <Blur s={300} b={20} style={{top:'10%',left:'-10%'}}/>
      <Blur s={200} b={15} style={{top:'40%',right:'-5%'}}/>
      <Blur s={250} b={25} style={{bottom:'20%',left:'30%'}}/>
      {data.map((d,i)=>(
        <Item key={i} t={d.title} c={d.content} o={open.includes(i)} tgl={()=>toggle(i)} />
      ))}
    </Bg>
  )
}

/* Example */
const Example = ()=>{
  const data = [
    { title: "Glassmorphism", content: "Modern glass-effect accordion." },
    { title: "Transparency", content: "Frosted glass aesthetic." },
    { title: "Blur effects", content: "Subtle backdrop blur styling." }
  ]
  return <Accordion data={data}/>
}

render(<Example/>)
