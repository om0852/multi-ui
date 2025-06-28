'use client'

const liquidFlow = keyframes`
  0% { transform: translate(-50%, -75%) rotate(0deg); }
  50% { transform: translate(-50%, -75%) rotate(180deg); }
  100% { transform: translate(-50%, -75%) rotate(360deg); }
`

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000428, #004e92);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`

const LiquidButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.3), transparent);
    top: 50%;
    left: 50%;
    animation: ${liquidFlow} 6s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.2), transparent);
    top: 50%;
    left: 50%;
    animation: ${liquidFlow} 8s linear infinite;
    animation-delay: -3s;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
`

const ContentText = styled.div`
  position: relative;
  z-index: 2;
`

const Shape = styled.div`
  position: absolute;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background: ${p => p.color};
  opacity: 0.5;
  filter: blur(40px);
  animation: ${liquidFlow} ${p => 8 + p.delay}s linear infinite;
`

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <LiquidButton onClick={onClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }} transition={{ type: 'spring', stiffness: 200 }}>
            ▼
          </IconWrapper>
        </div>
      </LiquidButton>
      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentWrapper initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <Content>
              <ContentText>{content}</ContentText>
            </Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}

function Accordion({ items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = React.useState([])
  const toggle = idx =>
    setOpenIndexes(prev =>
      allowMultiple ? (prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]) : prev.includes(idx) ? [] : [idx]
    )
  return (
    <Container>
      {items.map((it, i) => (
        <AccordionItem key={i} title={it.title} content={it.content} isOpen={openIndexes.includes(i)} onClick={() => toggle(i)} />
      ))}
    </Container>
  )
}

function Example() {
  const items = [
    { title: 'Liquid Design', content: 'Accordion with fluid animations.' },
    { title: 'Smooth flow', content: 'Elegant liquid-like transitions.' },
    { title: 'Bubbling', content: 'Bubble effects on interaction.' }
  ]
  return <Accordion items={items} />
}

render(<Example />)
