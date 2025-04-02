"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  score: {
    initial: { scale: 2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { type: "spring", damping: 12 }
  },
  board: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  stats: {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  flash: {
    initial: { opacity: 0, filter: "brightness(2)" },
    animate: { opacity: 1, filter: "brightness(1)" },
    exit: { opacity: 0, filter: "brightness(2)" },
    transition: { duration: 0.3 }
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
            className="fixed inset-0 bg-gray-900/90"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] 
                bg-[length:4px_4px] opacity-50" />
              <div className="relative bg-gray-900 rounded-xl p-8
                shadow-[0_0_50px_rgba(255,0,0,0.2)] overflow-hidden
                border-t-4 border-red-600"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <div className="absolute top-4 right-4 flex items-center gap-4 font-mono">
                  <div className="bg-black/50 px-4 py-2 rounded-lg border border-red-500/30">
                    <motion.span
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="text-red-500 text-2xl font-bold"
                    >
                      88
                    </motion.span>
                  </div>
                  <span className="text-red-500 text-xl">-</span>
                  <div className="bg-black/50 px-4 py-2 rounded-lg border border-red-500/30">
                    <motion.span
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="text-red-500 text-2xl font-bold"
                    >
                      76
                    </motion.span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    text-red-500 hover:text-red-400 transition-colors"
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
      className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg
        shadow-lg shadow-red-600/30 hover:shadow-red-600/50 
        transition-all duration-300 border-b-4 border-red-700"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("score");

  return (
    <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center 
      justify-center space-y-8"
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-800 text-red-500 font-mono
              rounded-lg hover:bg-gray-700 transition-colors
              border border-red-500/30"
            onClick={() => setAnimationType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          GAME STATS
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}
