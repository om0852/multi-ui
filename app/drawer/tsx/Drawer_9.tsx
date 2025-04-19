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
  hologram: {
    initial: { 
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px) brightness(2)",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      }
    },
    exit: { 
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px) brightness(2)",
      transition: {
        duration: 0.4
      }
    },
  },
  scan: {
    initial: { 
      opacity: 0,
      y: "100%",
      clipPath: "inset(100% 0 0 0)",
    },
    animate: { 
      opacity: 1,
      y: "0%",
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
      }
    },
    exit: { 
      opacity: 0,
      y: "100%",
      clipPath: "inset(100% 0 0 0)",
      transition: {
        duration: 0.4
      }
    },
  },
  glitch: {
    initial: { 
      opacity: 0,
      x: 50,
      skewX: 10,
      filter: "hue-rotate(90deg)",
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: [10, -5, 3, 0],
      filter: "hue-rotate(0deg)",
      transition: {
        duration: 0.5,
        times: [0, 0.6, 0.8, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: 50,
      skewX: 10,
      filter: "hue-rotate(90deg)",
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
      whileHover={{ scale: 1.05, filter: "hue-rotate(30deg)" }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative py-3 px-6 rounded-lg",
        "bg-black",
        "text-cyan-400 font-mono",
        "border border-cyan-500/50",
        "shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        "overflow-hidden",
        "transform transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.3),transparent_60%)]" />
      <span className="relative flex items-center gap-2">
        {children}
        <span className="text-lg">⚡</span>
      </span>
    </motion.button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "hologram",
  position = "right",
  className,
}: DrawerContentProps) {
  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed p-6",
    "bg-black/90 backdrop-blur-xl",
    "border border-cyan-500/30",
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
            className="absolute inset-0 bg-cyan-900/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            className={clsx(
              positionClasses,
              "shadow-[0_0_50px_rgba(34,211,238,0.2)]",
              "transform-gpu",
              className
            )}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1),transparent_50%)]" />
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className={clsx(
                  "p-2 rounded-lg",
                  "bg-black/50 text-cyan-400",
                  "border border-cyan-500/30",
                  "shadow-[0_0_10px_rgba(34,211,238,0.2)]",
                  "hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
                  "transform transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
            <div className="relative h-full overflow-y-auto custom-scrollbar text-cyan-400 font-mono">
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
          Initialize Hologram
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="hologram"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">Holographic Interface</h2>
              <p className="mt-2 text-cyan-400/80">Experience next-generation UI with advanced holographic projections.</p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-cyan-950/50 rounded-lg border border-cyan-500/20">
                <h3 className="font-medium text-cyan-300">Quantum Animations</h3>
                <p className="text-sm text-cyan-400/70 mt-1">State-of-the-art transition effects</p>
              </div>
              <div className="p-4 bg-cyan-950/50 rounded-lg border border-cyan-500/20">
                <h3 className="font-medium text-cyan-300">Neural Interface</h3>
                <p className="text-sm text-cyan-400/70 mt-1">Responsive holographic controls</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 