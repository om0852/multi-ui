'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const magneticPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
`;

const fieldLines = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const energyFlow = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000000 0%, #1a237e 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MagneticButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(66, 165, 245, 0.1) 10px,
      rgba(66, 165, 245, 0.1) 20px
    );
    opacity: 0.3;
    animation: ${fieldLines} 20s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(66, 165, 245, 0.4),
      transparent
    );
    transform: translateX(-100%);
    animation: ${energyFlow} 2s ease-in-out infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(66, 165, 245, 0.1) 10px,
      rgba(66, 165, 245, 0.1) 20px
    );
    opacity: 0.2;
    animation: ${fieldLines} 15s linear infinite;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #42a5f5;
  text-shadow: 0 0 10px rgba(66, 165, 245, 0.5);
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: #42a5f5;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(66, 165, 245, 0.5);
`;

const MagneticField = styled.div<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle,
    ${props => props.color} 0%,
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0.3;
  animation: ${magneticPulse} 3s ease-in-out infinite;
  filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    inset: 10%;
    border: 2px solid ${props => props.color};
    border-radius: 50%;
    opacity: 0.2;
    animation: ${fieldLines} 10s linear infinite;
  }
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
      <MagneticButton
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
      </MagneticButton>
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
      <MagneticField size={300} color="#42a5f5" style={{ top: '10%', left: '10%' }} />
      <MagneticField size={200} color="#2196f3" style={{ top: '40%', right: '20%' }} />
      <MagneticField size={250} color="#1976d2" style={{ bottom: '20%', left: '30%' }} />
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
export { Container as MagneticContainer };
export { MagneticButton };
export { Content as MagneticContent };
export { AccordionItem as MagneticAccordionItem };
export { MagneticField };
