'use client'

const matrixRain = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`

const Container = styled.div`
  padding: 1rem;
  background: #000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`

const MatrixButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #0f0;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 5px #0f0;
  &::before {
    content: '';
    position: absolute;
    font-family: monospace;
    font-size: 12px;
    white-space: nowrap;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.3;
    animation: ${matrixRain} 2s linear infinite;
  }
  &:hover {
    background: rgba(0, 255, 0, 0.2);
    border-color: rgba(0, 255, 0, 0.5);
    text-shadow: 0 0 10px #0f0;
  }
`

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`

const Content = styled.div`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #0f0;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 3px #0f0;
  &::before {
    content: '';
    position: absolute;
    font-family: monospace;
    font-size: 12px;
    white-space: nowrap;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.2;
    animation: ${matrixRain} 3s linear infinite;
    animation-delay: -3s;
  }
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  font-family: monospace;
  position: relative;
  z-index: 1;
`

const IconWrapper = styled(motion.div)`
  color: #0f0;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 5px #0f0;
`

const RainColumn = styled.div`
  position: absolute;
  top: 0;
  font-family: monospace;
  color: #0f0;
  font-size: 14px;
  line-height: 1;
  opacity: 0.3;
  animation: ${matrixRain} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  white-space: pre;
`

const randomBinary = n => Array.from({ length: n }, () => Math.round(Math.random())).join('')

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <MatrixButton onClick={onClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }} transition={{ type: 'spring', stiffness: 200 }}>
            ▼
          </IconWrapper>
        </div>
      </MatrixButton>
      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentWrapper initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <Content>{content}</Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}

function Accordion({ items, allowMultiple = false }) {
  const [open, setOpen] = React.useState([])
  const toggle = i => setOpen(p => (allowMultiple ? (p.includes(i) ? p.filter(x => x !== i) : [...p, i]) : p.includes(i) ? [] : [i]))
  return (
    <Container>

      {items.map((it, i) => (
        <AccordionItem key={i} title={it.title} content={it.content} isOpen={open.includes(i)} onClick={() => toggle(i)} />
      ))}
    </Container>
  )
}

function Example() {
  const items = [
    { title: 'Matrix Style', content: 'Digital rain effect accordion.' },
    { title: 'Green Code', content: 'Classic matrix-inspired design.' },
    { title: 'Binary', content: 'Flowing binary elements.' }
  ]
  return <Accordion items={items} />
}

render(<Example />)
