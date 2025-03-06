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

const Accordion_94 = ({ items }: AccordionProps) => {
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
        <div key={index} className="w-full space-y-2 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-800 transition-all group"
          >
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {item.title}
            </span>
            <motion.div
              animate={{ 
                rotate: openIndices.includes(index) ? 180 : 0,
                scale: openIndices.includes(index) ? 1.1 : 1
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
            >
              ↓
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndices.includes(index) && (
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion_94; 