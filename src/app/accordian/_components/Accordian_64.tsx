'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #d4a373 0%, #e9edc9 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const DuneButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(212, 163, 115, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  color: #774936;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 4px 15px rgba(212, 163, 115, 0.2),
    0 1px 3px rgba(212, 163, 115, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(212, 163, 115, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.8s;
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(212, 163, 115, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  color: #774936;
  box-shadow: 
    0 4px 15px rgba(212, 163, 115, 0.1),
    0 1px 3px rgba(212, 163, 115, 0.05);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #774936;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #774936;
  font-size: 1.25rem;
  opacity: 0.8;
`;

const SandDune = styled(motion.div)<{ height: number }>`
  position: absolute;
  width: 100%;
  height: ${props => props.height}px;
  background: rgba(212, 163, 115, 0.2);
  border-radius: 50%;
  filter: blur(20px);
  transform-origin: center;
`;

const SandParticle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(212, 163, 115, 0.4);
  border-radius: 50%;
`;

const HeatHaze = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: overlay;
  pointer-events: none;
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
      <DuneButton
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
      </DuneButton>
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
      <HeatHaze
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {[...Array(3)].map((_, i) => (
        <SandDune
          key={i}
          height={200 + i * 50}
          style={{
            bottom: `-${100 + i * 30}px`,
            left: `${-20 + i * 10}%`,
            right: `${-20 + i * 10}%`,
          }}
          animate={{
            scaleX: [1, 1.1, 1],
            translateX: [0, 20, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(50)].map((_, i) => (
        <SandParticle
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 30 - 15],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
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
export { Container as DuneContainer };
export { DuneButton };
export { Content as DuneContent };
export { AccordionItem as DuneAccordionItem }; 