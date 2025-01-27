'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const portalSpin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.2); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`;

const particleFloat = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -10px); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000000 0%, #1a0f3c 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const PortalButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 15, 60, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 43, 226, 0.4);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(138, 43, 226, 0.2),
    inset 0 0 20px rgba(138, 43, 226, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(138, 43, 226, 0.2) 0%,
      transparent 70%
    );
    animation: ${portalSpin} 8s linear infinite;
    pointer-events: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(26, 15, 60, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 43, 226, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: 
    0 0 20px rgba(138, 43, 226, 0.15),
    inset 0 0 15px rgba(138, 43, 226, 0.15);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #e9a6ff, #b266ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #b266ff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`;

const QuantumParticle = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(138, 43, 226, 0.6);
  border-radius: 50%;
  filter: blur(2px);
  animation: ${particleFloat} ${props => 2 + props.delay}s ease-in-out infinite;
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
          <PortalButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(5)].map((_, i) => (
              <QuantumParticle
                key={i}
                size={4 + Math.random() * 4}
                delay={i * 0.5}
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
          </PortalButton>
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