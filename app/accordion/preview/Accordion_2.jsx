
/* ---------- styled‑components ---------- */
const Container = styled.div`
  padding: 1rem;
  background: #e0e0e0;
  min-height: 100%;
`

const NeumorphicButton = styled(motion.button)`
  width: 100%;
  background: #e0e0e0;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  box-shadow:
    5px 5px 10px #bebebe,
    -5px -5px 10px #ffffff;
  color: #666;

  &:hover {
    box-shadow:
      7px 7px 15px #bebebe,
      -7px -7px 15px #ffffff;
  }
`

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`

const Content = styled.div`
  background: #e0e0e0;
  border-radius: 1rem;
  padding: 1rem;
  color: #666;
  box-shadow: inset
    3px 3px 7px #bebebe,
    inset -3px -3px 7px #ffffff;
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`

const IconWrapper = styled(motion.div)`
  color: #666;
  font-size: 1.25rem;
`

/* ---------- Accordion logic ---------- */
function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <NeumorphicButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.1 : 1
            }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            ▼
          </IconWrapper>
        </div>
      </NeumorphicButton>

      <AnimatePresence>
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
  const [openIndexes, setOpenIndexes] = useState([])

  const handleClick = (index) => {
    if (allowMultiple) {
      setOpenIndexes(
        openIndexes.includes(index)
          ? openIndexes.filter((i) => i !== index)
          : [...openIndexes, index]
      )
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index])
    }
  }

  return (
    <Container>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  )
}

/* ---------- Quick demo ---------- */
function Example() {
  const items = [
    { title: 'What is this?',   content: 'A neumorphic accordion.' },
    { title: 'Features?',       content: 'Soft shadows, Framer Motion.' },
    { title: 'Customizable?',   content: 'Yes, tweak as you like!' }
  ]

  return <Accordion items={items} />
}

render(<Example />)
