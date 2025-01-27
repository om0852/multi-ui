"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion_91 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-96 space-y-2 p-4 bg-gray-900 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
      >
        <span className="text-lg font-semibold">Dark Theme Accordion</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl"
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-800 rounded-lg text-gray-300">
              <p>This is a dark-themed accordion with a smooth slide animation.</p>
              <p className="mt-2">It uses Framer Motion for smooth transitions.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion_91; 