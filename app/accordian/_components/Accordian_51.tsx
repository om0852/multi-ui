'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0%, 100% { box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
  50% { box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; }
`;

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NeonButton = styled(motion.button)`
  width: 100%;
  background: rgba(10, 10, 10, 0.8);
  border: none;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  animation: ${neonPulse} 2s infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    background-size: 200% auto;
    animation: ${borderFlow} 3s linear infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(10, 10, 10, 0.8);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(255, 0, 255, 0.3);
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
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const NeonLine = styled(motion.div)<{ color: string; delay: number }>`
  position: absolute;
  width: 100%;
  height: 2px;
  background: ${props => props.color};
  filter: blur(2px);
  opacity: 0.5;
  transform-origin: left;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const neonColors = [
    '#ff00ff',
    '#00ffff',
    '#ff69b4'
  ];

  return (
    <div>
      <NeonButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {neonColors.map((color, index) => (
          <NeonLine
            key={`line-${index}`}
            color={color}
            delay={index * 0.2}
            style={{
              top: `${(index + 1) * 25}%`
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }
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
    { title: "Cyberpunk Design", content: "Futuristic, neon-infused interface with a dystopian urban aesthetic." },
    { title: "High contrast", content: "Bold, vibrant colors against dark backgrounds for maximum impact." },
    { title: "Digital distortion", content: "Glitch-like effects and digital artifacts that create tension and energy." }
  ];

  return <Accordion items={items} />;
}; 