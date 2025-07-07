
const ringPulse = keyframes`
  0%,100%{transform:scale(1);opacity:.5;}
  50%{transform:scale(1.2);opacity:.8;}
`;

const neonGlow = keyframes`
  0%,100%{filter:brightness(1) drop-shadow(0 0 5px #f0f);}
  50%{filter:brightness(1.3) drop-shadow(0 0 15px #f0f);}
`;

const Container = styled.div`
  padding:1rem;
  background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);
  min-height:100%;
  position:relative;
  overflow:hidden;
`;

const NeonButton = styled(motion.button)`
  width:100%;
  background:rgba(26,26,46,.8);
  backdrop-filter:blur(10px);
  border:2px solid #f0f;
  padding:1.5rem;
  color:#fff;
  position:relative;
  overflow:hidden;
  border-radius:12px;
  text-align:left;
  margin:1rem 0;
  box-shadow:
    0 0 10px rgba(255,0,255,.3),
    inset 0 0 10px rgba(255,0,255,.3);
  animation:${neonGlow} 2s ease-in-out infinite;
`;

const ContentWrapper = styled(motion.div)`
  overflow:hidden;
  margin:.5rem 0;
  position:relative;
`;

const Content = styled.div`
  background:rgba(26,26,46,.6);
  backdrop-filter:blur(10px);
  border:1px solid #f0f;
  padding:1.5rem;
  color:#fff;
  position:relative;
  border-radius:12px;
  box-shadow:0 0 10px rgba(255,0,255,.2);
`;

const Title = styled.span`
  font-size:1.125rem;
  font-weight:500;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:space-between;
  text-shadow:0 0 10px rgba(255,0,255,.5);
  z-index:1;
  position:relative;
`;

const IconWrapper = styled(motion.div)`
  color:#fff;
  font-size:1.25rem;
  width:24px;
  height:24px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-shadow:0 0 10px rgba(255,0,255,.5);
`;

const NeonRing = styled(motion.div)`
  position:absolute;
  width:${p=>p.size}px;
  height:${p=>p.size}px;
  border:2px solid ${p=>p.color};
  border-radius:50%;
  animation:${ringPulse} ${p=>2+p.delay}s ease-in-out infinite;
  animation-delay:${p=>p.delay}s;
  pointer-events:none;
  box-shadow:0 0 10px ${p=>p.color},inset 0 0 10px ${p=>p.color};
`;

const AccordionItem = ({title,content,isOpen,onClick})=>{
  const rings = Array.from({length:5},(_,i)=>({
    size:(i+1)*50,
    delay:i*.4,
    color:`hsl(${300+i*20},100%,50%)`,
    x:Math.random()*100,
    y:Math.random()*100
  }));
  return(
    <div>
      <NeonButton onClick={onClick} whileHover={{scale:1.01}} whileTap={{scale:.99}}>
        {rings.map((r,i)=>(
          <NeonRing key={i} size={r.size} delay={r.delay} color={r.color}
            style={{left:`${r.x}%`,top:`${r.y}%`,transform:'translate(-50%,-50%)'}}
            animate={{scale:[1,1.2,1],opacity:[.5,.8,.5]}}
            transition={{duration:2+r.delay,repeat:Infinity,ease:'easeInOut'}}
          />
        ))}
        <Title>
          {title}
          <IconWrapper animate={{rotate:isOpen?180:0,scale:isOpen?1.2:1}} transition={{type:'spring',stiffness:200,damping:15}}>
            ▾
          </IconWrapper>
        </Title>
      </NeonButton>
      <AnimatePresence>
        {isOpen&&(
          <ContentWrapper
            initial={{opacity:0,height:0,scale:.95}}
            animate={{
              opacity:1,
              height:'auto',
              scale:1,
              transition:{
                height:{duration:.4},
                opacity:{duration:.3,delay:.1},
                scale:{duration:.3,delay:.1}
              }
            }}
            exit={{
              opacity:0,
              height:0,
              scale:.95,
              transition:{
                height:{duration:.3},
                opacity:{duration:.2},
                scale:{duration:.2}
              }
            }}
          >
            <Content>
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0,transition:{delay:.2,duration:.3}}}>
                {content}
              </motion.div>
            </Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}

const Accordion = ({ items, allowMultiple = false }) => {
  const [open,setOpen]=useState([]);
  const handle = (i)=>{
    if(allowMultiple){
      setOpen(open.includes(i)?open.filter(x=>x!==i):[...open,i])
    }else{
      setOpen(open.includes(i)?[]:[i])
    }
  }
  return(
    <Container>
      {items.map((item,i)=>(
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          isOpen={open.includes(i)}
          onClick={()=>handle(i)}
        />
      ))}
    </Container>
  )
}

const data=[
  {title:'Projects',content:'NeonDashboard, MotionUI, GlowKit'},
  {title:'Experience',content:'Full Stack Dev @Glowverse'},
  {title:'Contact',content:'neon@cybermail.com'}
]

render(<Accordion items={data} />)
