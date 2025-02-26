"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  leaf: {
    initial: { 
      opacity: 0,
      x: -100,
      rotate: -20,
      scale: 0.9,
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: -100,
      rotate: -20,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    },
  },
  growth: {
    initial: { 
      opacity: 0,
      scale: 0.6,
      y: 50,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.6,
      y: 50,
      transition: {
        duration: 0.5
      }
    },
  },
  breeze: {
    initial: { 
      opacity: 0,
      x: 100,
      skewX: 10,
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: [10, -5, 3, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: 100,
      skewX: 10,
      transition: {
        duration: 0.5
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
        "relative py-3 px-6 rounded-full",
        "bg-gradient-to-br from-green-500 to-emerald-600",
        "text-white font-medium",
        "shadow-lg shadow-green-500/20",
        "border border-green-400/50",
        "overflow-hidden",
        "transform transition-all duration-300",
        "hover:shadow-xl hover:shadow-green-500/30",
        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_60%)]" />
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">🌿</span>
      </span>
    </motion.button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "leaf",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed p-6",
    "bg-gradient-to-br from-green-50 to-emerald-50",
    "border-l-2 border-green-200",
    {
      "left-0 top-0 bottom-0 w-96": position === "left",
      "right-0 top-0 bottom-0 w-96": position === "right",
      "top-0 left-0 right-0 h-96": position === "top",
      "bottom-0 left-0 right-0 h-auto": position === "bottom",
    }
  );

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          positionClasses,
          "shadow-2xl shadow-green-900/5",
          "transform-gpu",
          className
        )}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzIyYzU1ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-40" />
        <div className="absolute top-4 right-4">
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "p-2 rounded-full",
              "bg-white text-green-600",
              "shadow-md shadow-green-900/5",
              "hover:shadow-lg hover:text-green-700",
              "transform transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-green-500"
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
        <div className="h-full overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// Example Usage
export function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4">
      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Nature Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="leaf"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-green-800">Natural Flow</h2>
              <p className="mt-2 text-green-600">Experience the organic movement and earthy design elements.</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/50 rounded-lg border border-green-100">
                <h3 className="font-medium text-green-700">Organic Animations</h3>
                <p className="text-sm text-green-600 mt-1">Smooth, nature-inspired transitions</p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg border border-green-100">
                <h3 className="font-medium text-green-700">Earthy Colors</h3>
                <p className="text-sm text-green-600 mt-1">Calming green and emerald tones</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 