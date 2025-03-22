"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';

const AccordionStyle = () => (
  <style jsx global>{`
    .glass-effect {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .glass-hover:hover {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .content-glass {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(7px);
    }
  `}</style>
);

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  min-height: 100%;
`;

export function Accordion({ children, multiple = false, className = "", persistState = false, storageKey = "accordionState" }) {
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    if (persistState) {
      const savedState = localStorage.getItem(storageKey);
      if (savedState) setOpenItems(JSON.parse(savedState));
    }
  }, [persistState, storageKey]);

  useEffect(() => {
    if (persistState) {
      localStorage.setItem(storageKey, JSON.stringify(openItems));
    }
  }, [openItems, persistState, storageKey]);

  const toggleItem = (id) => {
    setOpenItems(prev => multiple ? (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]) : (prev[0] === id ? [] : [id]));
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={`space-y-4 ${className}`}>
        <AccordionStyle />
        <Container>{children}</Container>
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, className = "", isCollapsible = true }) {
  return (
    <AccordionItemContext.Provider value={{ isCollapsible }}>
      <div className={`accordion-item ${className}`}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children, id, className = "", onClick, openIcon, closeIcon }) {
  const context = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!context || !itemContext) throw new Error("AccordionTrigger must be used within an AccordionItem");

  const { toggleItem, openItems } = context;
  const { isCollapsible } = itemContext;
  const isOpen = openItems.includes(id);

  const handleClick = () => {
    if (!isCollapsible) return;
    toggleItem(id);
    onClick?.();
  };

  return (
    <motion.button
      className={`w-full px-6 py-4 flex items-center justify-between text-white glass-hover transition-all duration-300 ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="flex-1">{children}</div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-4">
        {isOpen ? openIcon || "▲" : closeIcon || "▼"}
      </motion.div>
    </motion.button>
  );
}

export function AccordionContent({ children, id, className = "", animation = "fadeIn", duration = 0.3, loadOnOpen }) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within an Accordion");

  const isOpen = context.openItems.includes(id);
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (isOpen && loadOnOpen) {
      loadOnOpen().then(setContent);
    }
  }, [isOpen, loadOnOpen]);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div className={`overflow-hidden content-glass ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration }}>
          <div className="px-6 py-4 text-white/90">{content}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AccordionExample() {
  const items = ['item-1', 'item-2', 'item-3'];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Basic Accordion</h2>
      <Accordion multiple persistState storageKey="example-accordion" className="max-w-2xl mx-auto">
        {items.map(id => (
          <AccordionItem key={id} id={id}>
            <AccordionTrigger id={id}>Section {id.split('-')[1]}</AccordionTrigger>
            <AccordionContent id={id} animation="fadeInDown" duration={0.4}>
              <div className="p-4 text-white/90"><p>This is the content for section {id.split('-')[1]}.</p></div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
