'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const metalFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const heatDistort = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.02) rotate(1deg); }
  75% { transform: scale(0.98) rotate(-1deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a0f0f 0%, #2d1f1f 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MoltenButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(
    45deg,
    #4a1f1f,
    #8b0000,
    #4a1f1f,
    #8b0000
  );
  background-size: 400% 400%;
  animation: ${metalFlow} 10s ease infinite;
  border: none;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 20px rgba(139, 0, 0, 0.3),
    inset 0 0 20px rgba(139, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 160, 0, 0.4),
      transparent 50%
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
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: linear-gradient(
    45deg,
    rgba(74, 31, 31, 0.9),
    rgba(139, 0, 0, 0.9)
  );
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 15px rgba(139, 0, 0, 0.2),
    inset 0 0 15px rgba(139, 0, 0, 0.2);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(255, 160, 0, 0.5);
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

const HeatWave = styled(motion.div)<{ delay: number }>`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(255, 160, 0, 0.2),
    transparent 70%
  );
  animation: ${heatDistort} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
`;

const Spark = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #ffa000;
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heatWaves = Array.from({ length: 3 }, (_, i) => ({
    delay: i * 0.5
  }));

  const sparks = Array.from({ length: 10 }, (_, i) => ({
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - button.left) / button.width) * 100;
    const y = ((e.clientY - button.top) / button.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div>
      <MoltenButton
        onClick={onClick}
        onMouseMove={handleMouseMove}
        style={{
          '--x': `${mousePosition.x}%`,
          '--y': `${mousePosition.y}%`
        } as React.CSSProperties}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {heatWaves.map((wave, index) => (
          <HeatWave
            key={`wave-${index}`}
            delay={wave.delay}
          />
        ))}
        {sparks.map((spark, index) => (
          <Spark
            key={`spark-${index}`}
            size={spark.size}
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -20]
            }}
            transition={{
              duration: 1 + spark.delay,
              repeat: Infinity,
              ease: "easeOut"
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
      </MoltenButton>
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
export { Container as MoltenContainer };
export { MoltenButton };
export { Content as MoltenContent };
export { AccordionItem as MoltenAccordionItem }; 