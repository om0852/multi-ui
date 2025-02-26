'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const QuantumButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 150, 255, 0.1);
  border: 1px solid #00c3ff;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 195, 255, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 195, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s;
  }

  &:hover:before {
    transform: translateX(100%);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 150, 255, 0.1);
  border: 1px solid #00c3ff;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 195, 255, 0.3);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00c3ff;
  text-shadow: 0 0 5px #00c3ff;
`;

const IconWrapper = styled(motion.div)`
  color: #00c3ff;
  font-size: 1.25rem;
  text-shadow: 0 0 5px #00c3ff;
`;

const Circuit = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const CircuitLine = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: 2px;
  background: #00c3ff;
  opacity: 0.3;

  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00c3ff;
    border-radius: 50%;
    top: -2px;
    right: -3px;
    box-shadow: 0 0 8px #00c3ff;
  }
`;

const QuantumParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00c3ff;
  border-radius: 50%;
  box-shadow: 0 0 8px #00c3ff;
`;

const QuantumWave = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid #00c3ff;
  border-radius: 50%;
  opacity: 0;
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
      <QuantumButton
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
      </QuantumButton>
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
        {[...Array(10)].map((_, i) => (
          <CircuitLine
            key={i}
            size={Math.random() * 100 + 50}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <QuantumParticle
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <QuantumWave
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </Circuit>
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
export { Container as QuantumContainer };
export { QuantumButton };
export { Content as QuantumContent };
export { AccordionItem as QuantumAccordionItem }; 