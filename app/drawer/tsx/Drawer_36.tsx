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
      whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(0,255,255)" }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-md",
        "bg-black",
        "text-cyan-400 font-bold",
        "border border-cyan-500",
        "shadow-[0_0_20px_rgba(0,255,255,0.3)]",
        "hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]",
        "before:absolute before:inset-0 before:bg-cyan-400/20 before:rounded-md",
        "before:animate-[glitch_2s_infinite]",
        "after:absolute after:inset-0 after:bg-cyan-400/20 after:rounded-md",
        "after:animate-[glitch_2s_infinite_reverse]",
        "overflow-hidden",
        "transition-all duration-300",
        className
      )}
    >
      <span className="relative z-10 mix-blend-difference">{children}</span>
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: position === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: position === "right" ? 100 : -100 }}
            className={clsx(
              "fixed p-6",
              "bg-black",
              "border border-cyan-500",
              "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-cyan-400/5 animate-[glitch_2s_infinite]" />
            <div className="absolute inset-0 bg-cyan-400/5 animate-[glitch_2s_infinite_reverse]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-cyan-400/60 hover:text-cyan-400 z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-cyan-400 z-10">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 