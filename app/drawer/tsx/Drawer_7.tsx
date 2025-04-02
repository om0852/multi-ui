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
  typewriter: {
    initial: { 
      opacity: 0,
      x: "-100%",
      skewX: -20,
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
      }
    },
    exit: { 
      opacity: 0,
      x: "-100%",
      skewX: -20,
      transition: {
        duration: 0.3
      }
    },
  },
  oldTV: {
    initial: { 
      opacity: 0,
      scale: 0.8,
      filter: "brightness(0)",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      filter: "brightness(0)",
      transition: {
        duration: 0.3
      }
    },
  },
  slideShow: {
    initial: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
    animate: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
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
        "bg-amber-100",
        "text-amber-900 font-serif",
        "border-4 border-amber-900",
        "shadow-[4px_4px_0_0_rgba(120,53,15,1)]",
        "hover:shadow-[2px_2px_0_0_rgba(120,53,15,1)]",
        "hover:translate-x-[2px] hover:translate-y-[2px]",
        "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
        "transition-all duration-200",
        "focus:outline-none",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      <span className="relative uppercase tracking-widest">{children}</span>
    </button>
  );
}

export function DrawerContent({
  children,
  isOpen,
  onClose,
  animationType = "typewriter",
  position = "right",
  className,
}: DrawerContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType];

  const positionClasses = clsx(
    "fixed p-8",
    "bg-amber-100",
    "border-4 border-amber-900",
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
        className="absolute inset-0 bg-amber-900/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        className={clsx(
          positionClasses,
          "shadow-[8px_8px_0_0_rgba(120,53,15,1)]",
          "transform-gpu",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className={clsx(
              "p-2",
              "bg-amber-200 text-amber-900",
              "border-2 border-amber-900",
              "shadow-[2px_2px_0_0_rgba(120,53,15,1)]",
              "hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
              "transition-all duration-200",
              "focus:outline-none"
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
        <div className="relative h-full overflow-y-auto custom-scrollbar font-serif">
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
          Open Vintage Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="typewriter"
          position="right"
        >
          <div className="space-y-8 pt-8">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 uppercase tracking-wider">
                Vintage Design
              </h2>
              <p className="mt-2 text-amber-800 font-medium">
                Step back in time with our retro-inspired interface.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="p-4 bg-amber-50 border-2 border-amber-900">
                <h3 className="font-bold text-amber-900 uppercase tracking-wide">Classic Style</h3>
                <p className="text-sm text-amber-800">Timeless and nostalgic design elements</p>
              </div>
              
              <div className="p-4 bg-amber-50 border-2 border-amber-900">
                <h3 className="font-bold text-amber-900 uppercase tracking-wide">Retro Feel</h3>
                <p className="text-sm text-amber-800">Old-school animations and transitions</p>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t-2 border-amber-900/30">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className={clsx(
                  "px-4 py-2",
                  "bg-amber-200 text-amber-900",
                  "border-2 border-amber-900",
                  "shadow-[2px_2px_0_0_rgba(120,53,15,1)]",
                  "hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
                  "uppercase tracking-wider text-sm font-medium",
                  "transition-all duration-200"
                )}
              >
                Close
              </button>
              <button
                onClick={() => alert("Confirmed in vintage style! 📜")}
                className={clsx(
                  "px-4 py-2",
                  "bg-amber-900 text-amber-100",
                  "border-2 border-amber-900",
                  "shadow-[2px_2px_0_0_rgba(120,53,15,1)]",
                  "hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
                  "uppercase tracking-wider text-sm font-medium",
                  "transition-all duration-200"
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