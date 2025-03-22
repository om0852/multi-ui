'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glow = keyframes`
  0%, 100% { filter: brightness(1) blur(3px); }
  50% { filter: brightness(1.2) blur(4px); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const GlowButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: none;
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: visible;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      90deg,
      #ff0080,
      #7928ca,
      #ff0080
    );
    background-size: 200% 100%;
    animation: ${borderFlow} 4s linear infinite;
    border-radius: 10px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: inherit;
    border-radius: 10px;
    z-index: -1;
    animation: ${glow} 2s ease-in-out infinite;
    filter: blur(4px);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  color: white;
  position: relative;
  border-radius: 8px;
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(
      90deg,
      #7928ca,
      #ff0080,
      #7928ca
    );
    background-size: 200% 100%;
    animation: ${borderFlow} 4s linear infinite;
    border-radius: 9px;
    z-index: -1;
    opacity: 0.5;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled(motion.div)`
  color: white;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(
      90deg,
      #ff0080,
      #7928ca,
      #ff0080
    );
    background-size: 200% 100%;
    animation: ${borderFlow} 4s linear infinite;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
  }
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
`;

interface CSSPropertiesWithCustomProps extends React.CSSProperties {
  '--x': string;
  '--y': string;
}

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="mb-4">
      <GlowButton
        onClick={onClick}
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <GlowEffect
          style={{
            opacity: 1,
            '--x': `${mousePosition.x}%`,
            '--y': `${mousePosition.y}%`
          } as CSSPropertiesWithCustomProps}
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
      </GlowButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              scale: 1,
              transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 },
                scale: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              scale: 0.95,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
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
export { Container as GlowContainer };
export { GlowButton };
export { Content as GlowContent };
export { AccordionItem as GlowAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Glowing Elements", content: "Radiant UI with illuminated components." },
    { title: "Light effects", content: "Soft glowing edges and highlights." },
    { title: "Ethereal design", content: "Luminous interface with ambient lighting." }
  ];

  return <Accordion items={items} />;
}; 