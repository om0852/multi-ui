'use client'

/* ─────────────────  neon‑morph accordion  ───────────────── */

const morphAnimation = keyframes`
  0%   { border-radius: 65% 35% 30% 70%/60% 35% 65% 40%; }
  50%  { border-radius: 30% 60% 70% 40%/55% 60% 35% 65%; }
  100% { border-radius: 65% 35% 30% 70%/60% 35% 65% 40%; }
`

const Container = styled.div`
  padding: 3rem 1rem;
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  min-height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const Blobs = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`

const Blob = styled.div`
  position: absolute;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background: ${p => p.color};
  opacity: 0.35;
  filter: blur(60px);
  animation: ${morphAnimation} ${p => 10 + p.delay}s ease-in-out infinite;
`

const Panel = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
`

const MorphButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
  padding: 1.2rem 1rem;
  color: #fff;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) inset,
              0 6px 14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  &:hover::before { transform: translateX(100%); }
`

const ContentWrap = styled(motion.div)`
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
  margin-top: 0.5rem;
`

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top: none;
  padding: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`

const Arrow = styled(motion.svg)`
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  stroke: rgba(255, 255, 255, 0.9);
  stroke-width: 2.2;
`

/* ------------ items ------------ */

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-5">
      <MorphButton
        onClick={onClick}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between gap-4">
          <Title>{title}</Title>
          <Arrow
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <polyline points="6 9 12 15 18 9" />
          </Arrow>
        </div>
      </MorphButton>

      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentWrap
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContentCard>{content}</ContentCard>
          </ContentWrap>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------ root ------------ */

function Accordion({ items, allowMultiple = false }) {
  const [open, setOpen] = React.useState([])

  const toggle = (i) =>
    setOpen((prev) =>
      allowMultiple
        ? prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        : prev.includes(i) ? [] : [i],
    )

  return (
    <Panel>
      {items.map((it, i) => (
        <AccordionItem
          key={i}
          title={it.title}
          content={it.content}
          isOpen={open.includes(i)}
          onClick={() => toggle(i)}
        />
      ))}
    </Panel>
  )
}

/* ------------ demo ------------ */

function Example() {
  const items = [
    { title: 'Morphing Design', content: 'Accordion with shape‑morphing blobs.' },
    { title: 'Vibrant Colors',  content: 'Neon gradient background & glow.' },
    { title: 'Interactive',     content: 'Smooth spring‑based animations.' },
  ]
  return (
    <>
      <Blobs>
        <Blob delay={0} size={280} color="#12c2e9" style={{ top: '5%',  left: '5%'  }} />
        <Blob delay={2} size={380} color="#c471ed" style={{ top: '45%', right: '10%' }} />
        <Blob delay={4} size={320} color="#f64f59" style={{ bottom: '5%', left: '25%' }} />
      </Blobs>
      <Accordion items={items} />
    </>
  )
}

/* react‑live mount */
render(<Example />)
