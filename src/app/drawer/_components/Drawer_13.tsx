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
  neon: {
    initial: { opacity: 0, x: 50, filter: "brightness(2) blur(5px)" },
    animate: { 
      opacity: 1, 
      x: 0, 
      filter: "brightness(1) blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: 50, 
      filter: "brightness(2) blur(5px)",
      transition: { duration: 0.3 }
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg",
        "bg-black text-purple-500",
        "border border-purple-500",
        "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
        "hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]",
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
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={animations.neon.initial}
            animate={animations.neon.animate}
            exit={animations.neon.exit}
            className={clsx(
              "fixed p-6",
              "bg-black border border-purple-500",
              "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-purple-500 hover:text-purple-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full text-purple-500">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 