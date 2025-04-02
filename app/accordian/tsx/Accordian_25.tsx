'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const nebulaPulse = keyframes`
  0%, 100% { transform: scale(1); filter: hue-rotate(0deg); }
  50% { transform: scale(1.1); filter: hue-rotate(90deg); }
`;

const starFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #090a0f 0%, #1b2735 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NebulaButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #ff00cc,
      #3333ff,
      #00ffff
    );
    opacity: 0.2;
    mask: radial-gradient(circle at center, transparent 30%, black 70%);
    animation: ${nebulaPulse} 10s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.2) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      #ff00cc,
      #3333ff,
      #00ffff
    );
    opacity: 0.1;
    mask: radial-gradient(circle at center, transparent 40%, black 80%);
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: white;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.3);
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} 1.5s ease-in-out infinite, ${starFloat} 3s ease-in-out infinite;
`;

const Nebula = styled.div<{ color: string }>`
  position: absolute;
  width: 300px;
  height: 300px;
  background: ${props => props.color};
  filter: blur(60px);
  opacity: 0.2;
  animation: ${nebulaPulse} 15s ease-in-out infinite;
  mix-blend-mode: screen;
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
      <NebulaButton
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
      </NebulaButton>
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

  // Add some stars for decoration
  const stars = Array.from({ length: 50 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2
  }));

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
      {stars.map((star, i) => (
        <Star
          key={i}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      <Nebula color="#ff00cc" style={{ top: '10%', left: '10%' }} />
      <Nebula color="#3333ff" style={{ top: '40%', right: '20%' }} />
      <Nebula color="#00ffff" style={{ bottom: '20%', left: '30%' }} />
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
export { Container as NebulaContainer };
export { NebulaButton };
export { Content as NebulaContent };
export { AccordionItem as NebulaAccordionItem };
export { Star, Nebula }; 

export const Example = () => {
  const items = [
    { title: "Space Theme", content: "Cosmic nebula-inspired accordion." },
    { title: "Starry background", content: "Twinkling stars and nebulae." },
    { title: "Galactic", content: "Deep space visual aesthetic." }
  ];

  return <Accordion items={items} />;
}; 