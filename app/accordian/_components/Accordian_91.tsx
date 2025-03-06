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

const Accordion_91 = ({ items }: AccordionProps) => {
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
        <div key={index} className="w-full space-y-2 p-4 bg-gray-900 rounded-lg">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <motion.span
              animate={{ rotate: openIndices.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              ↓
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndices.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-800 rounded-lg text-gray-300">
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

export default Accordion_91; 