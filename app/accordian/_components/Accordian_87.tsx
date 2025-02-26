'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const nebulaPulse = keyframes`
  0% { transform: scale(1) rotate(0deg); filter: hue-rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); filter: hue-rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); filter: hue-rotate(360deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0a001a 0%, #1a0033 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CosmicButton = styled(motion.button)`
  width: 100%;
  background: rgba(138, 43, 226, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(138, 43, 226, 0.3);
  padding: 1.5rem;
  color: #e6e6fa;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center,
      rgba(138, 43, 226, 0.2),
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
  background: rgba(138, 43, 226, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(138, 43, 226, 0.2);
  padding: 1.5rem;
  color: #e6e6fa;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #e6e6fa;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #e6e6fa;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  animation: ${starTwinkle} 1.5s ease-in-out infinite;
  box-shadow: 0 0 5px #fff;
`;

const NebulaCloud = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    circle at center,
    rgba(138, 43, 226, 0.2),
    transparent 70%
  );
  animation: ${nebulaPulse} 8s ease-in-out infinite;
  mix-blend-mode: screen;
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
          <CosmicButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(20)].map((_, i) => (
              <Star
                key={i}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <NebulaCloud
                key={i}
                style={{
                  top: `${20 + i * 30}%`,
                  left: `${20 + i * 30}%`,
                  animationDelay: `${i * 2}s`,
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
          </CosmicButton>
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