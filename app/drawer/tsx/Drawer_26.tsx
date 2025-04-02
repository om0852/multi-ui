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
      whileHover={{ scale: 1.02, rotateY: 10 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "relative py-3 px-6 rounded",
        "bg-stone-50",
        "text-stone-800 font-medium",
        "border border-stone-200",
        "shadow-[4px_4px_0_0_rgba(231,229,228,1)]",
        "hover:shadow-[2px_2px_0_0_rgba(231,229,228,1)]",
        "hover:translate-x-[2px] hover:translate-y-[2px]",
        "transition-all duration-200",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-stone-50/0 after:via-stone-50/30 after:to-stone-50/0",
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
            className="absolute inset-0 bg-stone-900/10"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, rotateY: position === "right" ? 90 : -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: position === "right" ? 90 : -90 }}
            transition={{ type: "spring", damping: 20 }}
            className={clsx(
              "fixed p-6",
              "bg-stone-50",
              "border border-stone-200",
              "shadow-2xl shadow-stone-200/50",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
            style={{ perspective: "1000px", transformOrigin: position === "right" ? "right" : "left" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-stone-800">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 