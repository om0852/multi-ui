'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const runeGlow = keyframes`
  0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
  50% { transform: rotate(180deg) scale(1.2); opacity: 0.6; }
  100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
`;

const magicPulse = keyframes`
  0% { transform: scale(1); filter: hue-rotate(0deg); }
  50% { transform: scale(1.1); filter: hue-rotate(180deg); }
  100% { transform: scale(1); filter: hue-rotate(360deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const RuneButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 11, 46, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(147, 51, 234, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(147, 51, 234, 0.2),
    inset 0 0 20px rgba(147, 51, 234, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(147, 51, 234, 0.2),
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
  background: rgba(26, 11, 46, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(147, 51, 234, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(147, 51, 234, 0.15),
    inset 0 0 15px rgba(147, 51, 234, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #9333ea, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
  z-index: 1;
  position: relative;
  font-family: 'Cinzel', serif;
`;

const IconWrapper = styled(motion.div)`
  color: #9333ea;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
`;

const RuneSymbol = styled(motion.div)<{ size: number; symbol: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: rgba(147, 51, 234, 0.6);
  font-family: 'Runic', 'Arial', sans-serif;
  font-size: ${props => props.size * 0.8}px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${runeGlow} ${props => 4 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
  
  &::before {
    content: '${props => props.symbol}';
  }
`;

const MagicCircle = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(147, 51, 234, 0.3);
  border-radius: 50%;
  animation: ${magicPulse} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid rgba(192, 132, 252, 0.2);
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const runeSymbols = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ'];

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <RuneButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(6)].map((_, i) => (
              <RuneSymbol
                key={i}
                size={20 + Math.random() * 20}
                symbol={runeSymbols[i % runeSymbols.length]}
                delay={i * 0.5}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <MagicCircle
                key={i}
                size={40 + Math.random() * 40}
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
          </RuneButton>
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