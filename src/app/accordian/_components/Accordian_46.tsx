'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const dataFlow = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CircuitButton = styled(motion.button)`
  width: 100%;
  background: rgba(16, 36, 64, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #64ffda;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(16, 36, 64, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid #64ffda;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #64ffda;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #64ffda;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircuitPath = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const CircuitLine = styled.path`
  stroke: #64ffda;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dataFlow} 3s linear infinite;
`;

const DataNode = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #64ffda;
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 10px #64ffda;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <div>
      <CircuitButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <CircuitPath>
          <CircuitLine d="M0,50 Q25,50 50,25 T100,50" />
          <CircuitLine d="M0,75 Q50,75 75,50 T150,75" />
          <CircuitLine d="M50,0 Q50,25 75,50 T50,100" />
        </CircuitPath>
        {nodes.map((node, index) => (
          <DataNode
            key={index}
            size={node.size}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
        ))}
        <Title>
          {title}
          <IconWrapper
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.2 : 1
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            ▾
          </IconWrapper>
        </Title>
      </CircuitButton>
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
export { Container as CircuitContainer };
export { CircuitButton };
export { Content as CircuitContent };
export { AccordionItem as CircuitAccordionItem }; 