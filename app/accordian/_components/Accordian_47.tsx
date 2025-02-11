'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const vortexSpin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.2); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0f0f1f 0%, #1f1f3f 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const VortexButton = styled(motion.button)`
  width: 100%;
  background: rgba(31, 31, 63, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(147, 112, 219, 0.5);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(147, 112, 219, 0.2);
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(31, 31, 63, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(147, 112, 219, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 0 15px rgba(147, 112, 219, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(147, 112, 219, 0.5);
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

const VortexEffect = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(147, 112, 219, 0.2) 45deg,
    rgba(147, 112, 219, 0.4) 90deg,
    rgba(147, 112, 219, 0.2) 135deg,
    transparent 180deg,
    rgba(147, 112, 219, 0.2) 225deg,
    rgba(147, 112, 219, 0.4) 270deg,
    rgba(147, 112, 219, 0.2) 315deg,
    transparent
  );
  animation: ${vortexSpin} 20s linear infinite;
  pointer-events: none;
`;

const Star = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  animation: ${starTwinkle} 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const GalaxyArm = styled(motion.div)<{ rotation: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(147, 112, 219, 0.3),
    transparent
  );
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
  pointer-events: none;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const galaxyArms = Array.from({ length: 6 }, (_, i) => ({
    rotation: (i * 60) + Math.random() * 10
  }));

  return (
    <div>
      <VortexButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <VortexEffect />
        {galaxyArms.map((arm, index) => (
          <GalaxyArm
            key={`arm-${index}`}
            rotation={arm.rotation}
            animate={{
              rotate: [arm.rotation, arm.rotation + 360]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        {stars.map((star, index) => (
          <Star
            key={`star-${index}`}
            size={star.size}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 2 + star.delay,
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
      </VortexButton>
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
export { Container as VortexContainer };
export { VortexButton };
export { Content as VortexContent };
export { AccordionItem as VortexAccordionItem }; 