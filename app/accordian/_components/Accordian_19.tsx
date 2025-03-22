'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const borderGlow = keyframes`
  0%, 100% { border-color: rgba(255, 255, 255, 0.1); }
  50% { border-color: rgba(255, 255, 255, 0.2); }
`;

const Container = styled.div`
  padding: 1rem;
  background: #121212;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MinimalButton = styled(motion.button)`
  width: 100%;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    background: #202020;
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: rgba(255, 255, 255, 0.87);
  position: relative;
  animation: ${borderGlow} 4s ease-in-out infinite;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.87);
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
`;

const Accent = styled.div<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: 1px;
  background: ${props => props.color};
  opacity: 0.1;
  transform-origin: center;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-4">
      <MinimalButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.2 : 1
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            ▼
          </IconWrapper>
        </div>
      </MinimalButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Content>
              {content}
            </Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(openIndexes.includes(index)
        ? openIndexes.filter(i => i !== index)
        : [...openIndexes, index]
      );
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <Container>
      <Accent size={200} color="#fff" style={{ top: '10%', left: '10%', transform: 'rotate(45deg)' }} />
      <Accent size={150} color="#fff" style={{ top: '30%', right: '20%', transform: 'rotate(-45deg)' }} />
      <Accent size={180} color="#fff" style={{ bottom: '20%', left: '15%', transform: 'rotate(30deg)' }} />
      <Accent size={160} color="#fff" style={{ bottom: '40%', right: '25%', transform: 'rotate(-30deg)' }} />
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

// Export individual components
export { Container as MinimalContainer };
export { MinimalButton };
export { Content as MinimalContent };
export { AccordionItem as MinimalAccordionItem };
export { Accent };

export const Example = () => {
  const items = [
    { title: "Minimalist Style", content: "Clean, minimal accordion design." },
    { title: "Subtle accents", content: "Simple color highlights." },
    { title: "Elegant", content: "Refined user interface." }
  ];

  return <Accordion items={items} />;
};
