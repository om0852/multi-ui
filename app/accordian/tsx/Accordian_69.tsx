'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const stardustFlow = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.3; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.5); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 0.3; }
`;

const cosmicPulse = keyframes`
  0%, 100% { transform: scale(1); filter: hue-rotate(0deg); }
  50% { transform: scale(1.2); filter: hue-rotate(180deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CosmicButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 26, 74, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 43, 226, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(138, 43, 226, 0.2),
    inset 0 0 20px rgba(138, 43, 226, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(138, 43, 226, 0.2),
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
  background: rgba(26, 26, 74, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 43, 226, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: 
    0 0 20px rgba(138, 43, 226, 0.15),
    inset 0 0 15px rgba(138, 43, 226, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #9370db, #8a2be2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #9370db;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`;

const StardustCloud = styled(motion.div)<{ size: number; color: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(3px);
  animation: ${stardustFlow} ${props => 6 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const CosmicParticle = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at center,
    rgba(147, 112, 219, 0.8),
    rgba(138, 43, 226, 0.4)
  );
  border-radius: 50%;
  filter: blur(1px);
  animation: ${cosmicPulse} ${props => 3 + props.delay}s ease-in-out infinite;
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

  const stardustColors = [
    'rgba(147, 112, 219, 0.3)',
    'rgba(138, 43, 226, 0.3)',
    'rgba(123, 104, 238, 0.3)',
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <CosmicButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(4)].map((_, i) => (
              <StardustCloud
                key={i}
                size={80 + Math.random() * 40}
                color={stardustColors[i % stardustColors.length]}
                delay={i * 0.8}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <CosmicParticle
                key={i}
                size={4 + Math.random() * 4}
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
          </CosmicButton>
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