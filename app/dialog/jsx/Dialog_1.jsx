"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const animations = {
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 } },
  slideUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 } },
  slideDown: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
  slideLeft: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 } },
  slideRight: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 } },
  zoomIn: { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 } },
  zoomOut: { initial: { opacity: 0, scale: 1.2 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.2 } },
  rotate: { initial: { opacity: 0, rotate: -15 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: -15 } },
  flip: { initial: { opacity: 0, rotateY: 90 }, animate: { opacity: 1, rotateY: 0 }, exit: { opacity: 0, rotateY: 90 } },
};

export function Dialog({ children }) {
  return <div className="relative z-50">{children}</div>;
}

export function DialogTrigger({ children, onClick }) {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function DialogContent({ children, isOpen, onClose, animationType = "fade" }) {
  if (!isOpen) return null;
  const animation = animations[animationType] || animations.fade;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div initial={animation.initial} animate={animation.animate} exit={animation.exit} transition={{ duration: 0.3 }} className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">&#x2715;</button>
        {children}
      </motion.div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-semibold text-gray-900">{children}</h2>;
}

export function DialogDescription({ children }) {
  return <p className="text-gray-600 mt-2">{children}</p>;
}

export function DialogFooter({ children }) {
  return <div className="mt-6 flex justify-end space-x-4">{children}</div>;
}

export function Example() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger onClick={() => setIsDialogOpen(true)}>Open Dialog</DialogTrigger>
        <DialogContent isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} animationType="flip">
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>Are you sure you want to perform this action? This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button onClick={() => setIsDialogOpen(false)} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
            <button onClick={() => { setIsDialogOpen(false); alert("Action confirmed!"); }} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
