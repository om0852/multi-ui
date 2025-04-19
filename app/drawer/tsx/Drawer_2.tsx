"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// Types
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

// Animations
const animations = {
  slideLeft: {
    initial: { opacity: 0, x: "-100%", filter: "blur(8px)" },
    animate: { 
      opacity: 1, 
      x: "0%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      x: "-100%",
      filter: "blur(8px)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideRight: {
    initial: { opacity: 0, x: "100%", filter: "blur(8px)" },
    animate: { 
      opacity: 1, 
      x: "0%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      filter: "blur(8px)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideUp: {
    initial: { opacity: 0, y: "100%", filter: "blur(8px)" },
    animate: { 
      opacity: 1, 
      y: "0%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      y: "100%",
      filter: "blur(8px)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideDown: {
    initial: { opacity: 0, y: "-100%", filter: "blur(8px)" },
    animate: { 
      opacity: 1, 
      y: "0%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      y: "-100%",
      filter: "blur(8px)",
      transition: {
        duration: 0.3
      }
    },
  },
  fade: {
    initial: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    animate: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      filter: "blur(8px)",
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
        "relative py-3 px-6",
        "bg-gray-100 dark:bg-gray-800",
        "shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)]",
        "dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]",
        "hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.1)]",
        "dark:hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.1),inset_1px_1px_3px_rgba(0,0,0,0.3)]",
        "active:shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.7),inset_4px_4px_12px_rgba(0,0,0,0.1)]",
        "dark:active:shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.1),inset_4px_4px_12px_rgba(0,0,0,0.3)]",
        "text-gray-700 dark:text-gray-200",
        "transition-all duration-150 ease-in-out",
        "focus:outline-none",
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
  animationType = "slideRight",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType] || animations.slideRight;

  const positionClasses = clsx(
    "fixed bg-gray-100 dark:bg-gray-800 shadow-2xl p-6",
    "overflow-hidden",
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
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          positionClasses,
          "shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.7),inset_8px_8px_16px_rgba(0,0,0,0.1)]",
          "dark:shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.1),inset_8px_8px_16px_rgba(0,0,0,0.3)]",
          "transform-gpu",
          className
        )}
      >
        <button
          onClick={onClose}
          className={clsx(
            "absolute top-4 right-4 p-2 rounded-full",
            "bg-gray-200 dark:bg-gray-700",
            "shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)]",
            "dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]",
            "hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.1)]",
            "dark:hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.1),inset_1px_1px_3px_rgba(0,0,0,0.3)]",
            "focus:outline-none"
          )}
        >
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
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
          Open Neumorphic Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="slideRight"
          position="right"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Neumorphic Design
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Experience our soft UI design with smooth animations and elegant transitions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className={clsx(
                "p-4 rounded-xl",
                "bg-gray-100 dark:bg-gray-800",
                "shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)]",
                "dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]"
              )}>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Soft Shadows</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Beautiful neumorphic shadows create depth</p>
              </div>
              
              <div className={clsx(
                "p-4 rounded-xl",
                "bg-gray-100 dark:bg-gray-800",
                "shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)]",
                "dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]"
              )}>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Spring Animations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Smooth spring-based motion for natural feel</p>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className={clsx(
                  "px-4 py-2 rounded-xl",
                  "bg-gray-200 dark:bg-gray-700",
                  "shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)]",
                  "dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]",
                  "hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.1)]",
                  "dark:hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.1),inset_1px_1px_3px_rgba(0,0,0,0.3)]",
                  "text-gray-700 dark:text-gray-300",
                  "transition-all duration-150 ease-in-out",
                  "focus:outline-none"
                )}
              >
                Close
              </button>
              <button
                onClick={() => alert("Action confirmed!")}
                className={clsx(
                  "px-4 py-2 rounded-xl",
                  "bg-blue-500",
                  "shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.3)]",
                  "hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.2),inset_1px_1px_3px_rgba(0,0,0,0.3)]",
                  "text-white",
                  "transition-all duration-150 ease-in-out",
                  "focus:outline-none"
                )}
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
