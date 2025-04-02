'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CSS-in-JS style component
const FlipStyle = () => (
  <style jsx global>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .backface-hidden {
      backface-visibility: hidden;
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
    <div className="mb-4 perspective-1000">
      <button
        className="w-full text-left relative overflow-hidden rounded-lg transition-all duration-300"
        onClick={onClick}
      >
        {/* 3D Flip container */}
        <motion.div
          className="relative"
          animate={{
            rotateX: isOpen ? 180 : 0,
            zIndex: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front face */}
          <div
            className={`p-4 rounded-lg backface-hidden ${
              isOpen
                ? 'bg-gradient-to-r from-rose-500 to-purple-500'
                : 'bg-gradient-to-r from-rose-500/30 to-purple-500/30 hover:from-rose-500/50 hover:to-purple-500/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-white">
                {title}
              </span>
              <div
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
              </div>
            </div>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-rose-500 backface-hidden"
            style={{
              transform: 'rotateX(180deg)',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-white">
                {title}
              </span>
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/30">
                <svg
                  className="w-4 h-4 text-white transform rotate-180"
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
              </div>
            </div>
          </div>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {/* Content with 3D effect */}
            <div className="relative mt-2">
              <motion.div
                className="relative rounded-lg bg-gradient-to-r from-rose-500/10 to-purple-500/10 p-4"
                initial={{ rotateX: -10 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-purple-500/5 rounded-lg transform -skew-y-2" />
                <motion.div
                  className="relative text-white/90"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {content}
                </motion.div>
              </motion.div>
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
      <FlipStyle />
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