'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const quantumSpin = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.5); }
  100% { transform: rotate(360deg) scale(1); }
`;

const particleGlow = keyframes`
  0%, 100% { filter: brightness(1) hue-rotate(0deg); }
  50% { filter: brightness(1.5) hue-rotate(180deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000000 0%, #1a237e 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const QuantumButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 35, 126, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(63, 81, 181, 0.5);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(63, 81, 181, 0.2);
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(26, 35, 126, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(63, 81, 181, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(63, 81, 181, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(63, 81, 181, 0.5);
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

const Particle = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
  animation: ${particleGlow} 3s ease-in-out infinite;
`;

const QuantumField = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(63, 81, 181, 0.1) 50%,
    transparent 100%
  );
  animation: ${quantumSpin} 20s linear infinite;
  pointer-events: none;
`;

const OrbitalPath = styled(motion.div)<{ size: number; rotation: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px solid rgba(63, 81, 181, 0.2);
  border-radius: 50%;
  transform: rotate(${props => props.rotation}deg);
  pointer-events: none;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    size: Math.random() * 6 + 2,
    color: `hsla(${Math.random() * 60 + 220}, 70%, 50%, 0.8)`,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  const orbitals = Array.from({ length: 5 }, (_, i) => ({
    size: (i + 1) * 80,
    rotation: Math.random() * 360
  }));

  return (
    <div>
      <QuantumButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <QuantumField />
        {orbitals.map((orbital, index) => (
          <OrbitalPath
            key={`orbital-${index}`}
            size={orbital.size}
            rotation={orbital.rotation}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${orbital.rotation}deg)`
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        {particles.map((particle, index) => (
          <Particle
            key={`particle-${index}`}
            size={particle.size}
            color={particle.color}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              scale: [1, Math.random() * 0.5 + 1, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
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
      </QuantumButton>
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
export { Container as QuantumContainer };
export { QuantumButton };
export { Content as QuantumContent };
export { AccordionItem as QuantumAccordionItem }; 