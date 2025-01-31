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
  sunset: {
    initial: { opacity: 0, y: -20, filter: "saturate(1.5)" },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: "saturate(1)",
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      filter: "saturate(1.5)",
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg overflow-hidden",
        "bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
        "text-white font-medium",
        "shadow-lg shadow-orange-500/20",
        "hover:shadow-xl hover:shadow-orange-500/30",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0",
        "before:translate-x-[-200%]",
        "hover:before:translate-x-[200%]",
        "before:transition-transform before:duration-1000",
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
            className="absolute inset-0 bg-orange-950/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animations.sunset.initial}
            animate={animations.sunset.animate}
            exit={animations.sunset.exit}
            className={clsx(
              "fixed p-6",
              "bg-gradient-to-br from-orange-400 via-pink-500 to-red-500",
              "border border-white/10",
              "shadow-2xl shadow-orange-500/20",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-white">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 