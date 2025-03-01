'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const frost = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
  100% { opacity: 0.3; transform: scale(1); }
`;

const snowfall = keyframes`
  0% { transform: translateY(-100%) rotate(0deg); }
  100% { transform: translateY(1000%) rotate(360deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #b8d9f5 0%, #d4e9f7 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const FrostButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1.5rem;
  color: #2c5282;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 4px 6px rgba(31, 41, 55, 0.1),
    0 2px 4px rgba(31, 41, 55, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: inherit;
    z-index: -1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  color: #2c5282;
  position: relative;
  border-radius: 16px;
  box-shadow: 
    0 4px 6px rgba(31, 41, 55, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #2c5282;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #2c5282;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrostEffect = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${frost} ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
`;

const Snowflake = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  animation: ${snowfall} ${props => 5 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
  opacity: 0.6;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const frostEffects = Array.from({ length: 10 }, () => ({
    size: Math.random() * 40 + 20,
    delay: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  const snowflakes = Array.from({ length: 20 }, () => ({
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    x: Math.random() * 100
  }));

  return (
    <div>
      <FrostButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {frostEffects.map((effect, index) => (
          <FrostEffect
            key={`frost-${index}`}
            size={effect.size}
            delay={effect.delay}
            style={{
              left: `${effect.x}%`,
              top: `${effect.y}%`
            }}
          />
        ))}
        {snowflakes.map((flake, index) => (
          <Snowflake
            key={`snow-${index}`}
            size={flake.size}
            delay={flake.delay}
            style={{
              left: `${flake.x}%`
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
      </FrostButton>
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
export { Container as FrostContainer };
export { FrostButton };
export { Content as FrostContent };
export { AccordionItem as FrostAccordionItem }; 