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
  animationType: keyof typeof animationStyles;
  className?: string;
};

type DialogHeaderProps = {
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

export function StyledDialog({ children, className }: DialogProps) {
  return <div className={`relative z-50 ${className || ""}`}>{children}</div>;
}

export function StyledDialogContent({
  children,
  isOpen,
  onClose,
  animationType,
  className,
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
            className="fixed inset-0 bg-emerald-900/30 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              {...animation}
              className={`relative bg-white rounded-lg w-full max-w-[90%] sm:max-w-md md:max-w-lg overflow-hidden overflow-y-auto max-h-[90vh] ${className || ""}`}
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
              <div className="relative p-4 sm:p-8">
                <div className="absolute top-0 left-0 w-16 h-1 bg-emerald-500 rounded-full" />
                <div className="absolute top-0 right-0 w-8 h-1 bg-emerald-500 rounded-full" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 sm:top-2 right-2 sm:right-2 w-8 h-8 flex items-center justify-center
                    bg-emerald-100 hover:bg-emerald-200 rounded-full text-emerald-700
                    transition-colors z-10"
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

export function StyledDialogTrigger({ children, onClick, className }: DialogTriggerProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 bg-gradient-to-r from-emerald-400 to-green-500
        text-white font-medium rounded-lg shadow-lg 
        hover:shadow-emerald-500/30 transition-all duration-300
        border border-emerald-600/20 ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function StyledDialogHeader({ children, className }: DialogHeaderProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mb-4 sm:mb-6 ${className || ""}`}
    >
      <h2 className="text-xl sm:text-3xl font-bold text-emerald-700 flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
        {children}
      </h2>
    </motion.div>
  );
}

export function StyledDialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`text-sm sm:text-base text-emerald-900 leading-relaxed ${className || ""}`}
    >
      {children}
    </motion.p>
  );
}

export function StyledDialogFooter({ children, className }: DialogFooterProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mt-4 sm:mt-8 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("bubble");

  return (
    <div className="p-8 bg-emerald-50 min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-emerald-700 font-medium rounded-lg 
              shadow-md hover:shadow-lg hover:bg-emerald-50 transition-all
              border border-emerald-200"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Laboratory
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Chemical Reaction
          </StyledDialogHeader>
          <StyledDialogDescription>
            Our lab has synthesized a new compound with remarkable properties.
            The molecular structure demonstrates unusual stability at high temperatures.
          </StyledDialogDescription>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto px-6 py-2 bg-gray-100 text-emerald-700 
                font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Chemical formula saved!");
              }}
              className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-emerald-400 to-green-500
                text-white font-medium rounded-lg hover:from-emerald-500 hover:to-green-600
                transition-colors"
            >
              Record
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 