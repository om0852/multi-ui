"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion_93 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-96 space-y-2 p-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white transition-all"
      >
        <span className="text-lg font-semibold">Gradient Dark Accordion</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
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
        {isOpen && (
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
              <p>This accordion features a beautiful gradient dark theme.</p>
              <p className="mt-2">Notice the playful bounce animation on open/close!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion_93; 