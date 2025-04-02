"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type DrawerProps = { children: React.ReactNode; className?: string };
type DrawerTriggerProps = { children: React.ReactNode; onClick: () => void; className?: string };
type DrawerContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
};

export function Drawer({ children, className }: DrawerProps) {
  return <div className={clsx("relative z-50", className)}>{children}</div>;
}

export function DrawerTrigger({ children, onClick, className }: DrawerTriggerProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)" }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg",
        "bg-zinc-900",
        "text-green-400 font-medium",
        "border border-green-500/30",
        "shadow-lg shadow-green-500/20",
        "hover:border-green-500/50",
        "before:absolute before:inset-0 before:rounded-lg",
        "before:bg-gradient-to-r before:from-green-500/10 before:via-transparent before:to-green-500/10",
        "overflow-hidden",
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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: position === "right" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: position === "right" ? 50 : -50 }}
            className={clsx(
              "fixed p-6",
              "bg-zinc-900",
              "border border-green-500/30",
              "shadow-2xl shadow-green-500/20",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-green-400/60 hover:text-green-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-green-400">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 