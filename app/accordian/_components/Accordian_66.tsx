'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const dataFlow = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
`;

const circuitPulse = keyframes`
  0%, 100% { opacity: 0.3; box-shadow: 0 0 5px #0ff; }
  50% { opacity: 1; box-shadow: 0 0 20px #0ff; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000510 0%, #001233 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CircuitButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 18, 51, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 255, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: ${dataFlow} 3s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: ${dataFlow} 3s linear infinite;
    animation-delay: 1.5s;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(0, 18, 51, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 255, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.1),
    inset 0 0 15px rgba(0, 255, 255, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  z-index: 1;
  position: relative;
  font-family: 'Courier New', monospace;
`;

const IconWrapper = styled(motion.div)`
  color: #0ff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const CircuitNode = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(0, 255, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.4);
  border-radius: 50%;
  animation: ${circuitPulse} ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const CircuitLine = styled(motion.div)<{ width: number; angle: number }>`
  position: absolute;
  width: ${props => props.width}px;
  height: 1px;
  background: rgba(0, 255, 255, 0.3);
  transform: rotate(${props => props.angle}deg);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: ${dataFlow} 2s linear infinite;
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

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <CircuitButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(5)].map((_, i) => (
              <CircuitNode
                key={i}
                size={6}
                delay={i * 0.3}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <CircuitLine
                key={i}
                width={50 + Math.random() * 100}
                angle={Math.random() * 360}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
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
          </CircuitButton>
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