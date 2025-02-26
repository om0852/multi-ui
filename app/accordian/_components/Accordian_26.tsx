'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const ripple = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(4); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MetalButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(145deg, #3d3d3d, #2a2a2a);
  padding: 1rem;
  color: #e0e0e0;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 8px;
  box-shadow: 
    inset -4px -4px 8px rgba(0, 0, 0, 0.5),
    inset 4px 4px 8px rgba(255, 255, 255, 0.1);
  
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
    background-size: 2000px 100%;
    animation: ${shimmer} 5s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.2),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
  padding: 1rem;
  color: #e0e0e0;
  position: relative;
  border-radius: 8px;
  box-shadow: 
    inset -4px -4px 8px rgba(0, 0, 0, 0.5),
    inset 4px 4px 8px rgba(255, 255, 255, 0.1);
  
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
    background-size: 2000px 100%;
    animation: ${shimmer} 8s linear infinite;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: #e0e0e0;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const RippleEffect = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  animation: ${ripple} 1s linear forwards;
  pointer-events: none;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 1000);
    
    onClick();
  };

  return (
    <div className="mb-4">
      <MetalButton
        onClick={handleClick}
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
        {ripples.map(ripple => (
          <RippleEffect
            key={ripple.id}
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </MetalButton>
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
export { Container as MetalContainer };
export { MetalButton };
export { Content as MetalContent };
export { AccordionItem as MetalAccordionItem };
export { RippleEffect }; 