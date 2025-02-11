"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  scroll: {
    initial: { scale: 0, opacity: 0, y: 100 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0, opacity: 0, y: -100 },
    transition: { type: "spring", damping: 12 }
  },
  magic: {
    initial: { scale: 1.5, opacity: 0, rotate: 720 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: -720 },
    transition: { duration: 0.6 }
  },
  flame: {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 2, opacity: 0 },
    transition: { type: "spring", damping: 15 }
  },
  enchant: {
    initial: { x: -300, opacity: 0, skewX: "30deg" },
    animate: { x: 0, opacity: 1, skewX: "0deg" },
    exit: { x: 300, opacity: 0, skewX: "-30deg" },
    transition: { type: "spring", damping: 20 }
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-lg"
            >
              {/* Scroll background */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10" />
              
              {/* Main content */}
              <div className="bg-[#f4e4bc] rounded-lg p-8 shadow-2xl
                border-8 border-double border-[#8b4513] relative overflow-hidden"
              >
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#8b4513] rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#8b4513] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#8b4513] rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#8b4513] rounded-br-lg" />

                {/* Animated flames */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2
                    w-8 h-8 bg-gradient-to-t from-orange-500 to-yellow-300
                    rounded-full blur-lg"
                />

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    bg-[#8b4513] text-[#f4e4bc] rounded-full hover:bg-[#6d3710]
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
      className="px-8 py-3 bg-[#8b4513] text-[#f4e4bc] font-medieval rounded-lg
        shadow-lg shadow-[#8b4513]/30 hover:shadow-[#8b4513]/50 
        transition-all duration-300 border-2 border-[#f4e4bc]
        relative overflow-hidden group"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />
      <span className="relative">{children}</span>
    </motion.button>
  );
}

export function StyledDialogHeader({ children }: DialogHeaderProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-6 text-center"
    >
      <h2 className="text-3xl font-bold text-[#8b4513] font-medieval
        tracking-wide relative inline-block"
      >
        <span className="absolute -left-6 -top-6 text-4xl text-yellow-600 opacity-75">✧</span>
        {children}
        <span className="absolute -right-6 -bottom-6 text-4xl text-yellow-600 opacity-75">✧</span>
      </h2>
    </motion.div>
  );
}

export function StyledDialogDescription({ children }: DialogDescriptionProps) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-[#5c2d0c] leading-relaxed text-center font-serif"
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
      className="mt-8 flex justify-center space-x-4"
    >
      {children}
    </motion.div>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("scroll");

  return (
    <div className="p-8 
      min-h-screen flex flex-col items-center justify-center space-y-8
      bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9zdmc+')]"
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#8b4513]/80 text-[#f4e4bc]
              font-medieval rounded-lg hover:bg-[#8b4513] transition-colors
              border border-[#f4e4bc]/30"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Ancient Scroll
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Ancient Prophecy
          </StyledDialogHeader>
          <StyledDialogDescription>
            In the realm of shadows and light, a prophecy unfolds.
            The chosen one shall wield the power of the ancient scrolls.
          </StyledDialogDescription>
          <StyledDialogFooter>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 bg-[#5c2d0c] text-[#f4e4bc]
                font-medieval rounded-lg hover:bg-[#4a2409] transition-colors
                border border-[#f4e4bc]/30"
            >
              Close Scroll
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDialogOpen(false);
                alert("The prophecy has been sealed in your memory!");
              }}
              className="px-6 py-2 bg-[#8b4513] text-[#f4e4bc]
                font-medieval rounded-lg hover:bg-[#6d3710] transition-colors
                border border-[#f4e4bc]"
            >
              Accept Destiny
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 