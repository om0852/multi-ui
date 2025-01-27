'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const liquidFlow = keyframes`
  0% { transform: translate(-50%, -75%) rotate(0deg); }
  50% { transform: translate(-50%, -75%) rotate(180deg); }
  100% { transform: translate(-50%, -75%) rotate(360deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000428, #004e92);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const LiquidButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    top: 50%;
    left: 50%;
    animation: ${liquidFlow} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    top: 50%;
    left: 50%;
    animation: ${liquidFlow} 8s linear infinite;
    animation-delay: -3s;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
`;

const ContentText = styled.div`
  position: relative;
  z-index: 2;
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
      <LiquidButton
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
      </LiquidButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Content>
              <ContentText>
                {content}
              </ContentText>
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
export { Container as LiquidContainer };
export { LiquidButton };
export { Content as LiquidContent };
export { AccordionItem as LiquidAccordionItem };
