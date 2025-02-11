'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const energyPulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; filter: hue-rotate(0deg); }
  50% { transform: scale(1.2); opacity: 0.8; filter: hue-rotate(180deg); }
  100% { transform: scale(1); opacity: 0.5; filter: hue-rotate(360deg); }
`;

const arcFlow = keyframes`
  0% { transform: scaleX(0.3) translateX(-100%); opacity: 0; }
  50% { transform: scaleX(1) translateX(0); opacity: 1; }
  100% { transform: scaleX(0.3) translateX(100%); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000033 0%, #000066 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const PlasmaButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 128, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(0, 128, 255, 0.3);
  padding: 1.5rem;
  color: #00ffff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(0, 128, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center,
      rgba(0, 128, 255, 0.2),
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
  background: rgba(0, 128, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 128, 255, 0.2);
  padding: 1.5rem;
  color: #00ffff;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #00ffff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.5);
`;

const EnergyField = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at center,
    rgba(0, 128, 255, 0.3),
    transparent 70%
  );
  border-radius: 50%;
  animation: ${energyPulse} 4s ease-in-out infinite;
  mix-blend-mode: screen;
`;

const PlasmaArc = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    #00ffff,
    transparent
  );
  width: 100px;
  animation: ${arcFlow} 2s linear infinite;
  box-shadow: 0 0 10px #00ffff;
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
          <PlasmaButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(3)].map((_, i) => (
              <EnergyField
                key={i}
                style={{
                  top: `${20 + i * 30}%`,
                  left: `${20 + i * 30}%`,
                  animationDelay: `${i * 1}s`,
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <PlasmaArc
                key={i}
                style={{
                  top: `${20 + i * 15}%`,
                  left: '0',
                  animationDelay: `${i * 0.4}s`,
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
          </PlasmaButton>
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