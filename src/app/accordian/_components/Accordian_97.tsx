'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-4">
      <button
        className={`w-full text-left relative overflow-hidden rounded-lg transition-all duration-300 ${
          isOpen ? 'bg-indigo-600' : 'bg-indigo-500/30 hover:bg-indigo-500/50'
        }`}
        onClick={onClick}
      >
        {/* Morphing background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                initial={false}
                animate={{
                  scale: isOpen ? [1, 1.2, 1] : 1,
                  x: isOpen ? [0, 50, -50, 0] : 0,
                  y: isOpen ? [0, -30, 30, 0] : 0,
                  opacity: isOpen ? [0.2, 0.3, 0.2] : 0.1,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${30 * i}%`,
                  top: `${20 * (i + 1)}%`,
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Title content */}
        <div className="relative z-10 p-4">
          <div className="flex items-center justify-between">
            <motion.span
              className="text-lg font-medium text-white"
              animate={{
                scale: isOpen ? [1, 1.02, 1] : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.span>
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
                scale: isOpen ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                isOpen ? 'bg-white/30' : 'bg-white/10'
              }`}
            >
              <svg
                className="w-4 h-4 text-white transform transition-transform"
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
            </motion.div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="relative">
              {/* Content with morphing background */}
              <div className="relative rounded-b-lg bg-indigo-500/10 p-4">
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-indigo-500/5 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, -30, 0],
                        y: [0, -20, 20, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                      style={{
                        left: `${40 * i}%`,
                        top: `${30 * (i + 1)}%`,
                        width: `${150 + i * 50}px`,
                        height: `${150 + i * 50}px`,
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  className="relative text-white/90"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {content}
                </motion.div>
              </div>
            </div>
          </motion.div>
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
      setOpenIndexes(
        openIndexes.includes(index)
          ? openIndexes.filter((i) => i !== index)
          : [...openIndexes, index]
      );
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
} 