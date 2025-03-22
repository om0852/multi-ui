'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #0a0a2a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const GalaxyButton = styled(motion.button)`
  width: 100%;
  background: rgba(20, 20, 50, 0.8);
  border: 1px solid rgba(138, 43, 226, 0.5);
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #8a2be2, #4b0082, #9400d3);
    z-index: -1;
    filter: blur(10px);
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(20, 20, 50, 0.8);
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
  backdrop-filter: blur(5px);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #8a2be2, #9400d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`;

const IconWrapper = styled(motion.div)`
  color: #8a2be2;
  font-size: 1.25rem;
`;

const Star = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #fff;
  border-radius: 50%;
  filter: blur(1px);
`;

const Galaxy = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(138, 43, 226, 0.2) 0%,
    rgba(75, 0, 130, 0.1) 50%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(20px);
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
      <GalaxyButton
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
      </GalaxyButton>
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
      <Galaxy
        style={{ top: '10%', right: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <Galaxy
        style={{ bottom: '10%', left: '10%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {[...Array(50)].map((_, i) => (
        <Star
          key={i}
          size={Math.random() * 2 + 1}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
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
export { Container as GalaxyContainer };
export { GalaxyButton };
export { Content as GalaxyContent };
export { AccordionItem as GalaxyAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Cosmic Interface", content: "Galaxy-inspired design with star field backgrounds and nebula effects." },
    { title: "Stellar elements", content: "Interface components that mimic celestial bodies and cosmic phenomena." },
    { title: "Space aesthetics", content: "Deep space color schemes with twinkling star particles." }
  ];

  return <Accordion items={items} />;
}; 