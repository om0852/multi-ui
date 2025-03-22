'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 5px #ff00cc, 0 0 10px #ff00cc, 0 0 20px #ff00cc; }
  50% { box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
`;

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 5px #ff00cc, 0 0 10px #ff00cc; }
  50% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; }
`;

const borderPulse = keyframes`
  0%, 100% { border-color: #ff00cc; }
  50% { border-color: #00ffff; }
`;

const Container = styled.div`
  padding: 1rem;
  background: #0a0a0a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NeonButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #ff00cc;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  animation: ${borderPulse} 4s infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &:hover {
    animation: ${pulse} 2s infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #ff00cc;
  padding: 1rem;
  color: white;
  position: relative;
  border-radius: 8px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 0, 204, 0.1),
      transparent
    );
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  animation: ${textGlow} 4s infinite;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: white;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  animation: ${textGlow} 4s infinite;
`;

const NeonLine = styled.div<{ color: string; delay: number }>`
  position: absolute;
  width: 100px;
  height: 2px;
  background: ${props => props.color};
  filter: blur(2px);
  opacity: 0.5;
  animation: ${pulse} ${props => 4 + props.delay}s infinite;
  animation-delay: ${props => props.delay}s;
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
      <NeonButton
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
      </NeonButton>
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
      <NeonLine color="#ff00cc" delay={0} style={{ top: '10%', left: '10%', transform: 'rotate(45deg)' }} />
      <NeonLine color="#00ffff" delay={1} style={{ top: '30%', right: '20%', transform: 'rotate(-45deg)' }} />
      <NeonLine color="#ff00cc" delay={2} style={{ bottom: '20%', left: '15%', transform: 'rotate(-30deg)' }} />
      <NeonLine color="#00ffff" delay={3} style={{ bottom: '40%', right: '25%', transform: 'rotate(30deg)' }} />
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
export { Container as NeonContainer };
export { NeonButton };
export { Content as NeonContent };
export { AccordionItem as NeonAccordionItem };
export { NeonLine }; 

export const Example = () => {
  const items = [
    { title: "Neon Glow", content: "Vibrant electric colors with glowing effects." },
    { title: "Retro Vibes", content: "80s inspired neon aesthetic." },
    { title: "High contrast", content: "Bold outlines with neon accents." }
  ];

  return <Accordion items={items} />;
}; 