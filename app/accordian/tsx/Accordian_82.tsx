'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const magmaFlow = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(15deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(0deg); }
`;

const heatDistort = keyframes`
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.1) translateY(-2px); }
  100% { transform: scale(1) translateY(0); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a0f00 0%, #3d1f00 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MoltenButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 100, 0, 0.15);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 100, 0, 0.3);
  padding: 1.5rem;
  color: #ffd700;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(255, 100, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
      #ff4400,
      #ff8800,
      #ffaa00,
      #ff8800,
      #ff4400
    );
    background-size: 200% 100%;
    animation: ${magmaFlow} 3s ease infinite;
    mix-blend-mode: color-dodge;
    opacity: 0.3;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(255, 100, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 100, 0, 0.2);
  padding: 1.5rem;
  color: #ffd700;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 150, 0, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #ffd700;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(255, 150, 0, 0.5);
`;

const LavaBubble = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ff6600;
  border-radius: 50%;
  filter: blur(2px);
  box-shadow: 0 0 10px #ff6600;
  animation: ${heatDistort} 2s ease-in-out infinite;
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
          <MoltenButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(8)].map((_, i) => (
              <LavaBubble
                key={i}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  transform: `scale(${0.8 + Math.random() * 0.4})`,
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
          </MoltenButton>
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