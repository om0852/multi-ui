'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff; }
  50% { box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
  100% { box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff; }
`;

const Container = styled.div`
  padding: 1rem;
  background: #000000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NeonButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 0, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid #ff00ff;
  padding: 1.5rem;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  animation: ${neonPulse} 2s infinite;

  &:hover {
    border-color: #00ffff;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  background: rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid #00ffff;
  padding: 1.5rem;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px #00ffff;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 0 10px #ff00ff;
`;

const IconWrapper = styled(motion.div)`
  color: #ffffff;
  font-size: 1.25rem;
  text-shadow: 0 0 10px #ff00ff;
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
          <NeonButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
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
          </NeonButton>
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