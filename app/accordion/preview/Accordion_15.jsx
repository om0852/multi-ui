'use client'

/* KEYFRAMES */
const pulse = keyframes`
  0%,100%{transform:scale(1);opacity:.5}
  50%{transform:scale(1.2);opacity:.8}
`
const rotate = keyframes`
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
`
const flow = keyframes`
  0%{transform:translateX(-100%)}
  100%{transform:translateX(100%)}
`

/* LAYOUT */
const Container = styled.div`
  padding:1rem;
  background:linear-gradient(135deg,#000,#1a237e);
  min-height:100%;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(transparent 0%,rgba(0,0,0,.3) 50%,transparent 100%);
    background-size:100% 4px;
    animation:${rotate} 20s linear infinite;
  }
`

const Field = styled.div`
  position:absolute;
  width:${p=>p.size}px;
  height:${p=>p.size}px;
  background:radial-gradient(circle,${p=>p.color} 0%,transparent 70%);
  border-radius:50%;
  filter:blur(20px);
  opacity:.3;
  animation:${pulse} 3s ease-in-out infinite;
  &::before{
    content:'';
    position:absolute;
    inset:10%;
    border:2px solid ${p=>p.color};
    border-radius:50%;
    opacity:.2;
    animation:${rotate} 10s linear infinite;
  }
`

/* BUTTON */
const Button = styled(motion.button)`
  width:100%;
  padding:1rem;
  background:rgba(255,255,255,.05);
  backdrop-filter:blur(10px);
  border-radius:.5rem;
  color:#fff;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(66,165,245,.1) 10px,rgba(66,165,245,.1) 20px);
    opacity:.3;
    animation:${rotate} 20s linear infinite;
  }
  &::after{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,transparent,rgba(66,165,245,.4),transparent);
    transform:translateX(-100%);
    animation:${flow} 2s ease-in-out infinite;
  }
`

/* TEXT */
const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  color:#42a5f5;
  text-shadow:0 0 10px rgba(66,165,245,.5);
  position:relative;
  z-index:1;
`
const Icon = styled(motion.div)`
  font-size:1.25rem;
  color:#42a5f5;
  text-shadow:0 0 10px rgba(66,165,245,.5);
  z-index:1;
`

/* PANEL */
const Wrap = styled(motion.div)`overflow:hidden;margin-top:.5rem`
const Panel = styled.div`
  background:rgba(255,255,255,.03);
  backdrop-filter:blur(10px);
  padding:1rem;
  border-radius:.5rem;
  color:rgba(255,255,255,.9);
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(66,165,245,.1) 10px,rgba(66,165,245,.1) 20px);
    opacity:.2;
    animation:${rotate} 15s linear infinite;
  }
`

/* ITEM */
const Item = ({t,c,o,tgl})=>(
  <div className="mb-4">
    <Button onClick={tgl} whileHover={{scale:1.02}} whileTap={{scale:.98}}>
      <div className="flex justify-between items-center">
        <Title>{t}</Title>
        <Icon animate={{rotate:o?180:0,scale:o?1.2:1}} transition={{type:"spring",stiffness:200}}>▼</Icon>
      </div>
    </Button>
    <AnimatePresence initial={false}>
      {o&&(
        <Wrap
          initial={{height:0,opacity:0}}
          animate={{height:'auto',opacity:1}}
          exit={{height:0,opacity:0}}
          transition={{duration:.3}}
        >
          <Panel>{c}</Panel>
        </Wrap>
      )}
    </AnimatePresence>
  </div>
)

/* ACCORDION ROOT */
const Accordion = ({data,multi=false})=>{
  const [open,setOpen]=useState([])
  const toggle=i=>setOpen(p=>multi?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return (
    <Container>
      <Field size={300} color="#42a5f5" style={{top:'10%',left:'10%'}}/>
      <Field size={200} color="#2196f3" style={{top:'40%',right:'20%'}}/>
      <Field size={250} color="#1976d2" style={{bottom:'20%',left:'30%'}}/>
      {data.map((d,i)=>(
        <Item key={i} t={d.title} c={d.content} o={open.includes(i)} tgl={()=>toggle(i)}/>
      ))}
    </Container>
  )
}

/* EXAMPLE */
const Example = () => {
  const items = [
    { title: "Magnetic Fields", content: "Accordion with electromagnetic styling." },
    { title: "Force fields", content: "Dynamic energy field visuals." },
    { title: "Blue glow", content: "Electric blue color scheme." }
  ]
  return <Accordion data={items}/>
}

render(<Example/>)
