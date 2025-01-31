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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg",
        "bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700",
        "text-amber-100 font-medium",
        "border border-amber-400/30",
        "shadow-lg shadow-amber-900/30",
        "hover:shadow-xl hover:shadow-amber-900/40",
        "before:absolute before:inset-0",
        "before:bg-[linear-gradient(45deg,transparent_25%,rgba(251,191,36,0.2)_50%,transparent_75%)]",
        "before:opacity-0 hover:before:opacity-100",
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
            className="absolute inset-0 bg-amber-950/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className={clsx(
              "fixed p-6",
              "bg-gradient-to-br from-amber-800 via-yellow-700 to-amber-800",
              "border border-amber-400/30",
              "shadow-2xl shadow-amber-900/40",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,191,36,0.1)_50%,transparent_75%)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-amber-300/60 hover:text-amber-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-amber-100">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 