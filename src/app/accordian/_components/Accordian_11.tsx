'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -10px) rotate(5deg); }
  50% { transform: translate(-5px, 5px) rotate(-5deg); }
  75% { transform: translate(-10px, -5px) rotate(3deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.8; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #090216 0%, #170b34 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const Particle = styled.div<{ size: number; color: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(3px);
  opacity: 0.6;
  animation: ${float} ${props => 5 + props.delay}s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle, ${props => props.color}40, transparent);
    border-radius: 50%;
    animation: ${pulse} ${props => 3 + props.delay}s ease-in-out infinite;
  }
`;

const CosmicButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  
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
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 1rem;
    background: linear-gradient(45deg, #7400b8, #80ffdb) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 1rem;
    background: linear-gradient(45deg, #80ffdb, #7400b8) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 0 10px rgba(128, 255, 219, 0.5);
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(128, 255, 219, 0.5);
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
      <CosmicButton
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
      </CosmicButton>
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
      <Particle size={20} color="#80ffdb" delay={0} style={{ top: '10%', left: '20%' }} />
      <Particle size={15} color="#7400b8" delay={1} style={{ top: '30%', right: '10%' }} />
      <Particle size={25} color="#5390d9" delay={2} style={{ bottom: '20%', left: '15%' }} />
      <Particle size={18} color="#48bfe3" delay={3} style={{ bottom: '40%', right: '25%' }} />
      <Particle size={22} color="#64dfdf" delay={4} style={{ top: '50%', left: '40%' }} />
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
export { Container as CosmicContainer };
export { CosmicButton };
export { Content as CosmicContent };
export { AccordionItem as CosmicAccordionItem };
export { Particle };
