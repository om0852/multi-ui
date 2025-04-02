'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const circuitFlow = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
`;

const dataStream = keyframes`
  0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%) translateY(100%); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #001a2c 0%, #003366 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CircuitButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 150, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(0, 150, 255, 0.3);
  padding: 1.5rem;
  color: #00ffff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(0, 150, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
      transparent 0%,
      transparent 45%,
      rgba(0, 150, 255, 0.2) 50%,
      transparent 55%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${circuitFlow} 3s linear infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(0, 150, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 150, 255, 0.2);
  padding: 1.5rem;
  color: #80ffff;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #00ffff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const DataLine = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #00ffff;
  box-shadow: 0 0 10px #00ffff;
  animation: ${dataStream} 2s linear infinite;
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
              <DataLine
                key={i}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
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
          </CircuitButton>
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