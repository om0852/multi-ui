'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const gridFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const neonPulse = keyframes`
  0%, 100% { filter: brightness(1) drop-shadow(0 0 5px #0ff); }
  50% { filter: brightness(1.2) drop-shadow(0 0 10px #0ff); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000235 0%, #001035 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 25px 25px;
    animation: ${gridFlow} 20s linear infinite;
  }
`;

const GridButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 35, 85, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-align: left;
  margin: 1rem 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(0, 35, 85, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(90deg, #0ff, #00f, #0ff);
    background-size: 200% 100%;
    animation: ${neonPulse} 2s ease-in-out infinite;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #0ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #0ff;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const GridLines = styled(motion.div)`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: 
    linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 10px 10px;
  opacity: 0.5;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div>
      <GridButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <GridLines 
          animate={{
            opacity: isOpen ? 0.8 : 0.5,
            backgroundSize: isOpen ? "8px 8px" : "10px 10px"
          }}
          transition={{ duration: 0.3 }}
        />
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
      </GridButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
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
export { Container as GridContainer };
export { GridButton };
export { Content as GridContent };
export { AccordionItem as GridAccordionItem }; 