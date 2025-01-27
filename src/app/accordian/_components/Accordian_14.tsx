'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const holographicShimmer = keyframes`
  0% { background-position: 200% 50%; }
  100% { background-position: -200% 50%; }
`;

const rainbowBorder = keyframes`
  0% { border-color: #ff0000; }
  17% { border-color: #ff00ff; }
  33% { border-color: #0000ff; }
  50% { border-color: #00ffff; }
  67% { border-color: #00ff00; }
  83% { border-color: #ffff00; }
  100% { border-color: #ff0000; }
`;

const shine = keyframes`
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000428 0%, #004e92 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const HoloButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      90deg,
      #ff0000, #ff00ff, #0000ff,
      #00ffff, #00ff00, #ffff00, #ff0000
    );
    background-size: 200% 100%;
    animation: ${holographicShimmer} 3s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%) rotate(45deg);
    animation: ${shine} 3s ease-in-out infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  border-radius: 0.5rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      90deg,
      #ff0000, #ff00ff, #0000ff,
      #00ffff, #00ff00, #ffff00, #ff0000
    );
    background-size: 200% 100%;
    animation: ${holographicShimmer} 3s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 1;
  background: linear-gradient(
    90deg,
    #ff0000, #ff00ff, #0000ff,
    #00ffff, #00ff00, #ffff00, #ff0000
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${holographicShimmer} 3s linear infinite;
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const HoloPrism = styled.div<{ size: number; rotation: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.2),
    rgba(255, 255, 0, 0.2),
    rgba(0, 255, 0, 0.2),
    rgba(0, 255, 255, 0.2),
    rgba(0, 0, 255, 0.2),
    rgba(255, 0, 255, 0.2)
  );
  transform: rotate(${props => props.rotation}deg);
  filter: blur(20px);
  opacity: 0.3;
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
      <HoloButton
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
      </HoloButton>
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
      <HoloPrism size={200} rotation={30} style={{ top: '10%', left: '10%' }} />
      <HoloPrism size={150} rotation={-15} style={{ top: '30%', right: '20%' }} />
      <HoloPrism size={180} rotation={45} style={{ bottom: '20%', left: '15%' }} />
      <HoloPrism size={160} rotation={-30} style={{ bottom: '40%', right: '25%' }} />
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
export { Container as HoloContainer };
export { HoloButton };
export { Content as HoloContent };
export { AccordionItem as HoloAccordionItem };
export { HoloPrism };
