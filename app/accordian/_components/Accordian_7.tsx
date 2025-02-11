'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const morphAnimation = keyframes`
  0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const MorphingButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  animation: ${morphAnimation} 8s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: none;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  animation: ${morphAnimation} 8s ease-in-out infinite;
  animation-delay: -4s;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
`;

const Shape = styled.div<{ delay: number; size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  opacity: 0.5;
  filter: blur(40px);
  animation: ${morphAnimation} ${props => 8 + props.delay}s ease-in-out infinite;
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
      <MorphingButton
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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
      </MorphingButton>
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
      <Shape delay={0} size={200} color="#12c2e9" style={{ top: '10%', left: '10%' }} />
      <Shape delay={2} size={300} color="#c471ed" style={{ top: '40%', right: '20%' }} />
      <Shape delay={4} size={250} color="#f64f59" style={{ bottom: '10%', left: '30%' }} />
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
export { Container as MorphingContainer };
export { MorphingButton };
export { Content as MorphingContent };
export { AccordionItem as MorphingAccordionItem };
export { Shape };
