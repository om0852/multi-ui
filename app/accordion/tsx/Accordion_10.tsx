'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const gridAnimation = keyframes`
  0% { transform: perspective(1000px) rotateX(60deg) translateZ(0); }
  100% { transform: perspective(1000px) rotateX(60deg) translateZ(100px); }
`;

const neonPulse = keyframes`
  0%, 100% { text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff; }
  50% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0%,
      transparent 98%,
      rgba(255, 0, 255, 0.1) 98%,
      rgba(255, 0, 255, 0.1) 100%
    ),
    repeating-linear-gradient(
      180deg,
      transparent 0%,
      transparent 98%,
      rgba(0, 255, 255, 0.1) 98%,
      rgba(0, 255, 255, 0.1) 100%
    );
    background-size: 50px 50px;
    transform-origin: top;
    animation: ${gridAnimation} 15s linear infinite;
  }
`;

const RetroButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #ff00ff, #00ffff);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid;
  border-image: linear-gradient(45deg, #00ffff, #ff00ff) 1;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  position: relative;
  z-index: 1;
  animation: ${neonPulse} 2s ease-in-out infinite;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  animation: ${neonPulse} 2s ease-in-out infinite;
  animation-delay: -1s;
`;

const SunBackground = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
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
      <RetroButton
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
      </RetroButton>
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
      <SunBackground />
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
export { Container as RetroContainer };
export { RetroButton };
export { Content as RetroContent };
export { AccordionItem as RetroAccordionItem };
export { SunBackground };

export const Example = () => {
  const items = [
    { title: "Retro Design", content: "A vintage-inspired accordion." },
    { title: "Sunset colors", content: "Warm gradient color scheme." },
    { title: "Classic style", content: "Nostalgic UI elements." }
  ];

  return <Accordion items={items} />;
};
