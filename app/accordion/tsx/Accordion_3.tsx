'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// --------------------
// Interfaces
// --------------------
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
  allowMultiple?: boolean;
}

// --------------------
// Styled Components
// --------------------
const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  min-height: 100%;
`;

const GradientButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(90deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
`;

// --------------------
// AccordionItem Component
// --------------------
export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <GradientButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
      </GradientButton>

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
  );
}

// --------------------
// Accordion Component
// --------------------
export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => (prev.includes(index) ? [] : [index]));
    }
  };

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
  );
}

// --------------------
// Example Usage
// --------------------
export const Example = () => {
  const items = [
    { title: 'Dark Theme', content: 'This accordion uses a dark theme.' },
    { title: 'Gradient Design', content: 'Features gradient backgrounds.' },
    { title: 'Animation', content: 'Smooth transitions when expanding.' }
  ];

  return <Accordion items={items} />;
};
