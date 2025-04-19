"use client";
import React, { useState } from "react";
import { motion, TargetAndTransition } from "framer-motion";

type DialogProps = {
  children: React.ReactNode;
  className?: string;
};

type DialogTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

type DialogContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: AnimationType;
  customAnimation?: TargetAndTransition;
  className?: string;
};

type DialogHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

type DialogTitleProps = {
  children: React.ReactNode;
  className?: string;
};

type DialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

type DialogFooterProps = {
  children: React.ReactNode;
  className?: string;
};

type AnimationType = keyof typeof animations;

const animations = {
  pulseGlow: {
    initial: { opacity: 0, scale: 0.8, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0)" },
    animate: { opacity: 1, scale: 1, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)" },
    exit: { opacity: 0, scale: 0.8, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0)" },
  },
  slideNeon: {
    initial: { opacity: 0, x: -100, color: "rgba(0, 255, 255, 0)" },
    animate: { opacity: 1, x: 0, color: "rgba(0, 255, 255, 1)" },
    exit: { opacity: 0, x: -100, color: "rgba(0, 255, 255, 0)" },
  },
  glowExpand: {
    initial: { opacity: 0, scale: 0.5, filter: "blur(5px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", boxShadow: "0 0 15px #0ff" },
    exit: { opacity: 0, scale: 0.5, filter: "blur(5px)" },
  },
};

export function Dialog({ children, className }: DialogProps) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

export function DialogTrigger({ children, onClick, className }: DialogTriggerProps) {
  return (
    <button
      className={`bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-lg hover:from-teal-400 hover:to-blue-500 focus:outline-none focus:ring focus:ring-cyan-300 shadow-neon transition-colors ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function DialogContent({
  children,
  isOpen,
  onClose,
  animationType = "pulseGlow",
  className,
}: DialogContentProps) {
  if (!isOpen) return null;

  const defaultAnimation = animations[animationType] || animations.pulseGlow;
  const animation = {
    initial: defaultAnimation.initial,
    animate: defaultAnimation.animate,
    exit: defaultAnimation.exit,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 z-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.4 }}
        className={`bg-gray-900 text-cyan-400 rounded-lg shadow-neon w-full max-w-[90%] sm:max-w-md md:max-w-lg p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] border border-cyan-400 ${className || ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-cyan-400 hover:text-cyan-200 focus:outline-none z-10"
        >
          &#x2715;
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={`mb-4 border-b border-cyan-400 pb-2 ${className || ""}`}>{children}</div>;
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return <h2 className={`text-xl sm:text-2xl font-semibold text-cyan-400 ${className || ""}`}>{children}</h2>;
}

export function DialogDescription({ children, className }: DialogDescriptionProps) {
  return <p className={`text-sm sm:text-base text-cyan-200 mt-2 ${className || ""}`}>{children}</p>;
}

export function DialogFooter({ children, className }: DialogFooterProps) {
  return <div className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}>{children}</div>;
}

// Example Usage
export function NeonExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Neon Dialog
        </DialogTrigger>
        <DialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType="glowExpand"
        >
          <DialogHeader>
            <DialogTitle>Neon Dialog</DialogTitle>
            <DialogDescription>
              This dialog comes with a stunning neon design and animations.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto bg-gray-800 text-cyan-400 py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
