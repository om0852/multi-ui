"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';

// CSS-in-JS style component
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

// Types for Accordion Context
interface AccordionContextProps {
  openItems: string[];
  toggleItem: (id: string) => void;
}

interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
  className?: string;
  persistState?: boolean; // Save state to localStorage
  storageKey?: string; // Key for localStorage
}

interface AccordionItemProps {
  children: ReactNode;
  id: string;
  className?: string;
  isCollapsible?: boolean; // If the item can be collapsed
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
  children?: ReactNode;
  id: string;
  className?: string;
  animation?:
    | "fadeIn"
    | "slideIn"
    | "zoomIn"
    | "bounceIn"
    | "fadeInUp"
    | "fadeInDown"
    | "slideFromLeft"
    | "slideFromRight"
    | "scaleUp"
    | "rotateIn";
  duration?: number;
  loadOnOpen?: () => Promise<ReactNode>; // Async loading
}

interface AccordionItemContextProps {
  isCollapsible: boolean;
}

// Context for Accordion state
const AccordionContext = createContext<AccordionContextProps | null>(null);

const AccordionItemContext = createContext<AccordionItemContextProps | null>(null);

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  min-height: 100%;
`;



export function Accordion({
  children,
  multiple = false,
  className = "",
  persistState = false,
  storageKey = "accordionState",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Load state from localStorage on mount
  useEffect(() => {
    if (persistState) {
      const savedState = localStorage.getItem(storageKey);
      if (savedState) setOpenItems(JSON.parse(savedState));
    }
  }, [persistState, storageKey]);

  // Save state to localStorage on change
  useEffect(() => {
    if (persistState) {
      localStorage.setItem(storageKey, JSON.stringify(openItems));
    }
  }, [openItems, persistState, storageKey]);

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
      <div className={`space-y-4 ${className}`}>
        <AccordionStyle />
        <Container>
          {children}
        </Container>
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  className = "",
  isCollapsible = true,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  return (
    <AccordionItemContext.Provider value={{ isCollapsible }}>
      <div className={`accordion-item ${className}`}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  id,
  className = "",
  onClick,
  openIcon,
  closeIcon,
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error("AccordionTrigger must be used within an AccordionItem");
  }

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
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="ml-4"
      >
        {isOpen
          ? openIcon || (
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )
          : closeIcon || (
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
      </motion.div>
    </motion.button>
  );
}

export function AccordionContent({
  children,
  id,
  className = "",
  animation = "fadeIn",
  duration = 0.3,
  loadOnOpen,
}: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion");
  }

  const isOpen = context.openItems.includes(id);
  const [content, setContent] = useState<ReactNode>(children);

  useEffect(() => {
    if (isOpen && loadOnOpen) {
      loadOnOpen().then(setContent);
    }
  }, [isOpen, loadOnOpen]);

  const getAnimation = (animation: string) => {
    const animations = {
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
      slideIn: {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
      },
      zoomIn: {
        initial: { scale: 0.95, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.95, opacity: 0 },
      },
      bounceIn: {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
      },
      fadeInUp: {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
      },
      fadeInDown: {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
      },
      slideFromLeft: {
        initial: { x: -20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -20, opacity: 0 },
      },
      slideFromRight: {
        initial: { x: 20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 20, opacity: 0 },
      },
      scaleUp: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
      },
      rotateIn: {
        initial: { rotate: -5, opacity: 0 },
        animate: { rotate: 0, opacity: 1 },
        exit: { rotate: -5, opacity: 0 },
      },
    };

    return animations[animation as keyof typeof animations] || animations.fadeIn;
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className={`overflow-hidden content-glass ${className}`}
          {...getAnimation(animation)}
          transition={{ duration }}
        >
          <div className="px-6 py-4 text-white/90">{content}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Expand/Collapse All Controls
export function AccordionControls({
  items,
}: {
  items: string[];
}) {
  const context = useContext(AccordionContext);
  if (!context) return null;

  return (
    <div className="flex space-x-2">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-4 py-2 rounded-lg glass-effect glass-hover text-white/90 text-sm"
        onClick={() => items.forEach((id) => context.toggleItem(id))}
      >
        Expand All
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-4 py-2 rounded-lg glass-effect glass-hover text-white/90 text-sm"
        onClick={() => items.forEach((id) => {
          if (context.openItems.includes(id)) {
            context.toggleItem(id);
          }
        })}
      >
        Collapse All
      </motion.button>
    </div>
  );
}


export function AccordionExample1() {
  const items = ['item-1', 'item-2', 'item-3'];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Basic Accordion</h2>
      
      {/* Controls to expand/collapse all items */}
      <div className="mb-4">
        <AccordionControls items={items} />
      </div>

      {/* Accordion component */}
      <Accordion 
        multiple={true} 
        persistState={true} 
        storageKey="example1-accordion"
        className="max-w-2xl mx-auto"
      >
        <AccordionItem id="item-1">
          <AccordionTrigger id="item-1">
            Section 1
          </AccordionTrigger>
          <AccordionContent 
            id="item-1" 
            animation="fadeInDown"
            duration={0.4}
          >
            <div className="p-4 text-white/90">
              <p>This is the content for section 1.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item-2">
          <AccordionTrigger id="item-2">
            Section 2
          </AccordionTrigger>
          <AccordionContent 
            id="item-2"
            animation="slideFromRight"
            duration={0.5}
          >
            <div className="p-4 text-white/90">
              <p>This is the content for section 2.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item-3" isCollapsible={true}>
          <AccordionTrigger id="item-3">
            Section 3
          </AccordionTrigger>
          <AccordionContent 
            id="item-3"
            animation="bounceIn"
            duration={0.6}
          >
            <div className="p-4 text-white/90">
              <p>This is the content for section 3.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 