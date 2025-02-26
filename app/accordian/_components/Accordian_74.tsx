'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const digitFlicker = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000000 0%, #001a00 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const DigitalButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 26, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 0, 0.2);
  padding: 1.5rem;
  color: #00ff00;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(0, 255, 0, 0.1),
    inset 0 0 20px rgba(0, 255, 0, 0.1);
  font-family: 'Courier New', monospace;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(0, 255, 0, 0.1) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(0, 26, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 255, 0, 0.1);
  padding: 1.5rem;
  color: #00ff00;
  position: relative;
  border-radius: 4px;
  box-shadow: 
    0 0 20px rgba(0, 255, 0, 0.1),
    inset 0 0 15px rgba(0, 255, 0, 0.1);
  font-family: 'Courier New', monospace;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ff00;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  z-index: 1;
  position: relative;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff00;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;

const RainDrop = styled(motion.div)<{ delay: number; speed: number }>`
  position: absolute;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
  animation: ${matrixRain} ${props => props.speed}s linear infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.5;
`;

const DigitalCharacter = styled(motion.div)<{ delay: number }>`
  position: absolute;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  animation: ${digitFlicker} ${props => 1 + Math.random()}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.5;
`;

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const matrixCharacters = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
  const getRandomChar = () => matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <DigitalButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(10)].map((_, i) => (
              <RainDrop
                key={i}
                delay={i * 0.3}
                speed={2 + Math.random() * 2}
                style={{
                  left: `${Math.random() * 100}%`,
                  transform: 'translateY(-100%)',
                }}
              >
                {[...Array(8)].map(() => getRandomChar()).join('')}
              </RainDrop>
            ))}
            {[...Array(20)].map((_, i) => (
              <DigitalCharacter
                key={i}
                delay={i * 0.1}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                {getRandomChar()}
              </DigitalCharacter>
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
          </DigitalButton>
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