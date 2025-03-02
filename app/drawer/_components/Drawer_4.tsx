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
  glitch: {
    initial: { 
      opacity: 0,
      x: "100%",
      skew: 20,
    },
    animate: { 
      opacity: 1,
      x: 0,
      skew: [20, -10, 5, 0],
      transition: {
        duration: 0.4,
        times: [0, 0.2, 0.4, 1],
      }
    },
    exit: { 
      opacity: 0,
      x: "100%",
      skew: [-20, 10, -5, 20],
      transition: {
        duration: 0.3
      }
    },
  },
  matrix: {
    initial: { 
      opacity: 0,
      y: "100%",
      scale: 0.9,
      rotateX: 45,
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: "100%",
      scale: 0.9,
      rotateX: 45,
      transition: {
        duration: 0.3
      }
    },
  },
  cyber: {
    initial: { 
      opacity: 0,
      x: "-100%",
      rotate: -10,
      scale: 0.8,
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0,
      x: "-100%",
      rotate: 10,
      scale: 0.8,
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
        "bg-black text-cyan-400 font-mono",
        "border-2 border-cyan-400",
        "shadow-[0_0_10px_rgba(0,255,255,0.3)]",
        "hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]",
        "transform transition-all duration-200",
        "hover:scale-105",
        "before:absolute before:inset-0",
        "before:border-2 before:border-cyan-400/50",
        "before:translate-x-1 before:translate-y-1",
        "hover:before:translate-x-2 hover:before:translate-y-2",
        "before:transition-transform before:duration-200",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black",
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
  animationType = "glitch",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed bg-black/95 p-6",
    "border-2 border-cyan-400",
    "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
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
        className="absolute inset-0 bg-black/70 backdrop-blur"
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
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 opacity-30 blur" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={onClose}
            className={clsx(
              "p-2",
              "bg-black/50 text-cyan-400",
              "border border-cyan-400/50",
              "hover:bg-cyan-400/10",
              "transform transition-all duration-200",
              "hover:scale-110 hover:rotate-90",
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
          </button>
        </div>
        <div className="relative h-full overflow-y-auto custom-scrollbar text-cyan-400 font-mono">
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
          LAUNCH_CYBERPUNK.EXE
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="glitch"
          position="right"
        >
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                SYSTEM://CYBERPUNK-UI
              </h2>
              <p className="mt-2 text-cyan-400/80">
                &gt; Initializing futuristic interface module...
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-cyan-400">&gt; NEURAL_LINK_STATUS</h3>
                <p className="text-sm text-cyan-400/70">Connection established: 100%</p>
              </div>
              
              <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-cyan-400">&gt; SYSTEM_DIAGNOSTICS</h3>
                <p className="text-sm text-cyan-400/70">All systems operational</p>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-cyan-400/30">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-4 py-2 bg-black/50 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
              >
                TERMINATE
              </button>
              <button
                onClick={() => alert("SYSTEM ACTIVATED")}
                className="px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-colors"
              >
                ACTIVATE
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 