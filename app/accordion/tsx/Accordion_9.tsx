'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const matrixRain = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const Container = styled.div`
  padding: 1rem;
  background: #000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MatrixButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #0f0;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 5px #0f0;
  

  &:hover {
    background: rgba(0, 255, 0, 0.2);
    border-color: rgba(0, 255, 0, 0.5);
    text-shadow: 0 0 10px #0f0;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #0f0;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 3px #0f0;
  
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  font-family: monospace;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: #0f0;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 5px #0f0;
`;

const RainColumn = styled.div<{ delay: number; duration: number }>`
  position: absolute;
  top: 0;
  font-family: monospace;
  color: #0f0;
  font-size: 14px;
  line-height: 1;
  opacity: 0.3;
  animation: ${matrixRain} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  white-space: pre;
`;

const generateRandomBinary = (length: number) => {
  return Array.from({ length }, () => Math.round(Math.random())).join('');
};

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

 export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-4">
      <MatrixButton
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
      </MatrixButton>
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
export { Container as MatrixContainer };
export { MatrixButton };
export { Content as MatrixContent };
export { AccordionItem as MatrixAccordionItem };
export { RainColumn };

export const Example = () => {
  const items = [
    { title: "Matrix Style", content: "Digital rain effect accordion." },
    { title: "Green Code", content: "Classic matrix-inspired design." },
    { title: "Binary", content: "Flowing binary elements." }
  ];

  return <Accordion items={items} />;
};
