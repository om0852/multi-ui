"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type DrawerProps = {
  children: React.ReactNode;
  className?: string;
};

type DrawerTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

type DrawerContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: keyof typeof animations;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
};

const animations = {
  glass: {
    initial: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
      x: 20,
    },
    animate: { 
      opacity: 1,
      backdropFilter: "blur(16px)",
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
      x: 20,
      transition: {
        duration: 0.4
      }
    },
  },
  frost: {
    initial: { 
      opacity: 0,
      scale: 0.95,
      filter: "brightness(1.2) blur(8px)",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      filter: "brightness(1) blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      filter: "brightness(1.2) blur(8px)",
      transition: {
        duration: 0.4
      }
    },
  },
  crystal: {
    initial: { 
      opacity: 0,
      rotateY: 45,
      transformPerspective: 2000,
    },
    animate: { 
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      rotateY: -45,
      transition: {
        duration: 0.4
      }
    },
  },
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
        "relative py-3 px-6 rounded-xl",
        "bg-white/20",
        "text-gray-800 dark:text-white font-medium",
        "backdrop-blur-lg",
        "border border-white/30",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
        "overflow-hidden",
        "transform transition-all duration-200",
        "hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
        "hover:bg-white/30",
        "focus:outline-none focus:ring-2 focus:ring-white/50",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">✨</span>
      </span>
    </motion.button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "glass",
  position = "right",
  className,
}: DrawerContentProps) {
  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed p-6",
    "bg-white/10",
    "backdrop-blur-xl",
    "border border-white/20",
    {
      "left-0 top-0 bottom-0 w-96": position === "left",
      "right-0 top-0 bottom-0 w-96": position === "right",
      "top-0 left-0 right-0 h-96": position === "top",
      "bottom-0 left-0 right-0 h-auto": position === "bottom",
    }
  );

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/5 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={clsx(
              positionClasses,
              "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
              "transform-gpu",
              className
            )}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-50" />
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className={clsx(
                  "p-2 rounded-lg",
                  "bg-white/10",
                  "backdrop-blur-lg",
                  "text-gray-800 dark:text-white",
                  "border border-white/20",
                  "shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
                  "hover:bg-white/20",
                  "transform transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-white/50"
                )}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>
            <div className="relative h-full overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Example Usage
export function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4">
      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Glass Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="glass"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium text-gray-800 dark:text-white">Glass Interface</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Experience the elegance of frosted glass with smooth transitions.</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
                <h3 className="font-medium text-gray-800 dark:text-white">Frosted Glass</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Beautiful transparency effects</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
                <h3 className="font-medium text-gray-800 dark:text-white">Crystal Clear</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Modern glass morphism design</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 