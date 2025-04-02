'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const prismRotate = keyframes`
  0% { transform: rotate(0deg); filter: hue-rotate(0deg); }
  100% { transform: rotate(360deg); filter: hue-rotate(360deg); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #111111 0%, #222222 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const PrismButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000);
    background-size: 400% 100%;
    animation: ${prismRotate} 3s linear infinite;
    mix-blend-mode: overlay;
    opacity: 0.2;
  }

  &:hover::before {
    opacity: 0.4;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  color: #fff;
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  opacity: 0.8;
`;

const PrismRefraction = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, rgba(255,0,0,0.2), rgba(0,255,0,0.2), rgba(0,0,255,0.2));
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  filter: blur(5px);
  animation: ${prismRotate} 6s linear infinite;
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
          <PrismButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(3)].map((_, i) => (
              <PrismRefraction
                key={i}
                style={{
                  top: `${30 + i * 30}%`,
                  left: `${20 + i * 30}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
            <div className="flex justify-between items-center">
              <Title>{item.title}</Title>
              <IconWrapper
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ type: "spring" }}
              >
                ▼
              </IconWrapper>
            </div>
          </PrismButton>
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