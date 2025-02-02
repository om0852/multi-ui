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
      whileHover={{ scale: 1.02, rotateX: -10 }}
      whileTap={{ scale: 0.98, rotateX: 0 }}
      className={clsx(
        "relative py-3 px-6",
        "bg-white",
        "text-slate-700 font-medium",
        "[clip-path:polygon(0_0,100%_0,95%_50%,100%_100%,0_100%,5%_50%)]",
        "shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.9)]",
        "hover:shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(255,255,255,0.9)]",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-slate-50 before:to-white",
        "before:[clip-path:polygon(0_0,100%_0,95%_50%,100%_100%,0_100%,5%_50%)]",
        "[transform-style:preserve-3d]",
        "transition-all duration-300",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
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
            className="absolute inset-0 bg-slate-500/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ 
              opacity: 0,
              x: position === "right" ? "100%" : position === "left" ? "-100%" : 0,
              y: position === "top" ? "-100%" : position === "bottom" ? "100%" : 0,
              rotateY: position === "right" ? 45 : position === "left" ? -45 : 0,
              rotateX: position === "top" ? -45 : position === "bottom" ? 45 : 0
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0,
              x: position === "right" ? "100%" : position === "left" ? "-100%" : 0,
              y: position === "top" ? "-100%" : position === "bottom" ? "100%" : 0,
              rotateY: position === "right" ? 45 : position === "left" ? -45 : 0,
              rotateX: position === "top" ? -45 : position === "bottom" ? 45 : 0
            }}
            transition={{ type: "spring", damping: 20 }}
            className={clsx(
              "fixed p-6",
              "bg-white",
              "shadow-[20px_20px_60px_rgba(0,0,0,0.1),-20px_-20px_60px_rgba(255,255,255,0.9)]",
              "[transform-style:preserve-3d]",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-slate-700 z-10">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 