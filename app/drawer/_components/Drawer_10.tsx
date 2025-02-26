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
  lollipop: {
    initial: { 
      opacity: 0,
      rotate: -10,
      scale: 0.9,
      y: 20,
    },
    animate: { 
      opacity: 1,
      rotate: 0,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.5,
      }
    },
    exit: { 
      opacity: 0,
      rotate: 10,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.4
      }
    },
  },
  bubblegum: {
    initial: { 
      opacity: 0,
      scale: 1.2,
      borderRadius: "100%",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      borderRadius: "0%",
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.4,
      }
    },
    exit: { 
      opacity: 0,
      scale: 1.2,
      borderRadius: "100%",
      transition: {
        duration: 0.3
      }
    },
  },
  candy: {
    initial: { 
      opacity: 0,
      x: 100,
      rotate: 45,
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotate: [45, -10, 5, 0],
      transition: {
        duration: 0.6,
        times: [0, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: 100,
      rotate: 45,
      transition: {
        duration: 0.3
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
      whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-full",
        "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400",
        "text-white font-bold",
        "shadow-lg shadow-pink-400/30",
        "border-4 border-white",
        "overflow-hidden",
        "transform transition-all duration-300",
        "hover:shadow-xl hover:shadow-pink-400/40",
        "focus:outline-none focus:ring-4 focus:ring-pink-400/30",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_60%)]" />
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">🍬</span>
      </span>
    </motion.button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "lollipop",
  position = "right",
  className,
}: DrawerContentProps) {
  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed p-6",
    "bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100",
    "border-4 border-white",
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
            className="absolute inset-0 bg-pink-500/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={clsx(
              positionClasses,
              "shadow-2xl shadow-pink-500/20",
              "transform-gpu",
              className
            )}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMyIgZmlsbD0iI2VjNGI5OSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-indigo-200/40" />
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className={clsx(
                  "p-2 rounded-full",
                  "bg-white text-pink-500",
                  "shadow-lg shadow-pink-500/20",
                  "hover:shadow-xl hover:shadow-pink-500/30",
                  "transform transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-pink-400"
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
          Sweet Treats
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="lollipop"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Candy Shop
              </h2>
              <p className="mt-2 text-pink-600">Discover our delightful collection of sweet animations and sugary designs.</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/50 rounded-lg border-2 border-pink-200">
                <h3 className="font-bold text-pink-500">Sweet Animations</h3>
                <p className="text-sm text-pink-600/80 mt-1">Playful and bouncy transitions</p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg border-2 border-pink-200">
                <h3 className="font-bold text-pink-500">Candy Colors</h3>
                <p className="text-sm text-pink-600/80 mt-1">Vibrant and delicious palette</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 