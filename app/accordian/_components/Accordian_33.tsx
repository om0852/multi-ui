'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const StackedButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  animation: ${float} 3s ease-in-out infinite;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  color: white;
  position: relative;
  border-radius: 12px;
  margin: 0.5rem 0;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 5%;
    width: 90%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    z-index: -1;
  }
  
  &::before {
    bottom: -4px;
    opacity: 0.7;
  }
  
  &::after {
    bottom: -8px;
    opacity: 0.5;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled(motion.div)`
  margin-left: auto;
  color: white;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const CardStack = styled(motion.div)`
  position: relative;
  margin-bottom: 1rem;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <CardStack>
      <StackedButton
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          y: isOpen ? -5 : 0,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
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
      </StackedButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              y: 0,
              transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 },
                y: { duration: 0.4, type: "spring" }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              y: -20,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                y: { duration: 0.3 }
              }
            }}
          >
            <Content>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
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
    </CardStack>
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
export { Container as StackedContainer };
export { StackedButton };
export { Content as StackedContent };
export { AccordionItem as StackedAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Layered Design", content: "Elements that appear stacked on top of each other." },
    { title: "Depth perception", content: "Visual hierarchy through stacked components." },
    { title: "Layer organization", content: "Structured content with z-index differentiation." }
  ];

  return <Accordion items={items} />;
}; 