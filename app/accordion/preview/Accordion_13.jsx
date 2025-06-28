'use client'

/* KEYFRAMES */
const scanline = keyframes`
  0%{transform:translateY(-100%)}
  100%{transform:translateY(100%)}
`
const glitch = keyframes`
  0%{clip-path:inset(80% 0 0 0);transform:translate(-2px,2px)}
  10%{clip-path:inset(10% 0 85% 0);transform:translate(2px,-2px)}
  20%{clip-path:inset(80% 0 0 0);transform:translate(-2px,2px)}
  30%{clip-path:inset(10% 0 85% 0);transform:translate(2px,-2px)}
  40%{clip-path:inset(50% 0 30% 0);transform:translate(-2px,2px)}
  50%{clip-path:inset(0% 0 100% 0);transform:translate(2px,-2px)}
  60%{clip-path:inset(100% 0 0% 0);transform:translate(-2px,2px)}
  70%{clip-path:inset(20% 0 75% 0);transform:translate(2px,-2px)}
  80%{clip-path:inset(80% 0 0 0);transform:translate(-2px,2px)}
  90%{clip-path:inset(10% 0 85% 0);transform:translate(2px,-2px)}
  100%{clip-path:inset(80% 0 0 0);transform:translate(-2px,2px)}
`
const flicker = keyframes`
  0%,19%,21%,23%,25%,54%,56%,100%{
    text-shadow:-.2rem -.2rem 1rem #ff00de,.2rem .2rem 1rem #0ff,0 0 2rem #ff00de,0 0 4rem #0ff,0 0 6rem #ff00de,0 0 8rem #0ff
  }
  20%,24%,55%{text-shadow:none}
`

/* LAYOUT */
const Container = styled.div`
  padding:1rem;
  background:#000;
  min-height:100%;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:repeating-linear-gradient(transparent 0%,rgba(0,0,0,.3) 50%,transparent 100%);
    background-size:100% 4px;
    animation:${scanline} 10s linear infinite;
  }
`

const CyberButton = styled(motion.button)`
  width:100%;
  background:rgba(0,0,0,.8);
  border:2px solid #0ff;
  padding:1rem;
  color:#0ff;
  position:relative;
  overflow:hidden;
  text-transform:uppercase;
  letter-spacing:2px;
  &::before{
    content:'';
    position:absolute;
    top:-2px;left:-2px;right:-2px;bottom:-2px;
    background:#ff00de;
    z-index:-1;
    transform:scaleX(0);
    transform-origin:0 50%;
    transition:transform .3s ease;
  }
  &:hover::before{transform:scaleX(1)}
  &::after{
    content:attr(data-text);
    position:absolute;
    inset:0;
    display:flex;
    align-items:center;
    padding:1rem;
    background:#000;
    transform:translateX(-100%);
    clip-path:polygon(10% 0%,100% 0%,90% 100%,0% 100%);
    animation:${glitch} 2s infinite;
    display:none;
  }
  &:hover::after{display:flex}
`

const ContentWrapper = styled(motion.div)`
  overflow:hidden;
  margin-top:.5rem;
`
const Content = styled.div`
  background:rgba(0,0,0,.8);
  border:2px solid #ff00de;
  padding:1rem;
  color:#fff;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(45deg,transparent 0%,rgba(255,0,222,.1) 50%,transparent 100%);
    background-size:200% 200%;
    animation:${scanline} 4s linear infinite;
  }
`
const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  color:#0ff;
  text-shadow:0 0 10px #0ff;
  animation:${flicker} 2s infinite alternate;
  z-index:1;
`
const IconWrapper = styled(motion.div)`
  color:#0ff;
  font-size:1.25rem;
  text-shadow:0 0 10px #0ff;
  z-index:1;
`

const NeonLine = styled.div`
  position:absolute;
  width:${p=>p.width};
  height:2px;
  background:${p=>p.color};
  filter:blur(2px);
  transform:rotate(${p=>p.angle}deg);
  box-shadow:0 0 10px ${p=>p.color},0 0 20px ${p=>p.color},0 0 30px ${p=>p.color},0 0 40px ${p=>p.color};
`

/* ITEM */
const AccordionItem = ({title,content,isOpen,onClick})=>(
  <div className="mb-4">
    <CyberButton onClick={onClick} whileHover={{scale:1.02}} whileTap={{scale:.98}} data-text={title}>
      <div className="flex justify-between items-center">
        <Title>{title}</Title>
        <IconWrapper animate={{rotate:isOpen?180:0,scale:isOpen?1.2:1}} transition={{type:'spring',stiffness:200}}>▼</IconWrapper>
      </div>
    </CyberButton>
    <AnimatePresence initial={false}>
      {isOpen&&(
        <ContentWrapper initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}>
          <Content>{content}</Content>
        </ContentWrapper>
      )}
    </AnimatePresence>
  </div>
)

/* ROOT */
const Accordion = ({items,allowMultiple=false})=>{
  const [open,setOpen]=React.useState([])
  const toggle=i=>setOpen(p=>allowMultiple?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):(p.includes(i)?[]:[i]))
  return(
    <Container>
      <NeonLine color="#ff00de" width="200px" angle={-45} style={{top:'10%', left:'-50px'}}/>
      <NeonLine color="#00ffff" width="300px" angle={15} style={{top:'30%', right:'-100px'}}/>
      <NeonLine color="#ff00de" width="250px" angle={60} style={{bottom:'20%', left:'-70px'}}/>
      <NeonLine color="#00ffff" width="180px" angle={-30} style={{bottom:'40%', right:'-40px'}}/>
      {items.map((it,i)=>(
        <AccordionItem key={i} title={it.title} content={it.content} isOpen={open.includes(i)} onClick={()=>toggle(i)} />
      ))}
    </Container>
  )
}

/* EXAMPLE */
const Example = () => {
  const items = [
    { title: "Cyberpunk", content: "Futuristic cyberpunk-style accordion." },
    { title: "Neon glow", content: "Glowing neon elements." },
    { title: "Tech-inspired", content: "High-tech digital aesthetic." }
  ]
  return <Accordion items={items}/>
}

render(<Example/>)
