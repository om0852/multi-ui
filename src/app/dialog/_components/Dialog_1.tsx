"use client";
import React, { useState } from "react";
import { motion, TargetAndTransition } from "framer-motion";

type DialogProps = {
  children: React.ReactNode;
};

type DialogTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
};

type DialogContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  animationType?: AnimationType;
  customAnimation?: TargetAndTransition;
};

type DialogHeaderProps = {
  children: React.ReactNode;
};

type DialogTitleProps = {
  children: React.ReactNode;
};

type DialogDescriptionProps = {
  children: React.ReactNode;
};

type DialogFooterProps = {
  children: React.ReactNode;
};

type AnimationType = keyof typeof animations;

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  slideRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -15 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -15 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
  },
  bounce: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: [0, -15, 0] },
    exit: { opacity: 0, y: -100 },
  },
  swing: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: [10, -10, 5, -5, 0] },
    exit: { opacity: 0, rotate: -10 },
  },
  wobble: {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: [10, -10, 5, -5, 0] },
    exit: { opacity: 0, x: -10 },
  },
  pulse: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: [1, 1.1, 1] },
    exit: { opacity: 0, scale: 0.8 },
  },
  flash: {
    initial: { opacity: 0 },
    animate: { opacity: [1, 0, 1] },
    exit: { opacity: 0 },
  },
};

export function Dialog({ children }: DialogProps) {
  return <div className="relative z-50">{children}</div>;
}

export function DialogTrigger({ children, onClick }: DialogTriggerProps) {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
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
  animationType = "fade",
}: DialogContentProps) {
  if (!isOpen) return null;

  const defaultAnimation = animations[animationType] || animations.fade;
  const animation = {
    initial:  defaultAnimation.initial,
    animate: defaultAnimation.animate,
    exit: defaultAnimation.exit,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
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

export function DialogHeader({ children }: DialogHeaderProps) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: DialogTitleProps) {
  return <h2 className="text-xl font-semibold text-gray-900">{children}</h2>;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
  return <p className="text-gray-600 mt-2">{children}</p>;
}

export function DialogFooter({ children }: DialogFooterProps) {
  return <div className="mt-6 flex justify-end space-x-4">{children}</div>;
}

// Example Usage
export function Example() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Dialog
        </DialogTrigger>
        <DialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType="flip"
          
        >
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to perform this action? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}