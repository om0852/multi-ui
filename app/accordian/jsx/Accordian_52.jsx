'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const liquidFlow = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.2); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`;

const shimmer = keyframes`
  0% { opacity: 0.3; transform: translateX(-100%) skewX(-15deg); }
  50% { opacity: 0.7; transform: translateX(0) skewX(-15deg); }
  100% { opacity: 0.3; transform: translateX(100%) skewX(-15deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const GlassButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    animation: ${shimmer} 3s infinite;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

const LiquidEffect = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  animation: ${liquidFlow} 15s linear infinite;
  pointer-events: none;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(2px);
  pointer-events: none;
`;

function AccordionItem({ title, content, isOpen, onClick }) {
  const bubbles = Array.from({ length: 10 }, (_, i) => ({
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div>
      <GlassButton onClick={onClick} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <LiquidEffect />
        {bubbles.map((bubble, index) => (
          <Bubble key={`bubble-${index}`} size={bubble.size} style={{ left: `${bubble.x}%`, top: `${bubble.y}%` }} animate={{ y: [0, -30], x: [0, Math.sin(index) * 10], opacity: [0.7, 0], scale: [1, 1.2] }} transition={{ duration: 2 + bubble.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
        <Title>{title}</Title>
      </GlassButton>
    </div>
  );
}

export default function Accordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleClick = index => {
    setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
  };

  return (
    <Container>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} isOpen={openIndexes.includes(index)} onClick={() => handleClick(index)} />
      ))}
    </Container>
  );
}

export { Container as GlassContainer, GlassButton, Content as GlassContent, AccordionItem as GlassAccordionItem };
