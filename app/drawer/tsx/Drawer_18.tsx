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
  animationType?: keyof typeof animations;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
};

const animations = {
  cosmic: {
    initial: { opacity: 0, scale: 1.1, filter: "brightness(1.5)" },
    animate: { 
      opacity: 1, 
      scale: 1,
      filter: "brightness(1)",
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      filter: "brightness(1.5)",
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
        "bg-indigo-950",
        "text-indigo-200 font-medium",
        "border border-indigo-500/30",
        "shadow-lg shadow-indigo-500/20",
        "hover:shadow-xl hover:shadow-indigo-500/30",
        "transition-all duration-300",
        "before:absolute before:inset-0",
        "before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTY3LCAxMzksIDI1MCwgMC4yKSIvPjwvc3ZnPg==')] before:opacity-30",
        "hover:before:opacity-50",
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
            className="absolute inset-0 bg-indigo-950/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animations.cosmic.initial}
            animate={animations.cosmic.animate}
            exit={animations.cosmic.exit}
            className={clsx(
              "fixed p-6",
              "bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900",
              "border border-indigo-500/20",
              "shadow-2xl shadow-indigo-500/20",
              {
                "left-0 top-0 bottom-0 w-96": position === "left",
                "right-0 top-0 bottom-0 w-96": position === "right",
                "top-0 left-0 right-0 h-96": position === "top",
                "bottom-0 left-0 right-0 h-auto": position === "bottom",
              },
              className
            )}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTY3LCAxMzksIDI1MCwgMC4yKSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.1),transparent)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-indigo-300/60 hover:text-indigo-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full text-indigo-200">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
