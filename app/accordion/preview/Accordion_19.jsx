'use client'

/* animations */
const mv = keyframes`
  0%{background-position:0 0}
  100%{background-position:50px 50px}
`

/* backdrop */
const Bg = styled.div`
  padding:1rem;
  min-height:100%;
  background:
    linear-gradient(45deg,#1a1a1a 25%,transparent 25%) -50px 0,
    linear-gradient(-45deg,#1a1a1a 25%,transparent 25%) -50px 0,
    linear-gradient(45deg,transparent 75%,#1a1a1a 75%),
    linear-gradient(-45deg,transparent 75%,#1a1a1a 75%);
  background-size:100px 100px;
  background-color:#2a2a2a;
  position:relative;
  overflow:hidden;
`

/* geometric blur shapes */
const Shape = styled.div`
  position:absolute;
  width:${p=>p.sz}px;
  height:${p=>p.sz}px;
  background:${p=>p.clr};
  opacity:${p=>p.op};
  clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);
  animation:${mv} 30s linear infinite;
`

/* button */
const Btn = styled(motion.button)`
  width:100%;
  padding:1rem;
  background:#2a2a2a;
  color:#fff;
  clip-path:polygon(0 10px,10px 0,calc(100% - 10px) 0,100% 10px,
                    100% calc(100% - 10px),calc(100% - 10px) 100%,
                    10px 100%,0 calc(100% - 10px));
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(45deg,#3498db,#3498db 10px,#2980b9 10px,#2980b9 20px);
    opacity:.1;
    animation:${mv} 20s linear infinite;
  }
  &::after{
    content:'';
    position:absolute;
    inset:2px;
    background:#2a2a2a;
    clip-path:inherit;
  }
`

/* content panel */
const Wrap = styled(motion.div)`overflow:hidden;margin-top:.5rem`
const Box = styled.div`
  background:#2a2a2a;
  padding:1rem;
  color:rgba(255,255,255,.9);
  clip-path:polygon(0 10px,10px 0,calc(100% - 10px) 0,100% 10px,
                    100% calc(100% - 10px),calc(100% - 10px) 100%,
                    10px 100%,0 calc(100% - 10px));
  position:relative;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(-45deg,#e74c3c,#e74c3c 10px,#c0392b 10px,#c0392b 20px);
    opacity:.1;
    animation:${mv} 20s linear infinite reverse;
  }
`

/* text */
const Title = styled.span`font-size:1.125rem;font-weight:500;color:#e1e6ea`
const Icon  = styled(motion.div)`font-size:1.25rem;color:#3498db`

/* item */
const Item = ({t,c,o,tgl})=>(
  <div className="mb-4">
    <Btn onClick={tgl} whileHover={{scale:1.02}} whileTap={{scale:.98}}>
      <div className="flex justify-between items-center">
        <Title >{t}</Title>
        <Icon animate={{rotate:o?180:0,scale:o?1.2:1}} transition={{type:'spring',stiffness:200}}>▼</Icon>
      </div>
    </Btn>
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

/* accordion root */
const Accordion = ({data,multi=false})=>{
  const [open,setOpen]=useState([])
  const toggle=i=>setOpen(p=>multi?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return(
    <Bg>
      <Shape sz={200} clr="#3498db" op={.1} style={{top:'10%',left:'10%'}}/>
      <Shape sz={150} clr="#e74c3c" op={.1} style={{top:'30%',right:'20%'}}/>
      <Shape sz={180} clr="#2ecc71" op={.1} style={{bottom:'20%',left:'15%'}}/>
      <Shape sz={160} clr="#f1c40f" op={.1} style={{bottom:'40%',right:'25%'}}/>
      {data.map((d,i)=>(
        <Item key={i} t={d.title} c={d.content} o={open.includes(i)} tgl={()=>toggle(i)}/>
      ))}
    </Bg>
  )
}

/* demo */
const Example = ()=>{
  const data=[
    {title:'Geometric Shapes',content:'Accordion with polygon elements.'},
    {title:'Bold colors',content:'Vibrant geometric color scheme.'},
    {title:'Modern design',content:'Contemporary flat design aesthetics.'}
  ]
  return <Accordion data={data}/>
}

render(<Example/>)
