'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <button
        className={`w-full text-left relative overflow-hidden rounded-lg transition-all duration-300 ${
          isOpen ? 'bg-teal-600' : 'bg-teal-500/30 hover:bg-teal-500/50'
        }`}
        onClick={onClick}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {isOpen && [...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/30"
                initial={{ x: '50%', y: '50%', scale: 0, opacity: 1 }}
                animate={{ 
                  x: [
                    '50%',
                    `${50 + Math.cos(i * 30 * Math.PI / 180) * 100}%`,
                    `${50 + Math.cos(i * 30 * Math.PI / 180) * 120}%`
                  ],
                  y: [
                    '50%',
                    `${50 + Math.sin(i * 30 * Math.PI / 180) * 100}%`,
                    `${50 + Math.sin(i * 30 * Math.PI / 180) * 120}%`
                  ],
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0]
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 p-4">
          <div className="flex items-center justify-between">
            <motion.span
              className="text-lg font-medium text-white"
              animate={{ scale: isOpen ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? [1, 1.1, 1] : 1 }}
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
            <div className="relative mt-2">
              <div className="relative rounded-lg bg-teal-500/10 p-4">
                <motion.div
                  className="relative text-white/90"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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

export default function Accordion({ items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleClick = (index) => {
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
