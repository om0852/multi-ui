'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const frost = keyframes`
  0% { opacity: 0.3; transform: scale(0.95); filter: blur(3px); }
  50% { opacity: 0.7; transform: scale(1); filter: blur(5px); }
  100% { opacity: 0.3; transform: scale(0.95); filter: blur(3px); }
`;

const snowfall = keyframes`
  0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
  50% { transform: translateY(20px) rotate(180deg); opacity: 1; }
  100% { transform: translateY(50px) rotate(360deg); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const FrostButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
  color: #2d3748;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  color: #2d3748;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #2d3748;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: #2d3748;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
`;

const FrostEffect = styled.div<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  filter: blur(3px);
  animation: ${frost} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const Snowflake = styled.div<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  animation: ${snowfall} ${props => 3 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.6;
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
      <FrostButton
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
      </FrostButton>
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
      <FrostEffect size={100} delay={0} style={{ top: '10%', left: '10%' }} />
      <FrostEffect size={80} delay={1} style={{ top: '30%', right: '20%' }} />
      <FrostEffect size={120} delay={2} style={{ bottom: '20%', left: '15%' }} />
      <Snowflake size={4} delay={0} style={{ left: '20%' }} />
      <Snowflake size={6} delay={1} style={{ left: '40%' }} />
      <Snowflake size={4} delay={2} style={{ left: '60%' }} />
      <Snowflake size={6} delay={3} style={{ left: '80%' }} />
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
export { Container as FrostContainer };
export { FrostButton };
export { Content as FrostContent };
export { AccordionItem as FrostAccordionItem };
export { FrostEffect, Snowflake }; 

export const Example = () => {
  const items = [
    { title: "Winter Theme", content: "Frost-covered accordion design." },
    { title: "Ice effects", content: "Snowflakes and frozen aesthetics." },
    { title: "Cool tones", content: "Icy blue color palette." }
  ];

  return <Accordion items={items} />;
}; 