'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CSS-in-JS style component
const NeonPulseStyle = () => (
  <style jsx global>{`
    @keyframes neon-pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.8; }
    }
    .animate-neon-pulse {
      animation: neon-pulse 2s ease-in-out infinite;
    }
  `}</style>
);

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
          isOpen ? 'bg-black' : 'bg-black/50 hover:bg-black/70'
        }`}
        onClick={onClick}
      >
        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-lg">
          <div className={`absolute inset-0 ${isOpen ? 'animate-neon-pulse' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 blur-lg" />
          </div>
        </div>

        {/* Title content */}
        <div className="relative z-10 p-4">
          <div className="flex items-center justify-between">
            <motion.span
              className={`text-lg font-medium ${
                isOpen ? 'text-white' : 'text-gray-200'
              }`}
              animate={{ 
                textShadow: isOpen 
                  ? ['0 0 4px #fff', '0 0 8px #fff', '0 0 12px #0ff'] 
                  : '0 0 0px #fff'
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                isOpen ? 'bg-white/20' : 'bg-white/10'
              }`}
            >
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isOpen ? 'text-white' : 'text-gray-400'
                }`}
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
              {/* Content background with neon effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-lg" />
              
              {/* Actual content */}
              <div className="relative rounded-b-lg bg-black/50 p-4 text-gray-300">
                <motion.div
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
      <NeonPulseStyle />
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