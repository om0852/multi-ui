"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Types
type DrawerProps = {
  children: React.ReactNode;
};

type DrawerTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
};

type AnimationType = keyof typeof animations;

type DrawerContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: AnimationType;
  customAnimation?: {
    initial: Record<string, any>;
    animate: Record<string, any>;
    exit: Record<string, any>;
  };
  position?: "left" | "right" | "top" | "bottom";
};

type DrawerHeaderProps = {
  children: React.ReactNode;
};

type DrawerTitleProps = {
  children: React.ReactNode;
};

type DrawerDescriptionProps = {
  children: React.ReactNode;
};

type DrawerFooterProps = {
  children: React.ReactNode;
};

const animations = {
  slideLeft: {
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  },
  slideRight: {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
  },
  slideUp: {
    initial: { opacity: 0, y: 300 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 300 },
  },
  slideDown: {
    initial: { opacity: 0, y: -300 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -300 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -90 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -90 },
  },
  bounce: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: [0, -10, 0] },
    exit: { opacity: 0, y: -50 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
  },
};

// Drawer Components

export function Drawer({ children }: DrawerProps) {
  return <div className="relative z-50">{children}</div>;
}

export function DrawerTrigger({ children, onClick }: DrawerTriggerProps) {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "slideLeft",
  customAnimation,
  position = "right",
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = customAnimation || animations[animationType] || animations.slideRight;

  // Position classes based on the position prop
  const positionClasses = {
    left: "left-0 top-0 bottom-0 w-80",       // Position from the left (full height, fixed width)
    right: "right-0 top-0 bottom-0 w-80",     // Position from the right (full height, fixed width)
    top: "top-0 left-0 right-0 h-80",         // Position from the top (full width, fixed height)
    bottom: "bottom-0 left-0 right-0 h-auto", // Position from the bottom (full width, auto height)
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.3 }}
        className={`bg-white absolute rounded-lg shadow-lg ${positionClasses[position]} p-6`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &#x2715;
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export function DrawerHeader({ children }: DrawerHeaderProps) {
  return <div className="mb-4">{children}</div>;
}

export function DrawerTitle({ children }: DrawerTitleProps) {
  return <h2 className="text-xl font-semibold text-gray-900">{children}</h2>;
}

export function DrawerDescription({ children }: DrawerDescriptionProps) {
  return <p className="text-gray-600 mt-2">{children}</p>;
}

export function DrawerFooter({ children }: DrawerFooterProps) {
  return <div className="mt-6 flex justify-end space-x-4">{children}</div>;
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
          position="bottom" // Change to 'top', 'left', 'right', or 'bottom'
        >
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a description of the drawer content.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
            <button
              onClick={() => alert("Action performed!")}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
