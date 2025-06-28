'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const patternShift = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const Container = styled.div`
  padding: 1rem;
  background: 
    linear-gradient(45deg, #1a1a1a 25%, transparent 25%) -50px 0,
    linear-gradient(-45deg, #1a1a1a 25%, transparent 25%) -50px 0,
    linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
    linear-gradient(-45deg, transparent 75%, #1a1a1a 75%);
  background-size: 100px 100px;
  background-color: #2a2a2a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const GeometricButton = styled(motion.button)`
  width: 100%;
  background: #2a2a2a;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      repeating-linear-gradient(
        45deg,
        #3498db,
        #3498db 10px,
        #2980b9 10px,
        #2980b9 20px
      );
    opacity: 0.1;
    animation: ${patternShift} 20s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: #2a2a2a;
    clip-path: inherit;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: #2a2a2a;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      repeating-linear-gradient(
        -45deg,
        #e74c3c,
        #e74c3c 10px,
        #c0392b 10px,
        #c0392b 20px
      );
    opacity: 0.1;
    animation: ${patternShift} 20s linear infinite reverse;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #3498db;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: #3498db;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
`;

const GeometricShape = styled.div<{ size: number; color: string; opacity: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  opacity: ${props => props.opacity};
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${patternShift} 30s linear infinite;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

 export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-4">
      <GeometricButton
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
      </GeometricButton>
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

export default  function Accordion({ items, allowMultiple = false }: AccordionProps) {
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
      <GeometricShape size={200} color="#3498db" opacity={0.1} style={{ top: '10%', left: '10%' }} />
      <GeometricShape size={150} color="#e74c3c" opacity={0.1} style={{ top: '30%', right: '20%' }} />
      <GeometricShape size={180} color="#2ecc71" opacity={0.1} style={{ bottom: '20%', left: '15%' }} />
      <GeometricShape size={160} color="#f1c40f" opacity={0.1} style={{ bottom: '40%', right: '25%' }} />
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
export { Container as GeometricContainer };
export { GeometricButton };
export { Content as GeometricContent };
export { AccordionItem as GeometricAccordionItem };
export { GeometricShape };

export const Example = () => {
  const items = [
    { title: "Geometric Shapes", content: "Accordion with polygon elements." },
    { title: "Bold colors", content: "Vibrant geometric color scheme." },
    { title: "Modern design", content: "Contemporary flat design aesthetics." }
  ];

  return <Accordion items={items} />;
};
