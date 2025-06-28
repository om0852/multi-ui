'use client'

/* Animations */
const flow = keyframes`0%{background-position:0% 50%}100%{background-position:100% 50%}`
const pulse = keyframes`
  0%,100%{filter:drop-shadow(0 0 2px #f0f) drop-shadow(0 0 4px #0ff);}
  50%{filter:drop-shadow(0 0 6px #f0f) drop-shadow(0 0 12px #0ff);}
`

/* Layout */
const Container = styled.div`
  padding:1rem;
  background:#0a0a0a;
  min-height:100%;
  position:relative;
  overflow:hidden;
`

/* Button */
const Btn = styled(motion.button)`
  width:100%;
  padding:1rem;
  background:rgba(0,0,0,.8);
  color:#fff;
  border:none;
  border-radius:4px;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    padding:2px;
    border-radius:4px;
    background:linear-gradient(90deg,#f0f,#0ff,#f0f,#0ff);
    background-size:300% 100%;
    animation:${flow} 4s linear infinite;
    -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;
    mask-composite:exclude;
  }
  &:hover{animation:${pulse} 2s ease-in-out infinite;}
`

/* Wrapper */
const Wrap = styled(motion.div)`overflow:hidden;margin-top:.5rem`
const Box = styled.div`
  background:rgba(0,0,0,.8);
  padding:1rem;
  color:rgba(255,255,255,.9);
  border-radius:4px;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    padding:2px;
    border-radius:4px;
    background:linear-gradient(90deg,#0ff,#f0f,#0ff,#f0f);
    background-size:300% 100%;
    animation:${flow} 4s linear infinite;
    -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;
    mask-composite:exclude;
  }
`

/* Text */
const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  color:#fff;
  text-shadow:0 0 5px #f0f, 0 0 10px #0ff;
  position:relative;
  z-index:1;
`
const Icon = styled(motion.div)`
  font-size:1.25rem;
  color:#fff;
  text-shadow:0 0 5px #f0f, 0 0 10px #0ff;
  z-index:1;
`

/* Accordion Item */
const Item = ({t,c,o,tgl})=>(
  <div className="mb-4">
    <Btn onClick={tgl} whileHover={{scale:1.02}} whileTap={{scale:.98}}>
      <div className="flex justify-between items-center">
        <Title>{t}</Title>
        <Icon animate={{rotate:o?180:0,scale:o?1.2:1}} transition={{type:"spring",stiffness:200}}>▼</Icon>
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

/* Accordion Root */
const Accordion = ({data,multi=false})=>{
  const [open,setOpen]=useState([])
  const toggle=i=>setOpen(p=>multi?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return(
    <Container>
      {data.map((d,i)=>(
        <Item key={i} t={d.title} c={d.content} o={open.includes(i)} tgl={()=>toggle(i)} />
      ))}
    </Container>
  )
}

/* Example */
const Example = () => {
  const items = [
    { title: "Neon Style", content: "Bright neon-themed accordion." },
    { title: "Vibrant", content: "Glowing neon-sign aesthetics." },
    { title: "Nightlife", content: "Urban nightclub vibe." }
  ]
  return <Accordion data={items}/>
}

render(<Example/>)
