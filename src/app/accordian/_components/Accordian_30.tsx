'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const pixelate = keyframes`
  0%, 100% { 
    box-shadow: 
      2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000;
  }
  50% { 
    box-shadow: 
      3px 3px 0 #000,
      -3px -3px 0 #000,
      3px -3px 0 #000,
      -3px 3px 0 #000;
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const Container = styled.div`
  padding: 1rem;
  background: #2a2a2a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  font-family: 'Press Start 2P', monospace;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 2px,
      transparent 2px,
      transparent 4px
    );
    pointer-events: none;
  }
`;

const RetroButton = styled(motion.button)`
  width: 100%;
  background: #4a4a4a;
  border: 4px solid #000;
  padding: 1rem;
  color: #00ff00;
  position: relative;
  overflow: hidden;
  animation: ${pixelate} 2s infinite;
  image-rendering: pixelated;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 0, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background: rgba(0, 255, 0, 0.5);
    animation: ${scanline} 2s linear infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: #3a3a3a;
  border: 4px solid #000;
  padding: 1rem;
  color: #00ff00;
  position: relative;
  image-rendering: pixelated;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0, 255, 0, 0.1) 10px,
      rgba(0, 255, 0, 0.1) 20px
    );
  }
`;

const Title = styled.span`
  font-size: 1rem;
  color: #00ff00;
  text-shadow: 2px 2px #000;
  position: relative;
  z-index: 1;
  letter-spacing: 1px;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff00;
  font-size: 1rem;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px #000;
`;

const Pixel = styled.div<{ color: string; size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  animation: ${blink} ${props => 1 + props.delay}s steps(2) infinite;
  animation-delay: ${props => props.delay}s;
  box-shadow: 2px 2px 0 #000;
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
      <RetroButton
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
      </RetroButton>
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
      <Pixel color="#00ff00" size={8} delay={0} style={{ top: '10%', left: '10%' }} />
      <Pixel color="#00ff00" size={12} delay={0.5} style={{ top: '30%', right: '20%' }} />
      <Pixel color="#00ff00" size={10} delay={1} style={{ bottom: '20%', left: '15%' }} />
      <Pixel color="#00ff00" size={14} delay={1.5} style={{ bottom: '40%', right: '25%' }} />
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
export { Container as RetroContainer };
export { RetroButton };
export { Content as RetroContent };
export { AccordionItem as RetroAccordionItem };
export { Pixel }; 