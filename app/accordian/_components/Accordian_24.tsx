'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateZ(20px); }
  50% { transform: translateZ(30px); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const LayerButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%) translateZ(10px);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%) translateZ(10px);
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: translateZ(-10px);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
  transform-style: preserve-3d;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    transform: translateZ(-5px);
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  transform: translateZ(20px);
`;

const IconWrapper = styled(motion.div)`
  color: white;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: translateZ(20px);
`;

const Layer = styled.div<{ depth: number; color: string }>`
  position: absolute;
  inset: 0;
  background: ${props => props.color};
  transform: translateZ(${props => props.depth}px);
  pointer-events: none;
  opacity: 0.1;
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
      <LayerButton
        onClick={onClick}
        whileHover={{ 
          scale: 1.02,
          rotateX: 5,
          rotateY: 5
        }}
        whileTap={{ 
          scale: 0.98,
          rotateX: -2,
          rotateY: -2
        }}
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
      </LayerButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0, rotateX: -20 }}
            animate={{ height: 'auto', opacity: 1, rotateX: 0 }}
            exit={{ height: 0, opacity: 0, rotateX: -20 }}
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
      <Layer depth={-40} color="#2c3e50" />
      <Layer depth={-30} color="#34495e" />
      <Layer depth={-20} color="#2980b9" />
      <Layer depth={-10} color="#3498db" />
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
export { Container as LayerContainer };
export { LayerButton };
export { Content as LayerContent };
export { AccordionItem as LayerAccordionItem };
export { Layer }; 