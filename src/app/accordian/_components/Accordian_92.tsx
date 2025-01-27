"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion_92 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-96 space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 rounded-lg text-gray-800 transition-colors shadow-sm"
      >
        <span className="text-lg font-semibold">Light Theme Accordion</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="text-2xl text-blue-500"
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 bg-white rounded-lg text-gray-600 shadow-sm">
              <p>This is a light-themed accordion with a fade and scale animation.</p>
              <p className="mt-2">The transitions are smooth and elegant.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion_92; 