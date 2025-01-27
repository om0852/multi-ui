'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const glitch = keyframes`
  0% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); }
  10% { clip-path: inset(10% 0 85% 0); transform: translate(2px, -2px); }
  20% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); }
  30% { clip-path: inset(10% 0 85% 0); transform: translate(2px, -2px); }
  40% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 2px); }
  50% { clip-path: inset(0% 0 100% 0); transform: translate(2px, -2px); }
  60% { clip-path: inset(100% 0 0% 0); transform: translate(-2px, 2px); }
  70% { clip-path: inset(20% 0 75% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); }
  90% { clip-path: inset(10% 0 85% 0); transform: translate(2px, -2px); }
  100% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); }
`;

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      -0.2rem -0.2rem 1rem #ff00de,
      0.2rem 0.2rem 1rem #00ffff,
      0 0 2rem #ff00de,
      0 0 4rem #00ffff,
      0 0 6rem #ff00de,
      0 0 8rem #00ffff;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

const Container = styled.div`
  padding: 1rem;
  background: #000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      transparent 0%,
      rgba(0, 0, 0, 0.3) 50%,
      transparent 100%
    );
    background-size: 100% 4px;
    animation: ${scanline} 10s linear infinite;
  }
`;

const CyberButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ffff;
  padding: 1rem;
  color: #00ffff;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #ff00de;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    background: #000;
    transform: translateX(-100%);
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    animation: ${glitch} 2s infinite;
    display: none;
  }
  
  &:hover::after {
    display: flex;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #ff00de;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 0, 222, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 200%;
    animation: ${scanline} 4s linear infinite;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
  position: relative;
  z-index: 1;
  animation: ${neonFlicker} 2s infinite alternate;
`;

const IconWrapper = styled(motion.div)`
  color: #00ffff;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px #00ffff;
`;

const NeonLine = styled.div<{ color: string; width: string; angle: number }>`
  position: absolute;
  width: ${props => props.width};
  height: 2px;
  background: ${props => props.color};
  filter: blur(2px);
  transform: rotate(${props => props.angle}deg);
  box-shadow: 0 0 10px ${props => props.color},
              0 0 20px ${props => props.color},
              0 0 30px ${props => props.color},
              0 0 40px ${props => props.color};
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-4">
      <CyberButton
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-text={title}
      >
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.2 : 1
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            ▼
          </IconWrapper>
        </div>
      </CyberButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Content>
              {content}
            </Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(openIndexes.includes(index)
        ? openIndexes.filter(i => i !== index)
        : [...openIndexes, index]
      );
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <Container>
      <NeonLine color="#ff00de" width="200px" angle={-45} style={{ top: '10%', left: '-50px' }} />
      <NeonLine color="#00ffff" width="300px" angle={15} style={{ top: '30%', right: '-100px' }} />
      <NeonLine color="#ff00de" width="250px" angle={60} style={{ bottom: '20%', left: '-70px' }} />
      <NeonLine color="#00ffff" width="180px" angle={-30} style={{ bottom: '40%', right: '-40px' }} />
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
}

// Export individual components
export { Container as CyberContainer };
export { CyberButton };
export { Content as CyberContent };
export { AccordionItem as CyberAccordionItem };
export { NeonLine };
