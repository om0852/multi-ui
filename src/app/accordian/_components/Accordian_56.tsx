'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(180deg, #2b1055 0%, #7597de 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const SynthButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #ff2d95;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 10px #ff2d95,
    0 0 20px #ff2d95,
    inset 0 0 10px #ff2d95;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 45, 149, 0.4),
      transparent
    );
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff2d95;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  box-shadow: 
    0 0 5px #ff2d95,
    inset 0 0 5px #ff2d95;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 
    0 0 5px #ff2d95,
    0 0 10px #ff2d95;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  text-shadow: 
    0 0 5px #ff2d95,
    0 0 10px #ff2d95;
`;

const Grid = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: 
    linear-gradient(transparent 0%, #ff2d95 2%, transparent 2.5%),
    linear-gradient(90deg, transparent 0%, #ff2d95 2%, transparent 2.5%);
  background-size: 40px 40px;
  transform: perspective(500px) rotateX(60deg);
  animation: gridMove 20s linear infinite;
  opacity: 0.1;

  @keyframes gridMove {
    0% {
      transform: perspective(500px) rotateX(60deg) translateY(0%);
    }
    100% {
      transform: perspective(500px) rotateX(60deg) translateY(50%);
    }
  }
`;

const Sun = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ff2d95, #4b0082);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  filter: blur(20px);
  opacity: 0.5;
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
      <SynthButton
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
      </SynthButton>
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
      <Grid />
      <Sun />
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
export { Container as SynthContainer };
export { SynthButton };
export { Content as SynthContent };
export { AccordionItem as SynthAccordionItem }; 