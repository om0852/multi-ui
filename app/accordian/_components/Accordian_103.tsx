'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const crystalShimmer = keyframes`
  0% { opacity: 0.2; transform: rotate(0deg) scale(1); }
  50% { opacity: 0.5; transform: rotate(180deg) scale(1.2); }
  100% { opacity: 0.2; transform: rotate(360deg) scale(1); }
`;

const matrixPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.6; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a1f3c 0%, #2d1f3c 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CrystalButton = styled(motion.button)`
  width: 100%;
  background: rgba(41, 31, 60, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 180, 255, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(138, 180, 255, 0.2),
    inset 0 0 20px rgba(138, 180, 255, 0.1);
  clip-path: polygon(
    0% 15px,
    15px 0%,
    calc(100% - 15px) 0%,
    100% 15px,
    100% calc(100% - 15px),
    calc(100% - 15px) 100%,
    15px 100%,
    0% calc(100% - 15px)
  );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(138, 180, 255, 0.3),
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
  background: rgba(41, 31, 60, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 180, 255, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 8px;
  box-shadow: 
    0 0 20px rgba(138, 180, 255, 0.15),
    inset 0 0 15px rgba(138, 180, 255, 0.1);
  clip-path: polygon(
    0% 10px,
    10px 0%,
    calc(100% - 10px) 0%,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0% calc(100% - 10px)
  );
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #8ab4ff, #a8c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(138, 180, 255, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #8ab4ff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(138, 180, 255, 0.5);
`;

const Crystal = styled(motion.div)<{ size: number; color: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${crystalShimmer} ${props => 4 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const MatrixNode = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(138, 180, 255, 0.2);
  border-radius: 50%;
  animation: ${matrixPulse} ${props => 2 + props.delay}s ease-in-out infinite;
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
          <CrystalButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(4)].map((_, i) => (
              <Crystal
                key={i}
                size={20 + Math.random() * 20}
                color={`rgba(138, 180, 255, ${0.1 + Math.random() * 0.2})`}
                delay={i * 0.5}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <MatrixNode
                key={i}
                size={4}
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
          </CrystalButton>
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