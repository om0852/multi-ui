'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #0a1f0a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const ForestButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 50, 0, 0.7);
  border: 2px solid #00ff66;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 255, 102, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #00ff66, #66ff00);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 2px;
    background: rgba(0, 50, 0, 0.7);
    border-radius: inherit;
    z-index: 1;
  }

  &:hover:before {
    opacity: 0.5;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 50, 0, 0.7);
  border: 1px solid #00ff66;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 255, 102, 0.2);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ff66;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 255, 102, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #00ff66;
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 255, 102, 0.5);
`;

const Firefly = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff66;
  border-radius: 50%;
  box-shadow: 
    0 0 10px #00ff66,
    0 0 20px #00ff66,
    0 0 30px #00ff66;
`;

const Vine = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, #00ff66, transparent);
  transform-origin: top;
`;

const Leaf = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 10px;
  background: #00ff66;
  border-radius: 10px 0;
  box-shadow: 0 0 10px rgba(0, 255, 102, 0.3);
  opacity: 0.6;
`;

const MoonGlow = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(0, 255, 102, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(10px);
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
      <ForestButton
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
      </ForestButton>
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
      <MoonGlow
        style={{ top: '10%', right: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {[...Array(20)].map((_, i) => (
        <Firefly
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <Vine
          key={i}
          style={{
            left: `${i * 25}%`,
            height: `${Math.random() * 200 + 100}px`,
          }}
          animate={{
            skewX: [0, 5, -5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[...Array(3)].map((_, j) => (
            <Leaf
              key={j}
              style={{
                top: `${j * 30}%`,
                left: j % 2 === 0 ? '100%' : '-100%',
                transform: `rotate(${j % 2 === 0 ? -45 : 45}deg)`,
              }}
              animate={{
                rotate: [j % 2 === 0 ? -45 : 45, j % 2 === 0 ? -55 : 55],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: j * 0.3,
              }}
            />
          ))}
        </Vine>
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
export { Container as ForestContainer };
export { ForestButton };
export { Content as ForestContent };
export { AccordionItem as ForestAccordionItem }; 