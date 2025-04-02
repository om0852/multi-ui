"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  bubble: {
    initial: { scale: 0.3, y: 100, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 1.2, y: -50, opacity: 0 },
    transition: { type: "spring", damping: 8 }
  },
  reaction: {
    initial: { scale: 1.5, rotate: -10, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.5, rotate: 10, opacity: 0 },
    transition: { type: "spring", damping: 12 }
  },
  dissolve: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
    transition: { duration: 0.4 }
  },
  catalyst: {
    initial: { x: -100, y: 50, rotate: -30, opacity: 0 },
    animate: { x: 0, y: 0, rotate: 0, opacity: 1 },
    exit: { x: 100, y: -50, rotate: 30, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  }
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

type DialogDescriptionProps = {
  children: React.ReactNode;
};

type DialogFooterProps = {
  children: React.ReactNode;
};

export function StyledDialog({ children }: DialogProps) {
  return <div className="relative z-50">{children}</div>;
}

export function StyledDialogContent({
  children,
  isOpen,
  onClose,
  animationType,
}: DialogContentProps) {
  const animation = animationStyles[animationType];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-900/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center">
            <motion.div
              {...animation}
              className="relative bg-white rounded-lg w-full max-w-lg overflow-hidden"
            >
              {/* Lab glassware effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white/90" />
              
              {/* Bubbling effect */}
              <div className="absolute inset-x-0 bottom-0 h-32 overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-1/4 w-4 h-4 bg-emerald-200 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-0 left-2/4 w-3 h-3 bg-emerald-300 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-0 left-3/4 w-5 h-5 bg-emerald-100 rounded-full"
                />
              </div>

              {/* Content container */}
              <div className="relative p-8">
                <div className="absolute top-0 left-0 w-16 h-1 bg-emerald-500 rounded-full" />
                <div className="absolute top-0 right-0 w-8 h-1 bg-emerald-500 rounded-full" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    bg-emerald-100 hover:bg-emerald-200 rounded-full text-emerald-700
                    transition-colors"
                >
                  ✕
                </motion.button>
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function StyledDialogTrigger({ children, onClick }: DialogTriggerProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-green-500
        text-white font-medium rounded-lg shadow-lg 
        hover:shadow-emerald-500/30 transition-all duration-300
        border border-emerald-600/20"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function StyledDialogHeader({ children }: DialogHeaderProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-6"
    >
      <h2 className="text-3xl font-bold text-emerald-700 flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
        {children}
      </h2>
    </motion.div>
  );
}

export function StyledDialogDescription({ children }: DialogDescriptionProps) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-emerald-900 leading-relaxed"
    >
      {children}
    </motion.p>
  );
}

export function StyledDialogFooter({ children }: DialogFooterProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-8 flex justify-end space-x-4"
    >
      {children}
    </motion.div>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("bubble");

  return (
    <div className="p-8 bg-gradient-to-br from-emerald-100 to-green-50
      min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white/80 backdrop-blur-sm text-emerald-700
              font-medium rounded-lg hover:bg-white/90 transition-colors
              border border-emerald-200"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          View Experiment
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Chemical Analysis
          </StyledDialogHeader>
          <StyledDialogDescription>
            The reaction between compounds A and B has reached equilibrium.
            Temperature: 25°C, Pressure: 1 atm, pH: 7.4
          </StyledDialogDescription>
          <StyledDialogFooter>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 bg-gray-100 text-gray-700
                font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDialogOpen(false);
                alert("Experiment data saved!");
              }}
              className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-green-500
                text-white font-medium rounded-lg"
            >
              Save Data
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 