'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
`;

const cloudDrift = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translateX(100vw); opacity: 0; }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(180deg, #87CEEB 0%, #E0F6FF 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const IslandButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: none;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 -2px 0 rgba(255, 255, 255, 0.3) inset,
    0 2px 0 rgba(0, 0, 0, 0.2) inset;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 5%;
    width: 90%;
    height: 4px;
    background: #90EE90;
    border-radius: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    filter: blur(4px);
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  color: #333;
  position: relative;
  border-radius: 12px;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    0 -2px 0 rgba(255, 255, 255, 0.5) inset;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled(motion.div)`
  color: white;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Cloud = styled.div<{ size: number; speed: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.6}px;
  background: white;
  border-radius: ${props => props.size}px;
  opacity: 0;
  animation: ${cloudDrift} ${props => props.speed}s linear infinite;
  animation-delay: ${props => props.delay}s;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: white;
    border-radius: 50%;
  }
  
  &::before {
    width: ${props => props.size * 0.6}px;
    height: ${props => props.size * 0.6}px;
    top: -${props => props.size * 0.2}px;
    left: ${props => props.size * 0.1}px;
  }
  
  &::after {
    width: ${props => props.size * 0.8}px;
    height: ${props => props.size * 0.8}px;
    top: -${props => props.size * 0.1}px;
    right: ${props => props.size * 0.1}px;
  }
`;

const FloatingIsland = styled.div<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.4}px;
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
  border-radius: ${props => props.size}px ${props => props.size}px 0 0;
  animation: ${float} ${props => 4 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 10%;
    width: 80%;
    height: 8px;
    background: #90EE90;
    border-radius: 4px;
  }
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
      <IslandButton
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
      </IslandButton>
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
      <Cloud size={60} speed={20} delay={0} style={{ top: '20%' }} />
      <Cloud size={40} speed={15} delay={5} style={{ top: '40%' }} />
      <Cloud size={50} speed={25} delay={10} style={{ top: '60%' }} />
      <FloatingIsland size={100} delay={0} style={{ top: '10%', left: '10%' }} />
      <FloatingIsland size={80} delay={1} style={{ top: '30%', right: '20%' }} />
      <FloatingIsland size={120} delay={2} style={{ bottom: '20%', left: '15%' }} />
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
export { Container as IslandContainer };
export { IslandButton };
export { Content as IslandContent };
export { AccordionItem as IslandAccordionItem };
export { Cloud, FloatingIsland }; 

export const Example = () => {
  const items = [
    { title: "Floating Islands", content: "Dreamy island-inspired design elements." },
    { title: "Cloud animations", content: "Soft floating cloud effects." },
    { title: "Light atmosphere", content: "Airy and relaxed visual theme." }
  ];

  return <Accordion items={items} />;
}; 