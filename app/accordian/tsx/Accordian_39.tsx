'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.8; }
`;

const nebula = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a0a2e 0%, #1a1a4a 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CosmicButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138, 43, 226, 0.3);
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  z-index: 1;
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138, 43, 226, 0.2);
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

const Star = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} ${props => 1 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
`;

const NebulaEffect = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(138, 43, 226, 0.1) 50%,
    transparent 100%
  );
  mix-blend-mode: screen;
  animation: ${nebula} 20s linear infinite;
  pointer-events: none;
`;

const DustParticle = styled(motion.div)<{ color: string; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  pointer-events: none;
  filter: blur(1px);
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const stars = Array.from({ length: 20 }, () => ({
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  const dustParticles = Array.from({ length: 15 }, () => ({
    size: Math.random() * 4 + 2,
    color: `rgba(${138 + Math.random() * 50}, ${43 + Math.random() * 30}, ${226 + Math.random() * 30}, ${Math.random() * 0.5 + 0.3})`,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <div>
      <CosmicButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <NebulaEffect
          animate={{
            opacity: isOpen ? 0.8 : 0.5,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        {stars.map((star, index) => (
          <Star
            key={`star-${index}`}
            size={star.size}
            delay={star.delay}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`
            }}
          />
        ))}
        {dustParticles.map((particle, index) => (
          <DustParticle
            key={`dust-${index}`}
            color={particle.color}
            size={particle.size}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
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
      </CosmicButton>
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
export { Container as CosmicContainer };
export { CosmicButton };
export { Content as CosmicContent };
export { AccordionItem as CosmicAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Cosmic Design", content: "Space-inspired interfaces with star-like elements and galactic aesthetics." },
    { title: "Celestial movements", content: "Animations that mimic the gentle drift and rotation of celestial bodies." },
    { title: "Stellar interactions", content: "Interactive elements that sparkle and shine like distant stars in the night sky." }
  ];

  return <Accordion items={items} />;
}; 