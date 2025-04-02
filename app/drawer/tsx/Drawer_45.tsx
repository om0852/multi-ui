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
        "text-amber-950 font-semibold",
        "border border-amber-300",
        "shadow-lg shadow-amber-500/30",
        "hover:shadow-xl hover:shadow-amber-500/40",
        "before:absolute before:inset-0 before:rounded-lg",
        "before:bg-gradient-to-r before:from-yellow-300/20 before:via-yellow-100/40 before:to-yellow-300/20",
        "before:animate-[shine_2s_infinite]",
        "overflow-hidden",
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
            className="absolute inset-0 bg-amber-950/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ 
              opacity: 0,
              x: position === "right" ? "10%" : position === "left" ? "-10%" : 0,
              y: position === "top" ? "-10%" : position === "bottom" ? "10%" : 0,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0,
              x: position === "right" ? "10%" : position === "left" ? "-10%" : 0,
              y: position === "top" ? "-10%" : position === "bottom" ? "10%" : 0,
              scale: 0.95
            }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={clsx(
              "fixed p-6",
              "bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100",
              "border border-amber-300",
              "shadow-2xl shadow-amber-500/30",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-yellow-100/40 to-yellow-300/20 animate-[shine_2s_infinite]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-amber-700/60 hover:text-amber-700 z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-amber-900 z-10">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 