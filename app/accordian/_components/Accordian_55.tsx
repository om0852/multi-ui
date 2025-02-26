'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1f4037 0%, #99f2c8 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const FloatingButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
  color: #1f4037;
  position: relative;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 100px rgba(153, 242, 200, 0.2);
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #1f4037, #99f2c8);
    border-radius: 1.5rem;
    z-index: -1;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.3s ease;
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5rem;
  padding: 1rem;
  color: #1f4037;
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f4037;
`;

const IconWrapper = styled(motion.div)`
  color: #1f4037;
  font-size: 1.25rem;
`;

const FloatingIsland = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.6}px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  
  &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 10%;
    right: 10%;
    bottom: 0;
    background: inherit;
    border-radius: 50%;
    transform: scaleX(0.8);
    filter: blur(10px);
    opacity: 0.6;
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
      <FloatingButton
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -5 }}
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
      </FloatingButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
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
      <FloatingIsland
        size={200}
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingIsland
        size={150}
        style={{ top: '30%', right: '10%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingIsland
        size={180}
        style={{ bottom: '15%', left: '15%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
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
export { Container as FloatingContainer };
export { FloatingButton };
export { Content as FloatingContent };
export { AccordionItem as FloatingAccordionItem }; 