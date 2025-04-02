"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const neonAnimations = {
  glow: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, boxShadow: "0 0 20px #0ff, 0 0 40px #0ff" },
    exit: { opacity: 0, scale: 0.8, boxShadow: "0 0 0 #0ff" },
  },
};

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

export function NeonDialog({ children }: DialogProps) {
  return <div className="relative z-50">{children}</div>;
}

export function NeonDialogTrigger({ children, onClick }: DialogTriggerProps) {
  return (
    <button
      className="bg-black text-cyan-300 py-2 px-4 rounded-lg hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function NeonDialogContent({
  children,
  isOpen,
  onClose,
}: DialogContentProps) {
  if (!isOpen) return null;

  const animation = neonAnimations.glow;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.4 }}
        className="bg-black text-cyan-300 rounded-lg shadow-lg w-full max-w-lg p-6 relative border border-cyan-300"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-500 focus:outline-none"
        >
          &#x2715;
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export function NeonDialogHeader({ children }: DialogHeaderProps) {
  return <div className="mb-4 text-cyan-400">{children}</div>;
}

export function NeonDialogTitle({ children }: DialogTitleProps) {
  return <h2 className="text-2xl font-bold text-cyan-300">{children}</h2>;
}

export function NeonDialogDescription({ children }: DialogDescriptionProps) {
  return <p className="text-cyan-500 mt-2">{children}</p>;
}

export function NeonDialogFooter({ children }: DialogFooterProps) {
  return <div className="mt-6 flex justify-end space-x-4">{children}</div>;
}

// Example Usage
export function NeonExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4 bg-black min-h-screen flex items-center justify-center">
      <NeonDialog>
        <NeonDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Neon Dialog
        </NeonDialogTrigger>
        <NeonDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        >
          <NeonDialogHeader>
            <NeonDialogTitle>Neon Action Required</NeonDialogTitle>
            <NeonDialogDescription>
              Confirm your neon-powered action. This will light up your day!
            </NeonDialogDescription>
          </NeonDialogHeader>
          <NeonDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="bg-gray-800 text-cyan-300 py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Neon action confirmed!");
              }}
              className="bg-cyan-300 text-black py-2 px-4 rounded-lg hover:bg-cyan-400"
            >
              Confirm
            </button>
          </NeonDialogFooter>
        </NeonDialogContent>
      </NeonDialog>
    </div>
  );
}
