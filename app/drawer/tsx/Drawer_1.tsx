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

type AnimationType = keyof typeof animations;

type DrawerContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: AnimationType;
  customAnimation?: {
    initial: Record<string, unknown>;
    animate: Record<string, unknown>;
    exit: Record<string, unknown>;
  };
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
};

type DrawerHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

type DrawerTitleProps = {
  children: React.ReactNode;
  className?: string;
};

type DrawerDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

type DrawerFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const animations = {
  slideLeft: {
    initial: { opacity: 0, x: -300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      x: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: -300,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideRight: {
    initial: { opacity: 0, x: 300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      x: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: 300,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideUp: {
    initial: { opacity: 0, y: 300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      y: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 300,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideDown: {
    initial: { opacity: 0, y: -300, backdropFilter: "blur(0px)" },
    animate: { 
      opacity: 1, 
      y: 0,
      backdropFilter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -300,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3
      }
    },
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

export function Drawer({ children, className }: DrawerProps) {
  return <div className={clsx("relative z-50", className)}>{children}</div>;
}

export function DrawerTrigger({ children, onClick, className }: DrawerTriggerProps) {
  return (
    <button
      className={clsx(
        "relative inline-flex items-center px-6 py-3 overflow-hidden text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg transform transition-all duration-200 hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      <span className="relative">{children}</span>
    </button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "slideLeft",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType] || animations.slideRight;

  const positionClasses = {
    left: "left-0 top-0 bottom-0 w-96",
    right: "right-0 top-0 bottom-0 w-96",
    top: "top-0 left-0 right-0 h-96",
    bottom: "bottom-0 left-0 right-0 h-auto",
  };

  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          `fixed ${positionClasses[position]} bg-white/80 backdrop-blur-lg shadow-2xl p-6 border border-white/20`,
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-colors duration-200 focus:outline-none"
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
        </button>
        <div className="h-full overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export function DrawerHeader({ children, className }: DrawerHeaderProps) {
  return <div className={clsx("mb-6 border-b border-gray-200/50 pb-4", className)}>{children}</div>;
}

export function DrawerTitle({ children, className }: DrawerTitleProps) {
  return (
    <h2 className={clsx("text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500", className)}>
      {children}
    </h2>
  );
}

export function DrawerDescription({ children, className }: DrawerDescriptionProps) {
  return <p className={clsx("text-gray-600 mt-2 leading-relaxed", className)}>{children}</p>;
}

export function DrawerFooter({ children, className }: DrawerFooterProps) {
  return (
    <div className={clsx("mt-6 flex justify-end space-x-4 border-t border-gray-200/50 pt-4", className)}>
      {children}
    </div>
  );
}

// Example Usage
export function Example() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4">
      <Drawer className="custom-drawer">
        <DrawerTrigger 
          className="custom-trigger" 
          onClick={() => setIsDrawerOpen(true)}
        >
          Open Modern Drawer
        </DrawerTrigger>
        <DrawerContent
          className="custom-content"
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="slideRight"
          position="top"
        >
          <DrawerHeader>
            <DrawerTitle>Welcome to Modern Drawer</DrawerTitle>
            <DrawerDescription>
              Experience our beautifully designed drawer with smooth animations and glass morphism effects.
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <h3 className="font-medium text-gray-800">Feature 1</h3>
              <p className="text-gray-600 text-sm">Smooth animations and transitions</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <h3 className="font-medium text-gray-800">Feature 2</h3>
              <p className="text-gray-600 text-sm">Glass morphism design</p>
            </div>
          </div>
          <DrawerFooter>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => alert("Action performed!")}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-colors duration-200"
            >
              Confirm
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
