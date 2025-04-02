'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { filter: brightness(1) blur(2px); }
  50% { filter: brightness(1.5) blur(3px); }
  100% { filter: brightness(1) blur(2px); }
`;

const electricFlow = keyframes`
  0% { transform: translateX(-100%) scaleX(1); opacity: 0; }
  50% { transform: translateX(0%) scaleX(1.5); opacity: 1; }
  100% { transform: translateX(100%) scaleX(1); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NeonButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid #00ff00;
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 20px rgba(0, 255, 0, 0.3),
    inset 0 0 10px rgba(0, 255, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent);
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 0, 0.3);
  padding: 1.5rem;
  color: #00ff00;
  position: relative;
  border-radius: 8px;
  box-shadow: 
    0 0 15px rgba(0, 255, 0, 0.2),
    inset 0 0 10px rgba(0, 255, 0, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ff00;
  text-shadow: 
    0 0 5px rgba(0, 255, 0, 0.5),
    0 0 10px rgba(0, 255, 0, 0.3),
    0 0 15px rgba(0, 255, 0, 0.2);
  z-index: 1;
  position: relative;
  font-family: 'Courier New', monospace;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff00;
  font-size: 1.25rem;
  text-shadow: 
    0 0 5px rgba(0, 255, 0, 0.5),
    0 0 10px rgba(0, 255, 0, 0.3);
`;

const NeonGlow = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 0, 0.3),
    transparent 70%
  );
  border-radius: 50%;
  animation: ${neonPulse} ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const ElectricLine = styled(motion.div)<{ width: number; angle: number }>`
  position: absolute;
  width: ${props => props.width}px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #00ff00,
    transparent
  );
  transform: rotate(${props => props.angle}deg);
  animation: ${electricFlow} 1.5s linear infinite;
  opacity: 0.5;
`;

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <NeonButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(6)].map((_, i) => (
              <NeonGlow
                key={i}
                size={40 + Math.random() * 40}
                delay={i * 0.3}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <ElectricLine
                key={i}
                width={50 + Math.random() * 100}
                angle={Math.random() * 360}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
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
          </NeonButton>
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