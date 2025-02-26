'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const flow = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: #1a1a1a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CircuitButton = styled(motion.button)`
  width: 100%;
  background: #222;
  border: 1px solid #333;
  padding: 1rem;
  color: #00ff00;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(90deg, #222 21px, transparent 1%) center,
      linear-gradient(#222 21px, transparent 1%) center,
      #333;
    background-size: 22px 22px;
    opacity: 0.2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::after {
    transform: translateX(100%);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: #222;
  border: 1px solid #333;
  padding: 1rem;
  color: rgba(0, 255, 0, 0.8);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(90deg, #222 21px, transparent 1%) center,
      linear-gradient(#222 21px, transparent 1%) center,
      #333;
    background-size: 22px 22px;
    opacity: 0.2;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ff00;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  position: relative;
  z-index: 1;
  font-family: 'Courier New', monospace;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff00;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
`;

const Circuit = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const CircuitPath = styled.path`
  stroke: #00ff00;
  stroke-width: 1;
  fill: none;
  opacity: 0.3;
  stroke-dasharray: 1000;
  animation: ${flow} 20s linear infinite;
`;

const CircuitDot = styled.div<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #00ff00;
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
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
      <CircuitButton
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
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
      </CircuitButton>
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
      <Circuit>
        <CircuitPath d="M10,30 Q50,10 90,50 T200,90" />
        <CircuitPath d="M50,100 Q90,150 150,120 T250,150" />
        <CircuitPath d="M150,20 Q190,50 250,40 T350,60" />
      </Circuit>
      <CircuitDot size={4} style={{ top: '20%', left: '30%' }} />
      <CircuitDot size={6} style={{ top: '40%', right: '20%' }} />
      <CircuitDot size={4} style={{ bottom: '30%', left: '40%' }} />
      <CircuitDot size={6} style={{ bottom: '20%', right: '35%' }} />
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
export { Container as CircuitContainer };
export { CircuitButton };
export { Content as CircuitContent };
export { AccordionItem as CircuitAccordionItem };
export { Circuit, CircuitPath, CircuitDot }; 