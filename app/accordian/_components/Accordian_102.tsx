'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const plasmaFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const electricPulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0f0f3a 0%, #2b0f5a 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const PlasmaButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(123, 31, 162, 0.5),
    rgba(103, 58, 183, 0.5),
    rgba(123, 31, 162, 0.5)
  );
  background-size: 200% 100%;
  animation: ${plasmaFlow} 5s ease infinite;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(147, 51, 234, 0.5);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 25px rgba(147, 51, 234, 0.3),
    inset 0 0 15px rgba(147, 51, 234, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(147, 51, 234, 0.4),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(123, 31, 162, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(147, 51, 234, 0.4);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(147, 51, 234, 0.2),
    inset 0 0 10px rgba(147, 51, 234, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 
    0 0 10px rgba(147, 51, 234, 0.8),
    0 0 20px rgba(147, 51, 234, 0.4);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  text-shadow: 
    0 0 10px rgba(147, 51, 234, 0.8),
    0 0 20px rgba(147, 51, 234, 0.4);
`;

const ElectricArc = styled(motion.div)<{ delay: number }>`
  position: absolute;
  width: 2px;
  height: 20px;
  background: rgba(147, 51, 234, 0.8);
  filter: blur(1px);
  animation: ${electricPulse} ${props => 1 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  transform-origin: center;
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
            {[...Array(8)].map((_, i) => (
              <ElectricArc
                key={i}
                delay={i * 0.2}
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
          </PlasmaButton>
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