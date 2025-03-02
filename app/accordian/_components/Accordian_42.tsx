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
  background: linear-gradient(135deg, #2c3e50 0%, #3f4c6b 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MetalButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(192, 192, 192, 0.8),
    rgba(128, 128, 128, 0.6)
  );
  backdrop-filter: blur(10px);
  border: none;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 2px 10px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: ${shimmer} 3s linear infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: linear-gradient(
    135deg,
    rgba(192, 192, 192, 0.6),
    rgba(128, 128, 128, 0.4)
  );
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 2px 10px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 1;
  position: relative;
`;


const RippleEffect = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  animation: ${ripple} 0.8s ease-out forwards;
`;

const ShimmerButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s linear infinite;
  }
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  let rippleCount = 0;

  const handleRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    rippleCount += 1;
    const newRipple = { x, y, id: rippleCount };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 800);
  };

  return (
    <div className="mb-4">
      <ShimmerButton
        onClick={(e) => {
          handleRipple(e);
          onClick();
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
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
        <Title>{title}</Title>
      </ShimmerButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              scale: 1,
              transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 },
                scale: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              scale: 0.95,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }
            }}
          >
            <Content>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.3
                  }
                }}
              >
                {content}
              </motion.div>
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