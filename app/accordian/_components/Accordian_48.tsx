'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const prismShine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const crystalGlow = keyframes`
  0%, 100% { filter: hue-rotate(0deg) brightness(1); }
  50% { filter: hue-rotate(45deg) brightness(1.2); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const PrismButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${prismShine} 3s linear infinite;
    pointer-events: none;
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
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 15px rgba(255, 255, 255, 0.1),
    inset 0 0 15px rgba(255, 255, 255, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Crystal = styled(motion.div)<{ size: number; rotation: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(
    ${props => props.rotation}deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.3)
  );
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${crystalGlow} 3s ease-in-out infinite;
  pointer-events: none;
`;

const RefractionLine = styled(motion.div)<{ angle: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg);
  pointer-events: none;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const crystals = Array.from({ length: 8 }, () => ({
    size: Math.random() * 60 + 40,
    rotation: Math.random() * 360,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const refractionLines = Array.from({ length: 6 }, (_, i) => ({
    angle: (i * 30) + Math.random() * 10
  }));

  return (
    <div>
      <PrismButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {crystals.map((crystal, index) => (
          <Crystal
            key={`crystal-${index}`}
            size={crystal.size}
            rotation={crystal.rotation}
            style={{
              left: `${crystal.x}%`,
              top: `${crystal.y}%`,
              transform: `translate(-50%, -50%) rotate(${crystal.rotation}deg)`,
              animationDelay: `${crystal.delay}s`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [crystal.rotation, crystal.rotation + 360]
            }}
            transition={{
              duration: 6 + crystal.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        {refractionLines.map((line, index) => (
          <RefractionLine
            key={`line-${index}`}
            angle={line.angle}
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
        ))}
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
      </PrismButton>
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
export { Container as PrismContainer };
export { PrismButton };
export { Content as PrismContent };
export { AccordionItem as PrismAccordionItem }; 