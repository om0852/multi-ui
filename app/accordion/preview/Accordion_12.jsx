'use client'

/* keyframes */
const shimmer = keyframes`
  0%{background-position:-200% center;}
  100%{background-position:200% center;}
`
const crystalGlow = keyframes`
  0%,100%{filter:drop-shadow(0 0 5px rgba(255,255,255,.5));}
  50%    {filter:drop-shadow(0 0 15px rgba(255,255,255,.8));}
`

/* layout */
const Container = styled.div`
  padding:1rem;
  background:linear-gradient(135deg,#1a1f35 0%,#2b3151 100%);
  min-height:100%;
  position:relative;
  overflow:hidden;
`

/* floating background crystals */
const Crystal = styled.div`
  position:absolute;
  width:${p=>p.size}px;
  height:${p=>p.size*1.5}px;
  background:${p=>p.color};
  clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  transform:rotate(${p=>p.rotation}deg);
  opacity:.3;
  animation:${crystalGlow} 3s ease-in-out infinite;
  filter:blur(2px);
`

/* button */
const CrystalButton = styled(motion.button)`
  width:100%;
  background:rgba(255,255,255,.1);
  backdrop-filter:blur(10px);
  border:none;
  padding:1rem;
  color:#fff;
  position:relative;
  overflow:hidden;
  clip-path:polygon(0% 20px,20px 0%,calc(100% - 20px) 0%,100% 20px,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0% calc(100% - 20px));
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),rgba(255,255,255,.4),rgba(255,255,255,.2),transparent);
    background-size:200% 100%;
    animation:${shimmer} 3s linear infinite;
  }
  &::after{
    content:'';
    position:absolute;
    inset:1px;
    background:rgba(255,255,255,.05);
    clip-path:inherit;
    animation:${crystalGlow} 2s ease-in-out infinite;
  }
`

/* content */
const ContentWrapper = styled(motion.div)`
  overflow:hidden;
  margin-top:.5rem;
`
const Content = styled.div`
  background:rgba(255,255,255,.05);
  backdrop-filter:blur(10px);
  padding:1rem;
  color:rgba(255,255,255,.9);
  position:relative;
  clip-path:polygon(0% 15px,15px 0%,calc(100% - 15px) 0%,100% 15px,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0% calc(100% - 15px));
  &::before{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(45deg,transparent,rgba(255,255,255,.1),transparent);
    background-size:200% 200%;
    animation:${shimmer} 4s linear infinite;
  }
`

/* misc */
const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  background:linear-gradient(90deg,#fff,#e6e6e6,#fff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-size:200% auto;
  animation:${shimmer} 3s linear infinite;
  text-shadow:0 0 10px rgba(255,255,255,.5);
  z-index:1;
`
const IconWrapper = styled(motion.div)`
  color:rgba(255,255,255,.8);
  font-size:1.25rem;
  text-shadow:0 0 10px rgba(255,255,255,.5);
  z-index:1;
`

/* item */
const AccordionItem = ({title,content,isOpen,onClick})=>(
  <div className="mb-4">
    <CrystalButton onClick={onClick} whileHover={{scale:1.02}} whileTap={{scale:0.98}}>
      <div className="flex justify-between items-center">
        <Title>{title}</Title>
        <IconWrapper animate={{rotate:isOpen?180:0,scale:isOpen?1.2:1}} transition={{type:'spring',stiffness:200}}>▼</IconWrapper>
      </div>
    </CrystalButton>
    <AnimatePresence initial={false}>
      {isOpen&&(
        <ContentWrapper initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}>
          <Content>{content}</Content>
        </ContentWrapper>
      )}
    </AnimatePresence>
  </div>
)

/* root */
const Accordion = ({items,allowMultiple=false})=>{
  const [open,setOpen]=React.useState([])
  const toggle=i=>setOpen(p=>allowMultiple?(p.includes(i)?p.filter(x=>x!==i):[...p,i]):(p.includes(i)?[]:[i]))
  return(
    <Container>
      <Crystal size={100} rotation={30}  color="rgba(255,255,255,.1)" style={{top:'10%', left:'10%'}}/>
      <Crystal size={80}  rotation={-15} color="rgba(200,220,255,.1)" style={{top:'30%', right:'15%'}}/>
      <Crystal size={120} rotation={45}  color="rgba(220,240,255,.1)" style={{bottom:'20%', left:'20%'}}/>
      <Crystal size={90}  rotation={-30} color="rgba(180,200,255,.1)" style={{bottom:'40%', right:'25%'}}/>
      {items.map((it,i)=>(
        <AccordionItem key={i} title={it.title} content={it.content} isOpen={open.includes(i)} onClick={()=>toggle(i)} />
      ))}
    </Container>
  )
}

/* demo */
function Example(){
  const items=[
    {title:'Crystal Design',content:'Accordion with crystal elements.'},
    {title:'Transparent',content:'Light, airy aesthetic.'},
    {title:'Geometric',content:'Angular crystal shapes.'}
  ]
  return <Accordion items={items}/>
}

render(<Example/>)
