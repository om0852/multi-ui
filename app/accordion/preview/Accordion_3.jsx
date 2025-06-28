'use client'

/* ————— styled‑components + framer‑motion accordion ————— */

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  min-height: 100%;
`

const GradientButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  &:hover::before {
    transform: translateX(100%);
  }
`

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(90deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
`

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <GradientButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            ▼
          </IconWrapper>
        </div>
      </GradientButton>

      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Content>{content}</Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}

function Accordion({ items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = React.useState([])

  const handleClick = (idx) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      )
    } else {
      setOpenIndexes((prev) => (prev.includes(idx) ? [] : [idx]))
    }
  }

  return (
    <Container>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(i)}
          onClick={() => handleClick(i)}
        />
      ))}
    </Container>
  )
}

/* ————— quick demo ————— */
function Example() {
  const items = [
    { title: 'Dark Theme', content: 'This accordion uses a dark theme.' },
    { title: 'Gradient Design', content: 'Features gradient backgrounds.' },
    { title: 'Animation', content: 'Smooth transitions when expanding.' },
  ]
  return <Accordion items={items} />
}

/* —— react‑live entrypoint —— */
render(<Example />)
