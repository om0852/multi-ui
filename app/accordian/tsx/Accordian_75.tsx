'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const solarFlare = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.3; filter: hue-rotate(0deg); }
  50% { transform: scale(1.5) rotate(180deg); opacity: 0.6; filter: hue-rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); opacity: 0.3; filter: hue-rotate(360deg); }
`;

const plasmaFlow = keyframes`
  0% { transform: translateX(-100%) scale(1); opacity: 0.3; }
  50% { transform: translateX(0%) scale(1.2); opacity: 0.6; }
  100% { transform: translateX(100%) scale(1); opacity: 0.3; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a0f00 0%, #4a1500 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const SolarButton = styled(motion.button)`
  width: 100%;
  background: rgba(74, 21, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 140, 0, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(255, 140, 0, 0.2),
    inset 0 0 20px rgba(255, 140, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 140, 0, 0.2),
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
  background: rgba(74, 21, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 140, 0, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: 
    0 0 20px rgba(255, 140, 0, 0.15),
    inset 0 0 15px rgba(255, 140, 0, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #ff8c00, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 140, 0, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #ff8c00;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
`;

const SunFlare = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(
    circle at center,
    rgba(255, 165, 0, 0.6),
    rgba(255, 140, 0, 0.3),
    transparent
  );
  border-radius: 50%;
  filter: blur(5px);
  animation: ${solarFlare} ${props => 6 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const PlasmaStream = styled(motion.div)<{ width: number; height: number; delay: number }>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 140, 0, 0.4),
    rgba(255, 165, 0, 0.6),
    rgba(255, 140, 0, 0.4),
    transparent
  );
  filter: blur(3px);
  transform-origin: center;
  animation: ${plasmaFlow} ${props => 3 + props.delay}s linear infinite;
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
          <SolarButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(5)].map((_, i) => (
              <SunFlare
                key={i}
                size={80 + Math.random() * 60}
                delay={i * 0.8}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <PlasmaStream
                key={i}
                width={100 + Math.random() * 100}
                height={4 + Math.random() * 4}
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
          </SolarButton>
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