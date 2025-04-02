'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const auroraWave = keyframes`
  0% { transform: translateX(-100%) skewX(45deg); filter: hue-rotate(0deg); }
  50% { transform: translateX(0%) skewX(-45deg); filter: hue-rotate(180deg); }
  100% { transform: translateX(100%) skewX(45deg); filter: hue-rotate(360deg); }
`;

const shimmer = keyframes`
  0% { opacity: 0.3; filter: brightness(1); }
  50% { opacity: 0.8; filter: brightness(1.5); }
  100% { opacity: 0.3; filter: brightness(1); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #001428 0%, #002851 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const AuroraButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 40, 81, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 128, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(0, 255, 128, 0.2),
    inset 0 0 20px rgba(0, 255, 128, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 128, 0.2),
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
  background: rgba(0, 40, 81, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 128, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(0, 255, 128, 0.15),
    inset 0 0 15px rgba(0, 255, 128, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #00ff80, #40e0d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 255, 128, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff80;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 255, 128, 0.5);
`;

const AuroraWave = styled(motion.div)<{ height: number; color: string; delay: number }>`
  position: absolute;
  width: 200%;
  height: ${props => props.height}px;
  background: ${props => props.color};
  filter: blur(8px);
  opacity: 0.5;
  transform-origin: center;
  animation: ${auroraWave} ${props => 8 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const StarLight = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 255, 128, 0.5);
  animation: ${shimmer} ${props => 2 + props.delay}s ease-in-out infinite;
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

  const auroraColors = [
    'linear-gradient(transparent, rgba(0, 255, 128, 0.3))',
    'linear-gradient(transparent, rgba(64, 224, 208, 0.3))',
    'linear-gradient(transparent, rgba(0, 255, 255, 0.3))',
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <AuroraButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(3)].map((_, i) => (
              <AuroraWave
                key={i}
                height={30 + Math.random() * 20}
                color={auroraColors[i % auroraColors.length]}
                delay={i * 1.5}
                style={{
                  top: `${20 + (i * 20)}%`,
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <StarLight
                key={i}
                size={1 + Math.random() * 2}
                delay={i * 0.2}
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
          </AuroraButton>
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