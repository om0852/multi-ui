 "use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  boot: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
    transition: { duration: 0.3 }
  },
  glitch: {
    initial: { x: -20, opacity: 0, skewX: "10deg" },
    animate: { x: 0, opacity: 1, skewX: "0deg" },
    exit: { x: 20, opacity: 0, skewX: "-10deg" },
    transition: { type: "spring", damping: 12 }
  },
  scan: {
    initial: { scaleY: 0, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    exit: { scaleY: 0, opacity: 0 },
    transition: { duration: 0.4 }
  },
  pixel: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.2 }
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
            className="fixed inset-0 bg-black/90"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-lg"
            >
              {/* CRT screen effect */}
              <div className="absolute inset-0 bg-[#001100] rounded-lg opacity-50" />
              
              {/* Main content */}
              <div className="relative bg-black rounded-lg p-8 
                shadow-[0_0_15px_rgba(51,255,51,0.3)] overflow-hidden
                border border-[#00ff00]"
              >
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)]
                  bg-[length:100%_4px] pointer-events-none animate-scan"
                />

                {/* Screen flicker */}
                <motion.div
                  animate={{
                    opacity: [0.98, 1, 0.98],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-[#00ff00]/5 mix-blend-screen"
                />

                {/* Terminal decorations */}
                <div className="absolute top-0 left-4 w-24 h-1 bg-[#00ff00]/30" />
                <div className="absolute top-0 right-4 w-24 h-1 bg-[#00ff00]/30" />
                <div className="absolute bottom-0 left-4 w-24 h-1 bg-[#00ff00]/30" />
                <div className="absolute bottom-0 right-4 w-24 h-1 bg-[#00ff00]/30" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    bg-black text-[#00ff00] rounded border border-[#00ff00]/50
                    hover:bg-[#00ff00]/10 transition-colors font-mono"
                >
                  ×
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
      className="px-8 py-3 bg-black text-[#00ff00] font-mono rounded
        shadow-lg shadow-[#00ff00]/20 hover:shadow-[#00ff00]/30 
        transition-all duration-300 border border-[#00ff00]
        relative overflow-hidden group"
      onClick={onClick}
    >
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[#00ff00]/10"
      />
      <span className="relative">{children}</span>
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
      <h2 className="text-2xl font-bold text-[#00ff00] font-mono
        tracking-wider flex items-center gap-2"
      >
        <span className="text-sm"></span>
        {children}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-3 h-5 bg-[#00ff00]"
        />
      </h2>
    </motion.div>
  );
}

export function StyledDialogDescription({ children }: DialogDescriptionProps) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-[#00ff00] leading-relaxed font-mono text-sm"
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
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("boot");

  return (
    <div className="p-8 bg-black min-h-screen flex flex-col items-center 
      justify-center space-y-8"
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-black text-[#00ff00] font-mono text-sm
              rounded hover:bg-[#00ff00]/10 transition-colors
              border border-[#00ff00]/50"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          INITIALIZE SYSTEM
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            SYSTEM.EXE
            </StyledDialogHeader>
            <StyledDialogDescription>
                <p>
                    C:\\ LOADING SYSTEM PARAMETERS...
                    <br />
                    C:\\ MEMORY CHECK: OK
                    <br />
                    C:\\ DISK SPACE: 640K CONVENTIONAL MEMORY
                    <br />
                    C:\\ AWAITING COMMAND INPUT_
                </p>
            </StyledDialogDescription>
          <StyledDialogFooter>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 bg-black text-[#00ff00] font-mono text-sm
                rounded hover:bg-[#00ff00]/10 transition-colors
                border border-[#00ff00]/50"
            >
              ABORT
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDialogOpen(false);
                alert("System initialized successfully!");
              }}
              className="px-6 py-2 bg-[#00ff00] text-black font-mono text-sm
                rounded hover:bg-[#00ff00]/90 transition-colors"
            >
              EXECUTE
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}