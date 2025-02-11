'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #2c5282 0%, #2b6cb0 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const SplitButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  padding: 0;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: stretch;
`;

const IconSection = styled(motion.div)`
  width: 60px;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shine} 4s linear infinite;
  }
`;

const ContentSection = styled.div`
  flex-grow: 1;
  padding: 1rem;
  text-align: left;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  color: white;
  position: relative;
  border-radius: 12px;
  margin-left: 60px;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled(motion.div)`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Highlight = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform-origin: left;
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
      <SplitButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <IconSection>
          <IconWrapper
            animate={{ 
              rotateY: isOpen ? 180 : 0,
              scale: isOpen ? 1.2 : 1
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            {isOpen ? '◂' : '▸'}
          </IconWrapper>
          <AnimatePresence>
            {isOpen && (
              <Highlight
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </IconSection>
        <ContentSection>
          <Title>{title}</Title>
        </ContentSection>
      </SplitButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0, x: -60 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              x: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 },
                x: { duration: 0.4, type: "spring" }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              x: -60,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                x: { duration: 0.3 }
              }
            }}
          >
            <Content>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
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
export { Container as SplitContainer };
export { SplitButton };
export { Content as SplitContent };
export { AccordionItem as SplitAccordionItem }; 