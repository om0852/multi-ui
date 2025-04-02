"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';

const AccordionContext = createContext(undefined);

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  min-height: 100%;
`;

const AccordionButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

export function Accordion({ children, multiple = false, persistState = false, storageKey = "accordionState" }) {
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
    setOpenItems((prev) =>
      multiple ? (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]) : prev[0] === id ? [] : [id]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <Container>{children}</Container>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, id }) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within an Accordion");

  const isOpen = context.openItems.includes(id);

  return (
    <div className="mb-4">
      <AccordionButton onClick={() => context.toggleItem(id)}>
        {children}
      </AccordionButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
