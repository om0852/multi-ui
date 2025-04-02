'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const frostGrow = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.3; }
  50% { transform: scale(1.3) rotate(180deg); opacity: 0.6; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.3; }
`;

const crystalShine = keyframes`
  0%, 100% { opacity: 0.3; filter: brightness(1); }
  50% { opacity: 0.8; filter: brightness(1.5); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #e0f7ff 0%, #87ceeb 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const FrostButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.4);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(255, 255, 255, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3),
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  color: #1a4c6b;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.2),
    inset 0 0 15px rgba(255, 255, 255, 0.2);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #1a4c6b, #3d7ea6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #1a4c6b;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const FrostPattern = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.3);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${frostGrow} ${props => 5 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const IceCrystal = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.8),
    rgba(135, 206, 235, 0.4)
  );
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: ${crystalShine} ${props => 2 + props.delay}s ease-in-out infinite;
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

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <FrostButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(5)].map((_, i) => (
              <FrostPattern
                key={i}
                size={60 + Math.random() * 40}
                delay={i * 0.5}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <IceCrystal
                key={i}
                size={10 + Math.random() * 10}
                delay={i * 0.3}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
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
          </FrostButton>
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