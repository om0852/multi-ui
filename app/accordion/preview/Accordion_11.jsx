'use client'

const float = keyframes`
  0%,100%{transform:translate(0,0) rotate(0deg);}
  25%{transform:translate(10px,-10px) rotate(5deg);}
  50%{transform:translate(-5px,5px)  rotate(-5deg);}
  75%{transform:translate(-10px,-5px) rotate(3deg);}
`

const pulse = keyframes`
  0%,100%{transform:scale(1);opacity:.6;}
  50%    {transform:scale(1.2);opacity:.8;}
`

const Container = styled.div`
  padding:1rem;
  background:linear-gradient(135deg,#090216 0%,#170b34 100%);
  min-height:100%;
  position:relative;
  overflow:hidden;
`

const Particle = styled.div`
  position:absolute;
  width:${p=>p.size}px;
  height:${p=>p.size}px;
  background:${p=>p.color};
  border-radius:50%;
  filter:blur(3px);
  opacity:.6;
  animation:${float} ${p=>5+p.delay}s ease-in-out infinite;
  &::after{
    content:'';
    position:absolute;
    inset:-50%;
    background:radial-gradient(circle,${p=>p.color}40,transparent);
    border-radius:50%;
    animation:${pulse} ${p=>3+p.delay}s ease-in-out infinite;
  }
`

const CosmicButton = styled(motion.button)`
  width:100%;
  background:rgba(255,255,255,.05);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.1);
  border-radius:1rem;
  padding:1rem;
  color:#fff;
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);
    transform:translateX(-100%);
    transition:transform .5s;
  }
  &:hover::before{transform:translateX(100%);}
  &::after{
    content:'';
    position:absolute;
    inset:0;
    border:1px solid transparent;
    border-radius:1rem;
    background:linear-gradient(45deg,#7400b8,#80ffdb) border-box;
    -webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);
    mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:destination-out;
    mask-composite:exclude;
  }
`

const ContentWrapper = styled(motion.div)`
  overflow:hidden;
  margin-top:.5rem;
`

const Content = styled.div`
  background:rgba(255,255,255,.03);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.1);
  border-radius:1rem;
  padding:1rem;
  color:rgba(255,255,255,.9);
  position:relative;
  &::before{
    content:'';
    position:absolute;
    inset:0;
    border:1px solid transparent;
    border-radius:1rem;
    background:linear-gradient(45deg,#80ffdb,#7400b8) border-box;
    -webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);
    mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:destination-out;
    mask-composite:exclude;
  }
`

const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  color:#fff;
  text-shadow:0 0 10px rgba(128,255,219,.5);
  z-index:1;
`

const IconWrapper = styled(motion.div)`
  color:rgba(255,255,255,.8);
  font-size:1.25rem;
  text-shadow:0 0 10px rgba(128,255,219,.5);
  z-index:1;
`

const AccordionItem = ({title,content,isOpen,onClick})=>(
  <div className="mb-4">
    <CosmicButton onClick={onClick} whileHover={{scale:1.02}} whileTap={{scale:0.98}}>
      <div className="flex justify-between items-center">
        <Title>{title}</Title>
        <IconWrapper animate={{rotate:isOpen?180:0,scale:isOpen?1.2:1}} transition={{type:'spring',stiffness:200}}>
          ▼
        </IconWrapper>
      </div>
    </CosmicButton>
    <AnimatePresence initial={false}>
      {isOpen&&(
        <ContentWrapper
          initial={{height:0,opacity:0}}
          animate={{height:'auto',opacity:1}}
          exit={{height:0,opacity:0}}
          transition={{duration:.3}}
        >
          <Content>{content}</Content>
        </ContentWrapper>
      )}
    </AnimatePresence>
  </div>
)

const Accordion = ({items,allowMultiple=false})=>{
  const [open,setOpen]=React.useState([])
  const toggle=i=>setOpen(p=>allowMultiple?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):p.includes(i)?[]:[i])
  return(
    <Container>
      <Particle size={20} color="#80ffdb" delay={0} style={{top:'10%', left:'20%'}}/>
      <Particle size={15} color="#7400b8" delay={1} style={{top:'30%', right:'10%'}}/>
      <Particle size={25} color="#5390d9" delay={2} style={{bottom:'20%', left:'15%'}}/>
      <Particle size={18} color="#48bfe3" delay={3} style={{bottom:'40%', right:'25%'}}/>
      <Particle size={22} color="#64dfdf" delay={4} style={{top:'50%', left:'40%'}}/>
      {items.map((it,i)=>(
        <AccordionItem key={i} title={it.title} content={it.content} isOpen={open.includes(i)} onClick={()=>toggle(i)} />
      ))}
    </Container>
  )
}

function Example(){
  const items=[
    {title:'Cosmic Theme',content:'Space-inspired accordion design.'},
    {title:'Particles',content:'Floating particle elements.'},
    {title:'Galaxy colors',content:'Cosmic color palette.'}
  ]
  return <Accordion items={items}/>
}

render(<Example/>)
