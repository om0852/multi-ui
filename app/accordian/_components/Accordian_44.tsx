'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const ringPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
`;

const neonGlow = keyframes`
  0%, 100% { filter: brightness(1) drop-shadow(0 0 5px #ff00ff); }
  50% { filter: brightness(1.3) drop-shadow(0 0 15px #ff00ff); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NeonButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid #ff00ff;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 10px rgba(255, 0, 255, 0.3),
    inset 0 0 10px rgba(255, 0, 255, 0.3);
  animation: ${neonGlow} 2s ease-in-out infinite;
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid #ff00ff;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.2);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
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
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
`;

const NeonRing = styled(motion.div)<{ size: number; delay: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  animation: ${ringPulse} ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
  box-shadow: 
    0 0 10px ${props => props.color},
    inset 0 0 10px ${props => props.color};
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const rings = Array.from({ length: 5 }, (_, i) => ({
    size: (i + 1) * 50,
    delay: i * 0.4,
    color: `hsl(${300 + i * 20}, 100%, 50%)`,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <div>
      <NeonButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {rings.map((ring, index) => (
          <NeonRing
            key={index}
            size={ring.size}
            delay={ring.delay}
            color={ring.color}
            style={{
              left: `${ring.x}%`,
              top: `${ring.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2 + ring.delay,
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
      </NeonButton>
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
export { Container as NeonContainer };
export { NeonButton };
export { Content as NeonContent };
export { AccordionItem as NeonAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Neon Glow", content: "Vibrant, glowing design elements inspired by neon lighting." },
    { title: "Electric colors", content: "Bright, saturated colors that create visual impact and energy." },
    { title: "Night city aesthetic", content: "Urban-inspired design reminiscent of city lights after dark." }
  ];

  return <Accordion items={items} />;
}; 