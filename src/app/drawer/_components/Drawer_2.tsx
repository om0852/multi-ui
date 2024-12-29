"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// Types
type DrawerProps = {
  children: React.ReactNode;
};

type DrawerTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
};

type DrawerContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: keyof typeof animations;
  position?: "left" | "right" | "top" | "bottom";
};

// Animations
const animations = {
  slideLeft: {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%" },
  },
  slideRight: {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  },
  slideUp: {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "100%" },
  },
  slideDown: {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-100%" },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

export function Drawer({ children }: DrawerProps) {
  return <div className="relative z-50">{children}</div>;
}

export function DrawerTrigger({ children, onClick }: DrawerTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "py-2 px-4 rounded-lg",
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
        "hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
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
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType] || animations.slideRight;

  const positionClasses = clsx(
    "fixed bg-black text-white rounded-lg shadow-lg p-6",
    "overflow-hidden",
    {
      "left-0 top-0 bottom-0 w-80": position === "left",
      "right-0 top-0 bottom-0 w-80": position === "right",
      "top-0 left-0 right-0 h-80": position === "top",
      "bottom-0 left-0 right-0 h-auto": position === "bottom",
    }
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.3 }}
        className={positionClasses}
      >
        <button
          onClick={onClose}
          className={clsx(
            "absolute top-4 right-4 text-gray-300 hover:text-white",
            "focus:outline-none"
          )}
        >
          &#x2715;
        </button>
        {children}
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
          Open Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="slideUp"
          position="bottom"
        >
          <div>
            <h2 className="text-xl font-semibold text-pink-400">Neon Drawer</h2>
            <p className="text-gray-400 mt-2">
              This is a fully customizable drawer.
            </p>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className={clsx(
                "py-2 px-4 rounded-lg bg-gray-800 text-white",
                "hover:bg-gray-700"
              )}
            >
              Close
            </button>
            <button
              onClick={() => alert("Confirmed!")}
              className={clsx(
                "py-2 px-4 rounded-lg",
                "bg-gradient-to-r from-pink-500 to-purple-500 text-white",
                "hover:from-pink-600 hover:to-purple-600"
              )}
            >
              Confirm
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
