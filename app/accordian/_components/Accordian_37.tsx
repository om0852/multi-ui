'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const float = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(5px, -5px); }
  50% { transform: translate(10px, 0); }
  75% { transform: translate(5px, 5px); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const WaveButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(147, 197, 253, 0.3);
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
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
  border: 1px solid rgba(147, 197, 253, 0.2);
  padding: 1.5rem;
  color: white;
  position: relative;
  border-radius: 16px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: white;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Particle = styled(motion.div)<{ size: number; delay: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: ${float} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.5;
  pointer-events: none;
`;

const WaveContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
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
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    color: `rgba(147, 197, 253, ${Math.random() * 0.5 + 0.3})`,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <div>
      <WaveButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <WaveContainer>
          {particles.map((particle, index) => (
            <Particle
              key={index}
              size={particle.size}
              delay={particle.delay}
              color={particle.color}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`
              }}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 2 + particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
        </WaveContainer>
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
      </WaveButton>
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
export { Container as WaveContainer };
export { WaveButton };
export { Content as WaveContent };
export { AccordionItem as WaveAccordionItem }; 