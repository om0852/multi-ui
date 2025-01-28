"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion_94 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-96 space-y-2 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-800 transition-all group"
      >
        <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Modern Light Accordion
        </span>
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
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
        {isOpen && (
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
              <p className="text-gray-700">This is a modern light accordion with elastic animations.</p>
              <p className="mt-2 text-gray-600">The spring physics create a delightful bouncy effect!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion_94; 