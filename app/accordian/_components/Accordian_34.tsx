'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const RibbonButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: visible;
  border-radius: 4px;
  text-align: left;
  margin: 1rem 0;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
  
  &::before {
    right: -6px;
    top: -6px;
    transform: rotate(-45deg);
    border-radius: 0 4px 0 0;
  }
  
  &::after {
    left: -6px;
    bottom: -6px;
    transform: rotate(-45deg);
    border-radius: 0 0 4px 0;
  }
`;

const RibbonEdge = styled.div`
  position: absolute;
  width: 20px;
  height: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 4s linear infinite;
  }
  
  &.left {
    left: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  &.right {
    right: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  color: white;
  position: relative;
  border-radius: 4px;
  margin: 0 20px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
  
  &::before {
    right: -6px;
    top: -6px;
    transform: rotate(-45deg);
    border-radius: 0 4px 0 0;
  }
  
  &::after {
    left: -6px;
    bottom: -6px;
    transform: rotate(-45deg);
    border-radius: 0 0 4px 0;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  margin: 0 20px;
  display: block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div>
      <RibbonButton
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        animate={{
          backgroundColor: isOpen 
            ? 'rgba(255, 255, 255, 0.15)' 
            : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <RibbonEdge className="left" />
        <Title>{title}</Title>
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
        <RibbonEdge className="right" />
      </RibbonButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
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
export { Container as RibbonContainer };
export { RibbonButton };
export { Content as RibbonContent };
export { AccordionItem as RibbonAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Ribbon Design", content: "Elegant ribbon-like interface elements." },
    { title: "Flowing aesthetics", content: "Smooth curved shapes that resemble ribbons." },
    { title: "Decorative accents", content: "Visual embellishments using ribbon motifs." }
  ];

  return <Accordion items={items} />;
}; 