'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const frostGrow = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.3; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.3; }
`;

const crystalShine = keyframes`
  0% { background-position: -200% 50%; }
  100% { background-position: 200% 50%; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a1520 0%, #1a2530 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const FrostButton = styled(motion.button)`
  width: 100%;
  background: rgba(150, 200, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(150, 200, 255, 0.3);
  padding: 1.5rem;
  color: #b0e0ff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(150, 200, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
      transparent,
      rgba(150, 200, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${crystalShine} 4s linear infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(150, 200, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(150, 200, 255, 0.2);
  padding: 1.5rem;
  color: #b0e0ff;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #b0e0ff;
  text-shadow: 0 0 10px rgba(150, 200, 255, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #b0e0ff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(150, 200, 255, 0.5);
`;

const IceCrystal = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(150, 200, 255, 0.2);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${frostGrow} 4s ease-in-out infinite;
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
            {[...Array(6)].map((_, i) => (
              <IceCrystal
                key={i}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
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
          </FrostButton>
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