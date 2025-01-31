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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg overflow-hidden",
        "bg-slate-900",
        "text-cyan-400 font-medium",
        "border border-cyan-500/30",
        "shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        "hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]",
        "before:absolute before:inset-0",
        "before:bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.1)_50%,transparent_75%)]",
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
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: position === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: position === "right" ? 100 : -100 }}
            className={clsx(
              "fixed p-6",
              "bg-slate-900",
              "border border-cyan-500/30",
              "shadow-[0_0_30px_rgba(34,211,238,0.3)]",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.05)_50%,transparent_75%)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-cyan-400/60 hover:text-cyan-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-cyan-400">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 