"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types for Accordion Context
interface AccordionContextProps {
  openItems: string[];
  toggleItem: (id: string) => void;
}

interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
  className?: string;
}

interface AccordionItemProps {
  children: ReactNode;
  id: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: ReactNode;
  id: string;
  className?: string;
  onClick?: () => void;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
}

interface AccordionContentProps {
  children: ReactNode;
  id: string;
  className?: string;
  animation?: "autoHeight";
  duration?: number;
}

// Context for Accordion state
const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

export function Accordion({
  children,
  multiple = false,
  className = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      multiple
        ? prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
        : prev[0] === id
        ? []
        : [id]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  id,
  className = "",
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { openItems } = context;
  const isOpen = openItems.includes(id);

  return (
    <div className={`${className} ${isOpen ? "open" : ""}`}>{children}</div>
  );
}

export function AccordionTrigger({
  children,
  id,
  className = "",
  onClick,
  openIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
  closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  ),
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion");
  }

  const { toggleItem, openItems } = context;
  const isOpen = openItems.includes(id);

  return (
    <button
      className={`${className} flex justify-between items-center`}
      onClick={() => {
        toggleItem(id);
        if (onClick) onClick();
      }}
    >
      <span>{children}</span>
      <span>{isOpen ? openIcon : closeIcon}</span>
    </button>
  );
}
export function AccordionContent({
    children,
    id,
    className = "",
    animation = "autoHeight",
    duration = 0.3,
  }: AccordionContentProps) {
    const context = useContext(AccordionContext);
    if (!context) {
      throw new Error("AccordionContent must be used within an Accordion");
    }
  
    const { openItems } = context;
    const isOpen = openItems.includes(id);
  
    return (
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: "auto", opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: "auto", opacity: 0 }}
            className={`${className} overflow-hidden`}
          >
            <motion.div layout>{children}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  