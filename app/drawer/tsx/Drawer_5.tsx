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
  elegant: {
    initial: { 
      opacity: 0,
      x: 20,
    },
    animate: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.4
      }
    },
  },
  minimal: {
    initial: { 
      opacity: 0,
      y: 10,
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3
      }
    },
  },
  fade: {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "linear"
      }
    },
    exit: { 
      opacity: 0,
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
    <button
      onClick={onClick}
      className={clsx(
        "relative py-2.5 px-5 rounded-full",
        "bg-white text-gray-900",
        "border border-gray-200",
        "shadow-sm",
        "hover:bg-gray-50",
        "active:bg-gray-100",
        "transform transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-gray-200",
        "text-sm font-medium",
        className
      )}
    >
      {children}
    </button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "elegant",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed bg-white p-6",
    "shadow-[0_0_50px_rgba(0,0,0,0.1)]",
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
        className="absolute inset-0 bg-black/5 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          positionClasses,
          "transform-gpu",
          className
        )}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className={clsx(
              "p-2 rounded-full",
              "text-gray-400 hover:text-gray-500",
              "hover:bg-gray-100",
              "transform transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-gray-200"
            )}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
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
          Open Minimal Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="elegant"
          position="right"
        >
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-2xl font-medium text-gray-900">
                Minimal Design
              </h2>
              <p className="mt-2 text-gray-500 leading-relaxed">
                Experience our clean and minimal interface with elegant transitions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900">Simplicity</h3>
                <p className="text-sm text-gray-500">Clean and focused interface</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900">Elegance</h3>
                <p className="text-sm text-gray-500">Smooth and refined animations</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-100">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Confirmed!")}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 