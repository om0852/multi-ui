'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const auroraWave = keyframes`
  0% { transform: translateX(-100%) skewX(10deg); }
  100% { transform: translateX(100%) skewX(10deg); }
`;

const shimmer = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a0a1f 0%, #1a1a3f 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const AuroraButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 26, 63, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 127, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 20px rgba(0, 255, 127, 0.2),
    inset 0 0 20px rgba(0, 255, 127, 0.1);
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(26, 26, 63, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 127, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: 
    0 0 15px rgba(0, 255, 127, 0.1),
    inset 0 0 15px rgba(0, 255, 127, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
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

const AuroraWave = styled(motion.div)<{ color: string; delay: number }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${props => props.color},
    transparent
  );
  opacity: 0.3;
  transform-origin: center;
  animation: 
    ${auroraWave} ${props => 8 + props.delay}s linear infinite,
    ${shimmer} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
`;

const Star = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  pointer-events: none;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const auroraColors = [
    'rgba(0, 255, 127, 0.2)',
    'rgba(148, 0, 211, 0.2)',
    'rgba(0, 191, 255, 0.2)'
  ];

  const stars = Array.from({ length: 20 }, (_, i) => ({
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3
  }));

  return (
    <div>
      <AuroraButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {auroraColors.map((color, index) => (
          <AuroraWave
            key={`aurora-${index}`}
            color={color}
            delay={index * 2}
            style={{
              transform: `rotate(${index * 10}deg)`
            }}
          />
        ))}
        {stars.map((star, index) => (
          <Star
            key={`star-${index}`}
            size={star.size}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
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
      </AuroraButton>
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
export { Container as AuroraContainer };
export { AuroraButton };
export { Content as AuroraContent };
export { AccordionItem as AuroraAccordionItem }; 