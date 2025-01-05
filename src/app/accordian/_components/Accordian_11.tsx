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
    <div className="relative mb-4 w-full">
      <button
        className={`relative w-full py-6 px-8 rounded-lg bg-white border border-gray-300 shadow-md transition-transform duration-300 ${
          isOpen ? 'transform rotate-y-180' : ''
        }`}
        onClick={onClick}
      >
        <motion.div
          className="absolute inset-0 bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center text-center transition-all duration-300"
          animate={{ opacity: isOpen ? 0 : 1 }}
          initial={{ opacity: 1 }}
        >
          <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg p-6 text-white opacity-0 flex flex-col justify-center items-center text-center"
          animate={{ opacity: isOpen ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base">{content}</p>
        </motion.div>
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
