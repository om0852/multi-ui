"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  hologram: {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 1.2, opacity: 0, y: -20 },
    transition: { type: "spring", damping: 15 }
  },
  warpSpeed: {
    initial: { scale: 2, opacity: 0, rotate: 45 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: -45 },
    transition: { type: "spring", damping: 20 }
  },
  teleport: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.4 }
  },
  quantum: {
    initial: { x: -300, opacity: 0, skewX: "45deg" },
    animate: { x: 0, opacity: 1, skewX: "0deg" },
    exit: { x: 300, opacity: 0, skewX: "-45deg" },
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center">
            <motion.div
              {...animation}
              className={`relative bg-black/80 border border-cyan-500/30 rounded-lg
                w-full max-w-lg overflow-hidden backdrop-blur-xl ${className || ""}`}
            >
              {/* Holographic effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSg2LCAxODIsIDIxMiwgMC4yKSIvPjwvc3ZnPg==')] opacity-20" />
              
              {/* Scanning line effect */}
              <motion.div
                animate={{
                  y: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              />

              {/* Content container */}
              <div className="relative p-8">
                <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    bg-cyan-950 hover:bg-cyan-900 rounded text-cyan-500
                    transition-colors border border-cyan-500/30"
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
      className={`px-8 py-3 bg-black/80 text-cyan-500 font-medium rounded
        shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 
        transition-all duration-300 border border-cyan-500/30
        backdrop-blur-xl relative overflow-hidden group ${className || ""}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
      <span className="relative">{children}</span>
    </motion.button>
  );
}

export function StyledDialogHeader({ children, className }: DialogHeaderProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`mb-6 ${className || ""}`}
    >
      <h2 className="text-3xl font-bold text-cyan-500 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
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
      className={`text-cyan-100 leading-relaxed ${className || ""}`}
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
      className={`mt-8 flex justify-end space-x-4 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("hologram");

  return (
    <div className="p-8 bg-black min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-black/80 backdrop-blur-sm text-cyan-500
              font-medium rounded hover:bg-black/90 transition-colors
              border border-cyan-500/30"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Access Terminal
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            System Status
          </StyledDialogHeader>
          <StyledDialogDescription>
            All systems operational. Quantum core stability at 98.3%.
            No anomalies detected in the space-time continuum.
          </StyledDialogDescription>
          <StyledDialogFooter>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 bg-black/80 text-cyan-500
                font-medium rounded hover:bg-black/90 transition-colors
                border border-cyan-500/30"
            >
              Exit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDialogOpen(false);
                alert("System scan initiated!");
              }}
              className="px-6 py-2 bg-cyan-500 text-black
                font-medium rounded hover:bg-cyan-400 transition-colors"
            >
              Initiate Scan
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 