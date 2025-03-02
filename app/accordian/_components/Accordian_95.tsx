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

const Accordion_95 = ({ items }: AccordionProps) => {
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
        <div key={index} className="w-full space-y-2 p-4 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-xl border border-white/10">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-4 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all backdrop-blur-md"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <motion.div
              animate={{ 
                rotateX: openIndices.includes(index) ? 180 : 0,
                scale: openIndices.includes(index) ? 1.1 : 1
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                damping: 15
              }}
              className="w-6 h-6 flex items-center justify-center text-white/90"
              style={{ transformStyle: "preserve-3d" }}
            >
              ↓
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndices.includes(index) && (
              <motion.div
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  damping: 15
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl text-white/90">
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

export default Accordion_95; 