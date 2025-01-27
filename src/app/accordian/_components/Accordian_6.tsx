'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const Orb = styled.div<{ size: number; color: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0.5;
  animation: float ${props => 3 + props.delay}s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }
`;

const FloatingButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
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
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
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
      <FloatingButton
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
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
      </FloatingButton>
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
      <Orb size={100} color="#4facfe" delay={0} style={{ top: '10%', left: '10%' }} />
      <Orb size={150} color="#00f2fe" delay={1} style={{ top: '60%', right: '20%' }} />
      <Orb size={80} color="#0099ff" delay={2} style={{ bottom: '10%', left: '30%' }} />
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
export { Container as FloatingContainer };
export { FloatingButton };
export { Content as FloatingContent };
export { AccordionItem as FloatingAccordionItem };
export { Orb };
