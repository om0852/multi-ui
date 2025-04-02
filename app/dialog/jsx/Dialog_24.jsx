"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  toast: {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  alert: {
    initial: { scale: 0.8, y: -100, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.8, y: 100, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  badge: {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.2 }
  },
  pulse: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.1, opacity: 0 },
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div {...animation} className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-sm font-medium text-green-500">Active</span>
                </div>
                <div className="absolute top-4 right-12 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  >
                    3
                  </motion.div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  ✕
                </motion.button>
                <div className="mt-8">{children}</div>
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
      className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300 relative group"
      onClick={onClick}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-xl bg-white/20"
      />
      <span className="relative">{children}</span>
    </motion.button>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState("toast");

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col items-center justify-center space-y-8">
      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          View Notifications
        </StyledDialogTrigger>
        <StyledDialogContent isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} animationType={animationType}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">Notifications</h2>
          <p className="space-y-4">New update available for your system</p>
          <div className="mt-6 flex justify-end space-x-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsDialogOpen(false)} className="px-6 py-2 text-gray-600 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Later
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setIsDialogOpen(false); alert("Notifications cleared!"); }} className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl">
              Clear All
            </motion.button>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}
