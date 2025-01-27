'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const rain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(1000%); opacity: 0; }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0; }
  50% { text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #000500 0%, #002000 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const DigitalButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 20, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 0, 0.3);
  padding: 1.5rem;
  color: #0f0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  font-family: monospace;
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(0, 20, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 0, 0.2);
  padding: 1.5rem;
  color: #0f0;
  position: relative;
  border-radius: 8px;
  font-family: monospace;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 5px #0f0;
  z-index: 1;
  position: relative;
  animation: ${glow} 2s ease-in-out infinite;
`;

const IconWrapper = styled(motion.div)`
  color: #0f0;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RainCharacter = styled(motion.div)<{ delay: number; speed: number }>`
  position: absolute;
  font-family: monospace;
  font-size: ${props => Math.random() * 8 + 8}px;
  color: #0f0;
  opacity: 0;
  white-space: nowrap;
  animation: ${rain} ${props => props.speed}s linear infinite;
  animation-delay: ${props => props.delay}s;
  text-shadow: 0 0 5px #0f0;
`;

const RainContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const characters = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789Z';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  const rainDrops = Array.from({ length: 30 }, (_, i) => ({
    char: characters[Math.floor(Math.random() * characters.length)],
    x: Math.random() * 100,
    delay: Math.random() * 5,
    speed: Math.random() * 3 + 2
  }));

  return (
    <div>
      <DigitalButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <RainContainer>
          {rainDrops.map((drop, index) => (
            <RainCharacter
              key={index}
              delay={drop.delay}
              speed={drop.speed}
              style={{ left: `${drop.x}%` }}
            >
              {drop.char}
            </RainCharacter>
          ))}
        </RainContainer>
        <Title>
          {title}
          <IconWrapper
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.2 : 1
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            ▾
          </IconWrapper>
        </Title>
      </DigitalButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              y: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 },
                y: { duration: 0.3, type: "spring" }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              y: -20,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                y: { duration: 0.2 }
              }
            }}
          >
            <Content>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.3
                  }
                }}
              >
                {content}
              </motion.div>
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
export { Container as DigitalContainer };
export { DigitalButton };
export { Content as DigitalContent };
export { AccordionItem as DigitalAccordionItem }; 