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

const Accordion_92 = ({ items }: AccordionProps) => {
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
        <div key={index} className="w-full space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 rounded-lg text-gray-800 transition-colors shadow-sm"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <motion.span
              animate={{ rotate: openIndices.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="text-2xl text-blue-500"
            >
              ↓
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndices.includes(index) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 bg-white rounded-lg text-gray-600 shadow-sm">
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

export default Accordion_92; 