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
    <div className="relative mb-4 w-full perspective-1000">
      <button
        className="relative w-full h-16 py-6 px-8 rounded-lg bg-white border border-gray-300 shadow-md overflow-hidden focus:outline-none group"
        onClick={onClick}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 pointer-events-none group-hover:opacity-25 transition-opacity duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 4 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="flex justify-between items-center relative z-10"
          animate={{ opacity: isOpen ? 0 : 1 }}
          initial={{ opacity: 1 }}
        >
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, rotateX: -180 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 180 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-4"
            >
              <p className="text-base text-gray-700">{content}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
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
    <div className="space-y-6">
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
