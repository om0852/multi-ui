'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const glitchEffect = keyframes`
  0% { transform: translate(0); filter: hue-rotate(0deg); }
  25% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
  50% { transform: translate(2px, -2px); filter: hue-rotate(180deg); }
  75% { transform: translate(-2px, -2px); filter: hue-rotate(270deg); }
  100% { transform: translate(0); filter: hue-rotate(360deg); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #0f0f2d 0%, #1a1a3a 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const GlitchButton = styled(motion.button)`
  width: 100%;
  background: rgba(15, 15, 45, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 0, 128, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 20px rgba(255, 0, 128, 0.2),
    inset 0 0 10px rgba(255, 0, 128, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 0, 128, 0.5);
    animation: ${scanline} 4s linear infinite;
    opacity: 0.5;
  }

  &:hover {
    animation: ${glitchEffect} 0.3s infinite;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(15, 15, 45, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 0, 128, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 
    0 0 15px rgba(255, 0, 128, 0.15),
    inset 0 0 10px rgba(255, 0, 128, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 
    2px 2px #ff008080,
    -2px -2px #00ff8080;
  z-index: 1;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
`;

const IconWrapper = styled(motion.div)`
  color: #ff0080;
  font-size: 1.25rem;
  text-shadow: 2px 2px #00ff8080;
`;

const GlitchOverlay = styled(motion.div)<{ delay: number }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 128, 0.2),
    rgba(0, 255, 128, 0.2)
  );
  mix-blend-mode: overlay;
  animation: ${glitchEffect} ${props => 2 + props.delay}s infinite;
  pointer-events: none;
`;

const NoiseTexture = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ/YAAAACHRSTlMzMzMzMzMzM85JBgUAAAABYktHRAH/Ai3eAAAASElEQVQ4y2NgQAP8/PyMjPz8/DIwFuOkSZMmTZ4EYoHlJqHJMU5CsOAmIdgT2dBw40YGhqamJoZJkyYxTJo0iYGfnx8hNwBZSQDHYkQVmgAAAABJRU5ErkJggg==');
  opacity: 0.05;
  mix-blend-mode: overlay;
  pointer-events: none;
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
          <GlitchButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <NoiseTexture />
            {[...Array(3)].map((_, i) => (
              <GlitchOverlay
                key={i}
                delay={i * 0.2}
                style={{
                  opacity: 0.1 + (i * 0.1),
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
          </GlitchButton>
          <AnimatePresence>
            {openIndex === index && (
              <ContentWrapper
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Content>
                  <NoiseTexture />
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