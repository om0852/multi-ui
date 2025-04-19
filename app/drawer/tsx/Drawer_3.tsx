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
  perspective: {
    initial: { 
      opacity: 0, 
      rotateY: 90,
      x: "100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1, 
      rotateY: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0, 
      rotateY: 90,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
  },
  fold: {
    initial: { 
      opacity: 0,
      rotateX: 90,
      y: "-100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      rotateX: 90,
      y: "-100%",
      transition: {
        duration: 0.3
      }
    },
  },
  flip: {
    initial: { 
      opacity: 0,
      rotateY: -90,
      x: "-100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      rotateY: -90,
      x: "-100%",
      transition: {
        duration: 0.3
      }
    },
  },
  unfold: {
    initial: { 
      opacity: 0,
      rotateX: -90,
      y: "100%",
      transformPerspective: 1000,
    },
    animate: { 
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0,
      rotateX: -90,
      y: "100%",
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
        "relative py-3 px-6 rounded-xl",
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "text-white font-medium",
        "transform transition-all duration-200",
        "hover:scale-105 hover:shadow-lg",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
    </button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "perspective",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed bg-gradient-to-br from-white via-white to-gray-50 p-6",
    "backdrop-blur-xl shadow-2xl",
    {
      "left-0 top-0 bottom-0 w-96": position === "left",
      "right-0 top-0 bottom-0 w-96": position === "right",
      "top-0 left-0 right-0 h-96": position === "top",
      "bottom-0 left-0 right-0 h-auto": position === "bottom",
    }
  );

  return (
    <div className="fixed inset-0 z-50 perspective-1000">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          positionClasses,
          "origin-right",
          "border border-gray-200",
          "bg-clip-padding backdrop-filter",
          "transform-gpu",
          className
        )}
      >
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={onClose}
            className={clsx(
              "p-2 rounded-full",
              "bg-gray-100 hover:bg-gray-200",
              "transform transition-all duration-200",
              "hover:rotate-90",
              "focus:outline-none focus:ring-2 focus:ring-gray-400"
            )}
          >
            <svg
              className="w-5 h-5 text-gray-600"
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
          Open 3D Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="perspective"
          position="right"
        >
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                3D Perspective Drawer
              </h2>
              <p className="mt-2 text-gray-600">
                Experience our innovative 3D drawer with perspective animations and modern design.
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <h3 className="font-semibold text-indigo-900">3D Animations</h3>
                <p className="text-sm text-indigo-600">Smooth perspective transitions</p>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Modern Design</h3>
                <p className="text-sm text-purple-600">Clean and minimal interface</p>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-100">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => alert("Action confirmed!")}
                className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
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