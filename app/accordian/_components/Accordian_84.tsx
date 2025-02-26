'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const runeGlow = keyframes`
  0% { transform: scale(1); opacity: 0.3; filter: hue-rotate(0deg); }
  50% { transform: scale(1.2); opacity: 0.6; filter: hue-rotate(180deg); }
  100% { transform: scale(1); opacity: 0.3; filter: hue-rotate(360deg); }
`;

const magicPulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a0033 0%, #330066 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const RuneButton = styled(motion.button)`
  width: 100%;
  background: rgba(147, 51, 234, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(147, 51, 234, 0.3);
  padding: 1.5rem;
  color: #d8b4fe;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center,
      rgba(147, 51, 234, 0.2),
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
  background: rgba(147, 51, 234, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(147, 51, 234, 0.2);
  padding: 1.5rem;
  color: #d8b4fe;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #d8b4fe;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #d8b4fe;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
`;

interface RuneSymbolProps {
  path?: string;
}

const RuneSymbol = styled(motion.div)<RuneSymbolProps>`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(147, 51, 234, 0.3);
  clip-path: ${props => props.path || 'polygon(50% 0%, 100% 100%, 0% 100%)'};
  animation: ${runeGlow} 3s ease-in-out infinite;
`;

const MagicCircle = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid rgba(147, 51, 234, 0.3);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  animation: ${magicPulse} 4s ease-in-out infinite;
`;

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

const runeShapes = [
  'polygon(50% 0%, 100% 100%, 0% 100%)',
  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  'polygon(0% 0%, 100% 50%, 0% 100%)',
];

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <RuneButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MagicCircle />
            {[...Array(8)].map((_, i) => (
              <RuneSymbol
                key={i}
                path={runeShapes[i % runeShapes.length]}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.4}s`,
                  transform: `rotate(${i * 45}deg)`,
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
          </RuneButton>
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