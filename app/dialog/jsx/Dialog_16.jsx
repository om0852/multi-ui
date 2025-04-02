"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  scroll: {
    initial: { scale: 0, opacity: 0, y: 100 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0, opacity: 0, y: -100 },
    transition: { type: "spring", damping: 12 }
  },
  magic: {
    initial: { scale: 1.5, opacity: 0, rotate: 720 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: -720 },
    transition: { duration: 0.6 }
  },
  flame: {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 2, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  enchant: {
    initial: { x: -300, opacity: 0, skewX: "30deg" },
    animate: { x: 0, opacity: 1, skewX: "0deg" },
    exit: { x: 300, opacity: 0, skewX: "-30deg" },
    transition: { type: "spring", damping: 20 }
  }
};

export function StyledDialog({ children }) {
  return <div className="relative z-50">{children}</div>;
}

export function StyledDialogContent({ children, isOpen, onClose, animationType }) {
  const animation = animationStyles[animationType];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10" />
              <div className="bg-[#f4e4bc] rounded-lg p-8 shadow-2xl border-8 border-double border-[#8b4513] relative overflow-hidden" >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-[#8b4513] text-[#f4e4bc] rounded-full hover:bg-[#6d3710] transition-colors"
                >
                  ✕
                </motion.button>
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function StyledDialogTrigger({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-[#8b4513] text-[#f4e4bc] font-medieval rounded-lg shadow-lg shadow-[#8b4513]/30 hover:shadow-[#8b4513]/50 transition-all duration-300 border-2 border-[#f4e4bc] relative overflow-hidden group"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />
      <span className="relative">{children}</span>
    </motion.button>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("scroll");

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center space-y-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9zdmc+')]" />
  );
}
