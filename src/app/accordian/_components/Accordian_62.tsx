'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #1a0f0f;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MagmaButton = styled(motion.button)`
  width: 100%;
  background: #2a1515;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #ff5722, #ff9800);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 2px;
    background: #2a1515;
    border-radius: inherit;
    z-index: 1;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: #2a1515;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(255, 87, 34, 0.2);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #ff5722;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(255, 87, 34, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #ff5722;
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(255, 87, 34, 0.5);
`;

const LavaFlow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
`;

const LavaBubble = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at 30% 30%,
    #ff9800,
    #ff5722
  );
  border-radius: 50%;
  filter: blur(5px);
`;

const LavaStream = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ff5722, transparent);
  filter: blur(2px);
  opacity: 0.6;
`;

const HeatDistortion = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
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
      <MagmaButton
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
      </MagmaButton>
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
      <LavaFlow>
        {[...Array(10)].map((_, i) => (
          <LavaBubble
            key={i}
            size={Math.random() * 60 + 40}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.8, 0],
              scale: [1, 1.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <LavaStream
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180 - 90}deg)`,
            }}
            animate={{
              x: [-200, 400],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </LavaFlow>
      <HeatDistortion
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
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
export { Container as MagmaContainer };
export { MagmaButton };
export { Content as MagmaContent };
export { AccordionItem as MagmaAccordionItem }; 