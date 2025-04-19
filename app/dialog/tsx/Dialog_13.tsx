"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  rain: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  thunder: {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  wind: {
    initial: { x: -300, rotate: -10, opacity: 0 },
    animate: { x: 0, rotate: 0, opacity: 1 },
    exit: { x: 300, rotate: 10, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  sun: {
    initial: { scale: 0, rotate: 180, opacity: 0 },
    animate: { scale: 1, rotate: 360, opacity: 1 },
    exit: { scale: 0, rotate: 540, opacity: 0 },
    transition: { duration: 0.5 }
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
            className="fixed inset-0 bg-sky-900/50 backdrop-blur-md z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              {...animation}
              className={`relative bg-gradient-to-br from-sky-100 to-white 
                rounded-3xl shadow-2xl p-4 sm:p-8 w-full max-w-[90%] sm:max-w-md md:max-w-lg 
                overflow-hidden overflow-y-auto max-h-[90vh] ${className || ""}`}
            >
              {/* Weather effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,180,255,0.2),transparent_70%)]" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 flex items-center justify-center
                  bg-sky-500/10 hover:bg-sky-500/20 rounded-full text-sky-700
                  transition-colors z-10"
              >
                ✕
              </motion.button>
              {children}
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
      className={`px-8 py-3 bg-gradient-to-r from-sky-400 to-blue-500
        text-white font-medium rounded-full shadow-lg 
        hover:shadow-sky-400/50 transition-shadow duration-300 ${className || ""}`}
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
      <h2 className="text-xl sm:text-3xl font-bold text-sky-900">
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
      className={`text-sm sm:text-base text-sky-700 leading-relaxed ${className || ""}`}
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
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("sun");

  return (
    <div className="p-8 bg-gradient-to-br from-sky-400 to-blue-600 
      min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white 
              font-medium rounded-full hover:bg-white/30 transition-colors"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Check Weather
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Weather Forecast
          </StyledDialogHeader>
          <StyledDialogDescription>
            Today&apos;s forecast shows perfect conditions with a gentle breeze and clear skies.
            The temperature will range from 68°F to 75°F throughout the day.
          </StyledDialogDescription>
          <StyledDialogFooter>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto px-6 py-2 bg-gray-100 text-sky-700 
                font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                setIsDialogOpen(false);
                alert("Weather details saved!");
              }}
              className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-500
                text-white font-medium rounded-full hover:from-sky-500 hover:to-blue-600
                transition-colors"
            >
              Save
            </button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 