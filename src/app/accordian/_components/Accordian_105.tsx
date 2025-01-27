'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const voidRipple = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(2); opacity: 0; }
`;

const echoWave = keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
  50% { transform: translateX(0) skewX(-15deg); opacity: 0.3; }
  100% { transform: translateX(100%) skewX(-15deg); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #090909 0%, #1c1c1c 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const VoidButton = styled(motion.button)`
  width: 100%;
  background: rgba(25, 25, 25, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(75, 75, 75, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(0, 0, 0, 0.5),
    inset 0 0 20px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(75, 75, 75, 0.2),
      transparent
    );
    animation: ${echoWave} 3s ease-in-out infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(25, 25, 25, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(75, 75, 75, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(0, 0, 0, 0.4),
    inset 0 0 15px rgba(0, 0, 0, 0.4);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  z-index: 1;
  position: relative;
  letter-spacing: 1px;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  opacity: 0.7;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const VoidRipple = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px solid rgba(75, 75, 75, 0.3);
  border-radius: 50%;
  animation: ${voidRipple} ${props => 3 + props.delay}s ease-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const DarkMatter = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(0, 0, 0, 0.5);
  filter: blur(5px);
  border-radius: 50%;
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
          <VoidButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(4)].map((_, i) => (
              <VoidRipple
                key={i}
                size={100}
                delay={i * 0.5}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <DarkMatter
                key={i}
                size={30 + Math.random() * 20}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
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
          </VoidButton>
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