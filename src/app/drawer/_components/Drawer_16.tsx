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
  retro: {
    initial: { opacity: 0, y: 20, rotateX: 45 },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      rotateX: 45,
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "relative py-3 px-6 rounded",
        "bg-amber-100",
        "border-2 border-amber-900",
        "text-amber-900 font-mono",
        "shadow-[4px_4px_0_0_rgba(120,53,15,1)]",
        "hover:shadow-[2px_2px_0_0_rgba(120,53,15,1)]",
        "hover:translate-x-[2px] hover:translate-y-[2px]",
        "transition-all duration-200",
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
            className="absolute inset-0 bg-amber-900/20"
            onClick={onClose}
          />
          <motion.div
            initial={animations.retro.initial}
            animate={animations.retro.animate}
            exit={animations.retro.exit}
            className={clsx(
              "fixed p-6",
              "bg-amber-100",
              "border-2 border-amber-900",
              "shadow-[8px_8px_0_0_rgba(120,53,15,1)]",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-amber-900/20" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-900/20" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-amber-900/60 hover:text-amber-900"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full font-mono text-amber-900">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 