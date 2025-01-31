 "use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type DrawerProps = { children: React.ReactNode; className?: string };
type DrawerTriggerProps = { children: React.ReactNode; onClick: () => void; className?: string };
type DrawerContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: keyof typeof animations;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
};

const animations = {
  nature: {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: 10,
      transition: { duration: 0.4 }
    },
  }
};

export function Drawer({ children, className }: DrawerProps) {
  return <div className={clsx("relative z-50", className)}>{children}</div>;
}

export function DrawerTrigger({ children, onClick, className }: DrawerTriggerProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "relative py-3 px-6 rounded-full",
        "bg-gradient-to-br from-green-600 to-green-700",
        "text-green-50 font-medium",
        "border border-green-400/30",
        "shadow-lg shadow-green-900/20",
        "hover:shadow-xl hover:shadow-green-900/30",
        "hover:from-green-500 hover:to-green-600",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  position = "right",
  className,
}: DrawerContentProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-green-950/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animations.nature.initial}
            animate={animations.nature.animate}
            exit={animations.nature.exit}
            className={clsx(
              "fixed p-6",
              "bg-gradient-to-br from-green-50 to-green-100",
              "border border-green-200",
              "shadow-2xl shadow-green-900/20",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-green-600/60 hover:text-green-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-green-800">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}