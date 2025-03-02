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
  bounce: {
    initial: { 
      opacity: 0,
      scale: 0.3,
      y: 100,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        bounce: 0.5,
        type: "spring",
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.3,
      y: 100,
      transition: {
        duration: 0.3
      }
    },
  },
  elastic: {
    initial: { 
      opacity: 0,
      scale: 0.8,
      x: 300,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      x: 300,
      transition: {
        duration: 0.3
      }
    },
  },
  wobble: {
    initial: { 
      opacity: 0,
      rotate: -10,
      y: 100,
    },
    animate: { 
      opacity: 1,
      rotate: [10, -8, 6, -4, 2, 0],
      y: 0,
      transition: {
        duration: 1,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      rotate: 10,
      y: 100,
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-full",
        "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
        "text-white font-medium",
        "shadow-lg shadow-purple-500/30",
        "border-2 border-white",
        "transform transition-all duration-200",
        "hover:shadow-xl hover:shadow-purple-500/40",
        "focus:outline-none focus:ring-4 focus:ring-purple-500/30",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        <span className="text-xl">✨</span>
      </span>
    </motion.button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "bounce",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed p-6",
    "bg-gradient-to-br from-white via-purple-50 to-pink-50",
    "border-l-4 border-purple-500",
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
        className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          positionClasses,
          "shadow-2xl shadow-purple-500/20",
          "transform-gpu",
          className
        )}
      >
        <div className="absolute top-4 right-4">
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "p-2 rounded-full",
              "bg-white text-purple-500",
              "shadow-md shadow-purple-500/20",
              "hover:shadow-lg hover:shadow-purple-500/30",
              "transform transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          Open Fun Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="bounce"
          position="right"
        >
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Fun & Playful Design ✨
              </h2>
              <p className="mt-2 text-purple-700">
                Experience our delightful interface with bouncy animations!
              </p>
            </div>
            
            <div className="grid gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-white shadow-lg shadow-purple-500/10"
              >
                <h3 className="font-bold text-purple-600">Bouncy Animations</h3>
                <p className="text-sm text-purple-500">Playful and engaging interactions</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-white shadow-lg shadow-pink-500/10"
              >
                <h3 className="font-bold text-pink-600">Colorful Design</h3>
                <p className="text-sm text-pink-500">Vibrant and cheerful interface</p>
              </motion.div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-purple-100">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDrawerOpen(false)}
                className="px-4 py-2 rounded-full text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Yay! 🎉")}
                className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-md shadow-purple-500/30"
              >
                Let&apos;s Go! 🚀
              </motion.button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 