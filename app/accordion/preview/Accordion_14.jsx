'use client'

/* keyframes */
const shimmer = keyframes`
  0%{background-position:200% 50%}
  100%{background-position:-200% 50%}
`
const rainbow = keyframes`
  0%{border-color:#f00}
  17%{border-color:#f0f}
  33%{border-color:#00f}
  50%{border-color:#0ff}
  67%{border-color:#0f0}
  83%{border-color:#ff0}
  100%{border-color:#f00}
`
const scan = keyframes`
  0%{transform:translateY(-100%)}
  100%{transform:translateY(100%)}
`

/* layout */
const Container = styled.div`
  padding:1rem;
  background:linear-gradient(135deg,#000428 0%,#004e92 100%);
  min-height:100%;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(transparent 0%,rgba(0,0,0,.3) 50%,transparent 100%);
    background-size:100% 4px;
    animation:${scan} 10s linear infinite;
  }
`

const Prism = styled.div`
  position:absolute;
  width:${p=>p.size}px;
  height:${p=>p.size}px;
  background:linear-gradient(45deg,rgba(255,0,0,.2),rgba(255,255,0,.2),rgba(0,255,0,.2),rgba(0,255,255,.2),rgba(0,0,255,.2),rgba(255,0,255,.2));
  transform:rotate(${p=>p.rotation}deg);
  filter:blur(20px);
  opacity:.3;
  mix-blend-mode:screen;
`

/* button / text */
const Button = styled(motion.button)`
  width:100%;
  padding:1rem;
  background:rgba(255,255,255,.1);
  color:#fff;
  border:2px solid transparent;
  border-radius:.5rem;
  cursor:pointer;
  animation:${rainbow} 10s linear infinite;
  &:hover{background:rgba(255,255,255,.2)}
`
const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  background:linear-gradient(90deg,#f00,#f0f,#00f,#0ff,#0f0,#ff0,#f00);
  background-size:200% auto;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:${shimmer} 3s linear infinite;
  text-shadow:0 0 10px rgba(255,255,255,.5);
`
const Icon = styled(motion.div)`
  color:rgba(255,255,255,.8);
  font-size:1.25rem;
  text-shadow:0 0 10px rgba(255,255,255,.5);
`

/* content */
const Wrap = styled(motion.div)`overflow:hidden;margin-top:.5rem`
const Panel = styled.div`
  background:rgba(255,255,255,.05);
  backdrop-filter:blur(10px);
  padding:1rem;
  color:rgba(255,255,255,.9);
  border-radius:.5rem;
  position:relative;
  &::before{
    content:'';
    position:absolute;
    inset:-2px;
    background:linear-gradient(90deg,#f00,#f0f,#00f,#0ff,#0f0,#ff0,#f00);
    background-size:200% 100%;
    animation:${shimmer} 3s linear infinite;
    -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;
    mask-composite:exclude;
  }
`

/* item */
const Item = ({t,c,o,tgl})=>(
  <div className="mb-4">
    <Button onClick={tgl} whileHover={{scale:1.02}} whileTap={{scale:.98}}>
      <div className="flex justify-between items-center">
        <Title>{t}</Title>
        <Icon animate={{rotate:o?180:0,scale:o?1.2:1}} transition={{type:'spring',stiffness:200}}>▼</Icon>
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

/* root */
const Accordion = ({data,multi=false})=>{
  const [open,setOpen]=React.useState([])
  const toggle=i=>setOpen(p=>multi?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return(
    <Container>
      <Prism size={200} rotation={30}  style={{top:'10%', left:'10%'}}/>
      <Prism size={150} rotation={-15} style={{top:'30%', right:'20%'}}/>
      <Prism size={180} rotation={45}  style={{bottom:'20%', left:'15%'}}/>
      <Prism size={160} rotation={-30} style={{bottom:'40%', right:'25%'}}/>
      {data.map((d,i)=>(
        <Item key={i} t={d.title} c={d.content} o={open.includes(i)} tgl={()=>toggle(i)}/>
      ))}
    </Container>
  )
}

/* demo */
function Example(){
  const items=[
    {title:'Holographic',content:'Accordion with hologram-like effects.'},
    {title:'3D elements',content:'Dimensional prism objects.'},
    {title:'Iridescent',content:'Color-shifting surfaces.'}
  ]
  return <Accordion data={items}/>
}

render(<Example/>)
