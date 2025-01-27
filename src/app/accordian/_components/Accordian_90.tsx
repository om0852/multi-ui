'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const waveFunction = keyframes`
  0% { transform: scaleY(1) translateX(-100%); opacity: 0.3; }
  50% { transform: scaleY(1.5) translateX(0); opacity: 0.6; }
  100% { transform: scaleY(1) translateX(100%); opacity: 0.3; }
`;

const particleSpin = keyframes`
  0% { transform: rotate(0deg) translateX(20px) rotate(0deg); opacity: 0.3; }
  50% { transform: rotate(180deg) translateX(20px) rotate(-180deg); opacity: 0.8; }
  100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); opacity: 0.3; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000022 0%, #000044 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const QuantumButton = styled(motion.button)`
  width: 100%;
  background: rgba(75, 0, 130, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(147, 112, 219, 0.3);
  padding: 1.5rem;
  color: #e6e6fa;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(147, 112, 219, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center,
      rgba(147, 112, 219, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(75, 0, 130, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(147, 112, 219, 0.2);
  padding: 1.5rem;
  color: #e6e6fa;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #e6e6fa;
  text-shadow: 0 0 10px rgba(147, 112, 219, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #e6e6fa;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(147, 112, 219, 0.5);
`;

const WaveParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #e6e6fa;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(147, 112, 219, 0.8);
  animation: ${particleSpin} 4s linear infinite;
`;

const QuantumWave = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    rgba(147, 112, 219, 0.8),
    transparent
  );
  width: 200px;
  animation: ${waveFunction} 3s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(147, 112, 219, 0.5);
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
          <QuantumButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(8)].map((_, i) => (
              <WaveParticle
                key={i}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <QuantumWave
                key={i}
                style={{
                  top: `${20 + i * 20}%`,
                  left: '0',
                  animationDelay: `${i * 0.75}s`,
                }}
              />
            ))}
            <div className="flex justify-between items-center">
              <Title>{item.title}</Title>
              <IconWrapper
                animate={{ 
                  rotate: openIndex === index ? 180 : 0,
                  scale: openIndex === index ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                ▼
              </IconWrapper>
            </div>
          </QuantumButton>
          <AnimatePresence>
            {openIndex === index && (
              <ContentWrapper
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Content>{item.content}</Content>
              </ContentWrapper>
            )}
          </AnimatePresence>
        </div>
      ))}
    </Container>
  );
} 