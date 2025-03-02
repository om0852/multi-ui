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
      whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
      whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg",
        "bg-gradient-to-br from-slate-300 via-slate-100 to-slate-300",
        "text-slate-700 font-semibold",
        "border border-slate-400/30",
        "shadow-lg shadow-slate-300/30",
        "hover:shadow-xl hover:shadow-slate-300/40",
        "before:absolute before:inset-0 before:rounded-lg",
        "before:bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.5)_40%,transparent_60%)]",
        "before:animate-[shine_3s_infinite]",
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
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, rotateY: position === "right" ? 30 : -30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: position === "right" ? 30 : -30, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className={clsx(
              "fixed p-6",
              "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200",
              "border border-slate-300",
              "shadow-2xl shadow-slate-300/30",
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
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.3)_50%,transparent_70%)] animate-[shine_3s_infinite]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-slate-700">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 