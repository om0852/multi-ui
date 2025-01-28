'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #0a0a0a;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const CyberButton = styled(motion.button)`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ff9d;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #00ff9d;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ff9d, #00ffff, #ff00ff);
    z-index: -1;
    animation: borderGlow 3s linear infinite;
  }

  @keyframes borderGlow {
    0% { filter: blur(5px); }
    50% { filter: blur(10px); }
    100% { filter: blur(5px); }
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff9d;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 255, 157, 0.3);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  text-shadow: 0 0 5px #00ff9d;
`;

const IconWrapper = styled(motion.div)`
  color: #00ff9d;
  font-size: 1.25rem;
  text-shadow: 0 0 5px #00ff9d;
`;

const CyberLine = styled.div<{ delay: number }>`
  position: absolute;
  width: 100px;
  height: 2px;
  background: #00ff9d;
  opacity: 0.5;
  filter: blur(1px);
  animation: glitch ${props => 2 + props.delay}s linear infinite;

  @keyframes glitch {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateX(200%); opacity: 0; }
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
      <CyberButton
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
      <CyberLine delay={0} style={{ top: '10%', left: '0', transform: 'rotate(30deg)' }} />
      <CyberLine delay={1} style={{ top: '30%', right: '0', transform: 'rotate(-45deg)' }} />
      <CyberLine delay={2} style={{ bottom: '20%', left: '0', transform: 'rotate(-30deg)' }} />
      <CyberLine delay={3} style={{ bottom: '40%', right: '0', transform: 'rotate(45deg)' }} />
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