'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const lavaFlow = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); filter: hue-rotate(0deg); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.3); filter: hue-rotate(90deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); filter: hue-rotate(0deg); }
`;

const magmaPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a0f00 0%, #3d1f00 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const LavaButton = styled(motion.button)`
  width: 100%;
  background: rgba(61, 31, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 69, 0, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(255, 69, 0, 0.2),
    inset 0 0 20px rgba(255, 69, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 69, 0, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
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
  background: rgba(61, 31, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 69, 0, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(255, 69, 0, 0.15),
    inset 0 0 15px rgba(255, 69, 0, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #ff4500, #ff6347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 69, 0, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #ff4500;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(255, 69, 0, 0.5);
`;

const LavaPool = styled(motion.div)<{ size: number; color: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(3px);
  animation: ${lavaFlow} ${props => 6 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const MagmaBubble = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at center,
    rgba(255, 69, 0, 0.8),
    rgba(255, 99, 71, 0.4)
  );
  border-radius: 50%;
  filter: blur(1px);
  animation: ${magmaPulse} ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const lavaColors = [
    'rgba(255, 69, 0, 0.3)',
    'rgba(255, 99, 71, 0.3)',
    'rgba(255, 140, 0, 0.3)',
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <LavaButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(4)].map((_, i) => (
              <LavaPool
                key={i}
                size={80 + Math.random() * 40}
                color={lavaColors[i % lavaColors.length]}
                delay={i * 0.8}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <MagmaBubble
                key={i}
                size={6 + Math.random() * 6}
                delay={i * 0.3}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            <div className="flex justify-between items-center">
              <Title>{item.title}</Title>
              <IconWrapper
                animate={{ 
                  rotate: openIndex === index ? 180 : 0,
                  scale: openIndex === index ? 1.2 : 1
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                ▼
              </IconWrapper>
            </div>
          </LavaButton>
          <AnimatePresence>
            {openIndex === index && (
              <ContentWrapper
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Content>
                  {item.content}
                </Content>
              </ContentWrapper>
            )}
          </AnimatePresence>
        </div>
      ))}
    </Container>
  );
} 