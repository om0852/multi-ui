"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion_93 = ({ items }: AccordionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => (
        <div key={index} className="w-full space-y-2 p-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white transition-all"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <motion.span
              animate={{ rotate: openIndices.includes(index) ? 180 : 0, scale: openIndices.includes(index) ? 1.2 : 1 }}
              transition={{ 
                duration: 0.4, 
                type: "spring",
                bounce: 0.5
              }}
              className="text-2xl text-purple-300"
            >
              ↓
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndices.includes(index) && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  bounce: 0.4
                }}
              >
                <div className="p-4 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-lg text-purple-100">
                  <p>{item.content}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion_93; 