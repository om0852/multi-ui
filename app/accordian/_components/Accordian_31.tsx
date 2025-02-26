'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(66, 153, 225, 0.5); }
  50% { box-shadow: 0 0 30px rgba(66, 153, 225, 0.8); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const FloatingButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 153, 225, 0.3);
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  animation: ${glow} 3s infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(66, 153, 225, 0.2),
      transparent
    );
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
  border: 1px solid rgba(66, 153, 225, 0.2);
  padding: 1.5rem;
  color: white;
  position: relative;
  border-radius: 16px;
  margin-top: 1rem;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: block;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(66, 153, 225, 0.8);
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FloatingElement = styled.div<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(66, 153, 225, 0.2);
  border-radius: 50%;
  animation: ${float} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-6">
      <FloatingButton
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Title>{title}</Title>
        <IconWrapper
          animate={{ 
            rotate: isOpen ? 360 : 0,
            scale: isOpen ? 1.2 : 1,
            backgroundColor: isOpen ? 'rgba(66, 153, 225, 0.2)' : 'rgba(255, 255, 255, 0.1)'
          }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          {isOpen ? '−' : '+'}
        </IconWrapper>
      </FloatingButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeOut"
              }
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              transition: {
                duration: 0.3,
                ease: "easeIn"
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
      <FloatingElement size={100} delay={0} style={{ top: '10%', left: '10%' }} />
      <FloatingElement size={80} delay={1} style={{ top: '30%', right: '20%' }} />
      <FloatingElement size={120} delay={2} style={{ bottom: '20%', left: '15%' }} />
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
export { FloatingElement }; 