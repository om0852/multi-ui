'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const mercuryFlow = keyframes`
  0% { transform: translateX(-100%) scale(1); opacity: 0; }
  50% { transform: translateX(0) scale(1.2); opacity: 0.8; }
  100% { transform: translateX(100%) scale(1); opacity: 0; }
`;

const metalShine = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MetalButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(145deg, #404040, #2a2a2a);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(192, 192, 192, 0.3);
  padding: 1.5rem;
  color: #e0e0e0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 20px rgba(192, 192, 192, 0.1),
    inset 0 0 10px rgba(192, 192, 192, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
      transparent,
      rgba(192, 192, 192, 0.4),
      transparent
    );
    background-size: 200% 100%;
    animation: ${metalShine} 3s linear infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: linear-gradient(145deg, #333333, #262626);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(192, 192, 192, 0.2);
  padding: 1.5rem;
  color: #e0e0e0;
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(192, 192, 192, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #e0e0e0;
  text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #e0e0e0;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
`;

const MercuryDrop = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(145deg, #c0c0c0, #a0a0a0);
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: 
    0 0 10px rgba(192, 192, 192, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5);
  animation: ${mercuryFlow} 3s ease-in-out infinite;
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
          <MetalButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(5)].map((_, i) => (
              <MercuryDrop
                key={i}
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
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
          </MetalButton>
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