"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion_95 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-96 space-y-2 p-4 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-xl border border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all backdrop-blur-md"
      >
        <span className="text-lg font-semibold">Glassmorphic Dark Accordion</span>
        <motion.div
          animate={{ 
            rotateX: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
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
        {isOpen && (
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
              <p>Experience this glassmorphic dark accordion design.</p>
              <p className="mt-2">Watch the smooth 3D flip animation on toggle!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion_95; 