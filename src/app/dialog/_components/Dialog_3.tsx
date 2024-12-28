"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
  dropIn: {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100vh", opacity: 0 },
  },
  zoomBounce: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: [1, 1.1, 1], opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  slideDiagonal: {
    initial: { x: "100vw", y: "-100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "100vw", y: "-100vh", opacity: 0 },
  },
};

export function Dialog({ children }: DialogProps) {
  return <div className="relative z-50">{children}</div>;
}

export function DialogTrigger({ children, onClick }: DialogTriggerProps) {
  return (
    <button
      className="bg-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
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
  animationType = "dropIn",
}: DialogContentProps) {
  if (!isOpen) return null;

  const animation = animations[animationType] || animations.dropIn;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return <div className="mb-4 text-center">{children}</div>;
}

export function DialogTitle({ children }: DialogTitleProps) {
  return <h2 className="text-2xl font-bold text-gray-900">{children}</h2>;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
  return <p className="text-gray-600 mt-2 text-center">{children}</p>;
}

export function DialogFooter({ children }: DialogFooterProps) {
  return <div className="mt-6 flex justify-center space-x-4">{children}</div>;
}

// Example Usage
export function Example() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-8">
      <Dialog>
        <DialogTrigger onClick={() => setIsDialogOpen(true)}>
          Launch Modal
        </DialogTrigger>
        <DialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType="zoomBounce"
        >
          <DialogHeader>
            <DialogTitle>Attention Required</DialogTitle>
            <DialogDescription>
              Do you wish to proceed with this action? Please confirm below.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
