'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translateY(1000%); opacity: 0; }
`;

const digitFlicker = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const Container = styled.div`
  padding: 1rem;
  background: #000000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MatrixButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid #00ff00;
  padding: 1.5rem;
  color: #00ff00;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 0%, #00ff00 75%, transparent 100%);
    opacity: 0.1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(0, 255, 0, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid #00ff00;
  padding: 1.5rem;
  color: #00ff00;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ff00;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  font-family: monospace;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff00;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;

interface MatrixDigitProps {
  delay: number;
  left: number;
}

const MatrixDigit = styled.div<MatrixDigitProps>`
  position: absolute;
  color: #00ff00;
  font-family: monospace;
  font-size: 12px;
  animation: ${matrixRain} 2s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  opacity: 0;
  text-shadow: 0 0 5px #00ff00;
`;

const digits = '0123456789ABCDEF';

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
          <MatrixButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(15)].map((_, i) => (
              <MatrixDigit
                key={i}
                delay={Math.random() * 2}
                left={Math.random() * 100}
              >
                {digits[Math.floor(Math.random() * digits.length)]}
              </MatrixDigit>
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
          </MatrixButton>
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