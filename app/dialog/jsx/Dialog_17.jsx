"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  grow: {
    initial: { scale: 0.3, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.3, y: -50, opacity: 0 },
    transition: { type: "spring", damping: 8 }
  },
  bloom: {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0 },
    transition: { duration: 0.5 }
  },
  leaf: {
    initial: { x: -300, rotate: -45, opacity: 0 },
    animate: { x: 0, rotate: 0, opacity: 1 },
    exit: { x: 300, rotate: 45, opacity: 0 },
    transition: { type: "spring", damping: 12 }
  },
  roots: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.4 }
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
            className="fixed inset-0 bg-green-950/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div {...animation} className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl opacity-90" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl overflow-hidden border border-green-200">
                <motion.div initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} className="absolute inset-0">
                  <svg className="w-full h-full absolute" viewBox="0 0 400 400">
                    <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="4" />
                  </svg>
                </motion.div>
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -left-4 w-12 h-12 text-green-500 opacity-20">
                  🍃
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-4 -right-4 w-12 h-12 text-green-500 opacity-20">
                  🌿
                </motion.div>
                <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
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
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 relative overflow-hidden group" onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10" />
      <span className="relative">{children}</span>
    </motion.button>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("grow");

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen flex flex-col items-center justify-center space-y-8">
      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>Explore Nature</StyledDialogTrigger>
        <StyledDialogContent isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} animationType={animationType}>
          <h2 className="text-3xl font-bold text-green-800 mb-6">Eco Initiative</h2>
          <p className="text-green-700 leading-relaxed">Join us in our mission to protect and preserve nature. Every small action counts towards a greener future.</p>
          <div className="mt-8 flex justify-end space-x-4">
            <button onClick={() => setIsDialogOpen(false)} className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-colors">Maybe Later</button>
            <button onClick={() => { setIsDialogOpen(false); alert("Thank you for joining our eco-initiative!"); }} className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full">Join Initiative</button>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}
