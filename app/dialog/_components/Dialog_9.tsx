"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const animationStyles = {
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  },
  fadeInOut: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scaleIn: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  rotateZoom: {
    initial: { scale: 0.8, rotate: -10, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.8, rotate: 10, opacity: 0 },
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
  animationType: keyof typeof animationStyles;
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

export function StyledDialog({ children }: DialogProps) {
  return <div className="relative z-50">{children}</div>;
}

export function StyledDialogTrigger({ children, onClick }: DialogTriggerProps) {
  return (
    <button
      className="bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 text-white py-2 px-4 rounded-xl shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function StyledDialogContent({
  children,
  isOpen,
  onClose,
  animationType,
}: DialogContentProps) {
  if (!isOpen) return null;

  const animation = animationStyles[animationType];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-xl">
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-600 text-white rounded-lg shadow-xl w-full max-w-lg p-6 relative border border-gray-500"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-200 hover:text-white focus:outline-none"
        >
          &#x2715;
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export function StyledDialogHeader({ children }: DialogHeaderProps) {
  return <div className="mb-4 text-white text-lg font-semibold">{children}</div>;
}

export function StyledDialogTitle({ children }: DialogTitleProps) {
  return <h2 className="text-3xl font-extrabold text-lime-400">{children}</h2>;
}

export function StyledDialogDescription({ children }: DialogDescriptionProps) {
  return <p className="text-gray-300 mt-2">{children}</p>;
}

export function StyledDialogFooter({ children }: DialogFooterProps) {
  return <div className="mt-6 flex justify-end space-x-4">{children}</div>;
}

// Example Usage
export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("slideUp");

  return (
    <div className="p-4 bg-gradient-to-bl from-gray-700 to-black min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400"
          onClick={() => setAnimationType("slideUp")}
        >
          Slide Up
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400"
          onClick={() => setAnimationType("fadeInOut")}
        >
          Fade In/Out
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400"
          onClick={() => setAnimationType("scaleIn")}
        >
          Scale In
        </button>
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-400"
          onClick={() => setAnimationType("rotateZoom")}
        >
          Rotate Zoom
        </button>
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Gradient Dialog
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            <StyledDialogTitle>Sleek Gradient Design</StyledDialogTitle>
            <StyledDialogDescription>
              This dialog features a sleek gradient design with smooth animations. Experiment with the styles and enjoy the minimalist aesthetic!
            </StyledDialogDescription>
          </StyledDialogHeader>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="bg-gray-400 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Action confirmed!");
              }}
              className="bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-400"
            >
              Confirm
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}
