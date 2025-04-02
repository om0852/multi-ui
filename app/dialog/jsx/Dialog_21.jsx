"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  fade: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.2 }
  },
  slide: {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  bounce: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { type: "spring", bounce: 0.5 }
  },
  spin: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
    transition: { type: "spring", damping: 10 }
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
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div {...animation} className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-black/40 backdrop-blur-md rounded-3xl p-8 overflow-hidden border border-white/10">
                <div className="absolute inset-x-0 bottom-0 h-32 flex items-end justify-center gap-1 px-8">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [20, 40 + Math.random() * 40, 20] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t-full"
                    />
                  ))}
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-xl"
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
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
      className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-full shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("fade");

  return (
    <div className="p-8 bg-gradient-to-br from-violet-900 to-fuchsia-900 min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-black/20 backdrop-blur-sm text-white/90 font-medium rounded-full hover:bg-black/30 transition-colors border border-white/10"
            onClick={() => setAnimationType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>
      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Now Playing
        </StyledDialogTrigger>
        <StyledDialogContent isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} animationType={animationType}>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">Midnight Serenade</h2>
          <p className="text-white/70 text-sm">Electronic Dreams • Album: Neon Nights<br />4:32 / 5:15</p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors text-2xl">⏮</motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full text-white text-3xl shadow-lg">▶</motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors text-2xl">⏭</motion.button>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}
