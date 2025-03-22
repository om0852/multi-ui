'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #000;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const OrigamiButton = styled(motion.button)`
  width: 100%;
  background: #111;
  border: none;
  border-radius: 0;
  padding: 1rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 2px;
    background: #111;
    clip-path: inherit;
    z-index: 1;
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
  background: #111;
  padding: 1rem;
  color: #fff;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    opacity: 0.3;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 2px;
    background: #111;
    clip-path: inherit;
    z-index: 1;
  }
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
  position: relative;
  z-index: 2;
  text-shadow: 
    0 0 5px #ff00ff,
    0 0 10px #ff00ff;
`;

const IconWrapper = styled(motion.div)`
  color: #fff;
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff;
`;

const NeonLine = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 100px;
  height: 2px;
  background: ${props => props.color};
  filter: blur(2px);
  box-shadow: 
    0 0 5px ${props => props.color},
    0 0 10px ${props => props.color},
    0 0 20px ${props => props.color};
`;

const FoldedCorner = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(
    45deg,
    transparent 50%,
    ${props => props.color} 50%
  );
  opacity: 0.3;
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
      <OrigamiButton
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
      </OrigamiButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Content>
              <div className="relative z-10">
                {content}
              </div>
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
      <NeonLine
        color="#ff00ff"
        style={{ top: '10%', left: '-50px', transform: 'rotate(45deg)' }}
        animate={{
          x: [0, 300],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <NeonLine
        color="#00ffff"
        style={{ bottom: '20%', right: '-50px', transform: 'rotate(-45deg)' }}
        animate={{
          x: [0, -300],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />
      <FoldedCorner
        size={100}
        color="#ff00ff"
        style={{ top: 0, right: 0 }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <FoldedCorner
        size={80}
        color="#00ffff"
        style={{ bottom: 0, left: 0 }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
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
export { Container as OrigamiContainer };
export { OrigamiButton };
export { Content as OrigamiContent };
export { AccordionItem as OrigamiAccordionItem }; 

export const Example = () => {
  const items = [
    { title: "Origami Design", content: "Interface inspired by paper folding art with geometric precision." },
    { title: "Folded surfaces", content: "Elements that appear to be folded like paper with realistic shadows." },
    { title: "Transformative motion", content: "Animations that mimic the unfolding and folding of paper." }
  ];

  return <Accordion items={items} />;
}; 