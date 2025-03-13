"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DrawerProps {
  children: React.ReactNode;
}

interface DrawerTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
}

interface DrawerContentProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
}

const Drawer = ({ children }: DrawerProps) => {
  return <div>{children}</div>;
};

const DrawerTrigger = ({ children, onClick }: DrawerTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 
      text-white rounded-lg font-medium shadow-lg hover:shadow-cyan-200/50 
      transition-all duration-300 hover:scale-105 active:scale-95
      border border-cyan-200/30 backdrop-blur-sm"
    >
      {children}
    </button>
  );
};

const DrawerContent = ({ children, isOpen, onClose, position = "left" }: DrawerContentProps) => {
  // Backdrop click handler
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const drawerVariants = {
    hidden: (position: string) => ({
      x: position === "left" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
      rotateY: position === "left" ? -15 : 15
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.5
      }
    },
    exit: (position: string) => ({
      x: position === "left" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
      rotateY: position === "left" ? -15 : 15,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.4
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`absolute ${position}-0 top-0 h-full w-[400px] max-w-[90vw] 
            bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white
            border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/10
            overflow-hidden`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            custom={position}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
            
            {/* Content */}
            <div className="relative h-full p-6 overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Drawer, DrawerTrigger, DrawerContent }; 