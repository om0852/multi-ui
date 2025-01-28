'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MetalButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(145deg, #2d2d2d, #1c1c1c);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 
    -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: metalShine 5s linear infinite;
  }

  @keyframes metalShine {
    0% { background-position: -200% -200%; }
    100% { background-position: 200% 200%; }
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: linear-gradient(145deg, #2d2d2d, #1c1c1c);
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
  box-shadow: 
    inset -5px -5px 10px rgba(255, 255, 255, 0.05),
    inset 5px 5px 15px rgba(0, 0, 0, 0.5);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  opacity: 0.8;
`;

const LiquidBubble = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.05) 40%,
    transparent 80%
  );
  border-radius: 50%;
  filter: blur(2px);
`;

const MetalShine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 45%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 55%,
    transparent 70%
  );
  background-size: 200% 200%;
  animation: metalShine 8s linear infinite;
  pointer-events: none;
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
      <MetalButton
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
      </MetalButton>
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
      <MetalShine />
      {[...Array(10)].map((_, i) => (
        <LiquidBubble
          key={i}
          size={Math.random() * 100 + 50}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
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
export { Container as LiquidMetalContainer };
export { MetalButton };
export { Content as LiquidMetalContent };
export { AccordionItem as LiquidMetalAccordionItem }; 