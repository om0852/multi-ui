'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const shadowShift = keyframes`
  0%, 100% { filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)); }
  50% { filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.3)); }
`;

const Container = styled.div`
  padding: 1rem;
  background: #f5f5f5;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const PaperButton = styled(motion.button)`
  width: 100%;
  background: white;
  padding: 1rem;
  color: #333;
  position: relative;
  overflow: hidden;
  border: none;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  clip-path: polygon(
    0% 0%,
    97% 0%,
    100% 3%,
    100% 100%,
    3% 100%,
    0% 97%
  );
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.1) 50%);
  }
  
  &:hover {
    animation: ${shadowShift} 1s ease-in-out infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: white;
  padding: 1rem;
  color: #333;
  position: relative;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  clip-path: polygon(
    0% 0%,
    97% 0%,
    100% 3%,
    100% 100%,
    3% 100%,
    0% 97%
  );
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.1) 50%);
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #333;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: #666;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
`;

const PaperFold = styled.div<{ angle: number }>`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.03);
  transform: rotate(${props => props.angle}deg);
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
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
      <PaperButton
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
      </PaperButton>
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
      <PaperFold angle={0} style={{ top: '10%', left: '10%' }} />
      <PaperFold angle={90} style={{ top: '30%', right: '20%' }} />
      <PaperFold angle={45} style={{ bottom: '20%', left: '15%' }} />
      <PaperFold angle={-45} style={{ bottom: '40%', right: '25%' }} />
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
export { Container as PaperContainer };
export { PaperButton };
export { Content as PaperContent };
export { AccordionItem as PaperAccordionItem };
export { PaperFold }; 