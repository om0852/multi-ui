
const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`
const digitFlicker = keyframes`
  0%,100% { opacity: .3; }
  50% { opacity: 1; }
`

const Container = styled.div`
  padding:1rem;background:linear-gradient(135deg,#000 0%,#001a00 100%);
  min-height:100%;position:relative;overflow:hidden;
`
const DigitalButton = styled(motion.button)`
  width:100%;background:rgba(0,26,0,.6);backdrop-filter:blur(10px);
  border:2px solid rgba(0,255,0,.2);padding:1.5rem;color:#0f0;
  position:relative;overflow:hidden;border-radius:4px;text-align:left;
  margin:1rem 0;font-family:"Courier New",monospace;
  box-shadow:0 0 30px rgba(0,255,0,.1),inset 0 0 20px rgba(0,255,0,.1);
  &::before{
    content:'';position:absolute;inset:0;
    background:linear-gradient(transparent 0%,rgba(0,255,0,.1) 50%,transparent 100%);
    opacity:0;transition:.3s;
  }
  &:hover::before{opacity:1;}
`
const ContentWrapper = styled(motion.div)`
  overflow:hidden;margin:.5rem 0;position:relative;
`
const Content = styled.div`
  background:rgba(0,26,0,.4);backdrop-filter:blur(10px);
  border:2px solid rgba(0,255,0,.1);padding:1.5rem;color:#0f0;
  border-radius:4px;box-shadow:0 0 20px rgba(0,255,0,.1),inset 0 0 15px rgba(0,255,0,.1);
  font-family:"Courier New",monospace;
`
const Title = styled.span`
  font-size:1.125rem;font-weight:500;color:#0f0;text-shadow:0 0 10px rgba(0,255,0,.5);
  letter-spacing:2px;font-family:"Courier New",monospace;
`
const IconWrapper = styled(motion.div)`
  color:#0f0;font-size:1.25rem;text-shadow:0 0 10px rgba(0,255,0,.5);
`
const RainDrop = styled(motion.div)`
  position:absolute;color:#0f0;font-family:"Courier New",monospace;font-size:14px;
  line-height:1;white-space:nowrap;text-shadow:0 0 8px rgba(0,255,0,.5);
  animation:${matrixRain} ${p=>p.speed}s linear infinite;
  animation-delay:${p=>p.delay}s;opacity:.5;
`
const DigitalCharacter = styled(motion.div)`
  position:absolute;color:#0f0;font-family:"Courier New",monospace;font-size:12px;
  animation:${digitFlicker} ${() => 1+Math.random()}s ease-in-out infinite;
  animation-delay:${p=>p.delay}s;opacity:.5;
`

const matrixChars='日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ'
const randChar=()=>matrixChars[Math.floor(Math.random()*matrixChars.length)]

const Accordion = ({ items })=>{
  const [open,setOpen]=useState(null)
  return(
    <Container>
      {items.map((it,i)=>(
        <div key={i}>
          <DigitalButton
            onClick={()=>setOpen(open===i?null:i)}
            whileHover={{scale:1.02}}
            whileTap={{scale:.98}}
          >
            {Array.from({length:10},(_,j)=>(
              <RainDrop key={j} delay={j*.3} speed={2+Math.random()*2} style={{left:`${Math.random()*100}%`,transform:'translateY(-100%)'}}>
                {Array.from({length:8},randChar).join('')}
              </RainDrop>
            ))}
            {Array.from({length:20},(_,j)=>(
              <DigitalCharacter key={j} delay={j*.1} style={{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`}}>
                {randChar()}
              </DigitalCharacter>
            ))}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Title>{it.title}</Title>
              <IconWrapper animate={{rotate:open===i?180:0}} transition={{type:'spring',stiffness:200}}>▼</IconWrapper>
            </div>
          </DigitalButton>
          <AnimatePresence>
            {open===i&&(
              <ContentWrapper
                initial={{height:0,opacity:0}}
                animate={{height:'auto',opacity:1}}
                exit={{height:0,opacity:0}}
                transition={{duration:.3}}
              >
                <Content>{it.content}</Content>
              </ContentWrapper>
            )}
          </AnimatePresence>
        </div>
      ))}
    </Container>
  )
}

const data=[
  {title:'System Logs',content:'Initializing sequence... OK\nLoading modules... OK\nReady.'},
  {title:'User Bio',content:'I hack code in neon green. Coffee level: 9000.'},
  {title:'Contact',content:'mail@matrix.dev'}
]

render(<Accordion items={data} />)
