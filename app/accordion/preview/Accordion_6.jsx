'use client'

/* ───── futuristic neon accordion (styled‑components + framer‑motion) ───── */

const Container = styled.div`
  padding: 1rem;
  background: #000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1), transparent 70%);
    pointer-events: none;
  }
`

const FuturisticButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  &:hover::before { transform: translateX(100%); }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    background: linear-gradient(45deg, #00ffff, transparent) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`

const Content = styled.div`
  background: rgba(0, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent);
  }
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: rgba(0, 255, 255, 0.9);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`

const IconWrapper = styled(motion.div)`
  color: rgba(0, 255, 255, 0.8);
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <FuturisticButton
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            ▼
          </IconWrapper>
        </div>
      </FuturisticButton>

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

  const toggle = (idx) => {
    setOpenIndexes((prev) =>
      allowMultiple
        ? prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
        : prev.includes(idx) ? [] : [idx]
    )
  }

  return (
    <Container>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(i)}
          onClick={() => toggle(i)}
        />
      ))}
    </Container>
  )
}

/* ——— quick live‑demo ——— */
function Example() {
  const items = [
    { title: 'Futuristic UI', content: 'A sleek, futuristic accordion design.' },
    { title: 'Neon effects',  content: 'Glowing elements with neon styling.' },
    { title: 'Interactive',   content: 'Responsive animations on interaction.' },
  ]
  return <Accordion items={items} />
}

/* react‑live entry point */
render(<Example />)
