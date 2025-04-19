'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background: #ffffff;
  min-height: 100%;
`;

const MinimalButton = styled(motion.button)`
  width: 100%;
  background: transparent;
  border: 1px solid #eaeaea;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #333;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #000;
    background: #fafafa;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  padding: 1rem;
  color: #666;
  border-left: 2px solid #eaeaea;
  margin-left: 0.5rem;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const IconWrapper = styled(motion.div)`
  color: #999;
  font-size: 1rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eaeaea;
  border-radius: 50%;
`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

 export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-3">
      <MinimalButton
        onClick={onClick}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <IconWrapper
            animate={{ 
              rotate: isOpen ? 180 : 0,
              borderColor: isOpen ? '#000' : '#eaeaea'
            }}
            transition={{ duration: 0.2 }}
          >
            ↓
          </IconWrapper>
        </div>
      </MinimalButton>
      <AnimatePresence>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
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

export default  function Accordion({ items, allowMultiple = false }: AccordionProps) {
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
export { Container as MinimalContainer };
export { MinimalButton };
export { Content as MinimalContent };
export { AccordionItem as MinimalAccordionItem };

export const Example = () => {
  const items = [
    { title: "Minimalist", content: "A clean, minimalist accordion design." },
    { title: "Simple UI", content: "Perfect for modern interfaces." },
    { title: "Lightweight", content: "Optimized for performance." }
  ];

  return <Accordion items={items} />;
};
