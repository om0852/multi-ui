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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "relative py-3 px-6",
        "bg-white",
        "text-slate-800 font-medium",
        "border border-slate-200",
        "shadow-[2px_2px_0_0_rgba(226,232,240,1)]",
        "hover:shadow-[1px_1px_0_0_rgba(226,232,240,1)]",
        "hover:translate-x-[1px] hover:translate-y-[1px]",
        "transition-all duration-200",
        className
      )}
      style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
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
            className="absolute inset-0 bg-slate-900/10"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 20, rotateX: 10 }}
            transition={{ type: "spring", damping: 20 }}
            className={clsx(
              "fixed p-6",
              "bg-white",
              "shadow-lg",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
            style={{ 
              clipPath: position === "right" 
                ? "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" 
                : position === "left"
                ? "polygon(0 0, 90% 0, 100% 100%, 0 100%)"
                : undefined
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(226,232,240,0.1)_50%,transparent_60%)]" />
            <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-slate-800">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 