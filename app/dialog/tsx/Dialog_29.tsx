"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  playlist: {
    initial: { scale: 0.9, y: 20, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.9, y: -20, opacity: 0 },
    transition: { type: "spring", damping: 25 }
  },
  track: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  wave: {
    initial: { scaleY: 0.5, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    exit: { scaleY: 0.5, opacity: 0 },
    transition: { duration: 0.2 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
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
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-lg"
            >
              {/* Main content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl
                shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Now playing */}
                <div className="relative h-48 bg-gradient-to-br from-violet-500
                  to-purple-500 p-6 flex flex-col justify-end"
                >
                  {/* Animated waves */}
                  <div className="absolute inset-0 flex items-center justify-center
                    gap-1 opacity-20"
                  >
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scaleY: [0.2, 1, 0.2],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className="w-1 h-32 bg-white rounded-full transform
                          origin-bottom"
                      />
                    ))}
                  </div>

                  {/* Track info */}
                  <div className="relative">
                    <h3 className="text-white text-lg font-medium mb-1">
                      {currentTrack !== null ? `Track ${currentTrack + 1}` : "Select a track"}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {currentTrack !== null ? "Artist Name" : "Your Playlist"}
                    </p>
                  </div>
                </div>

                {/* Playlist */}
                <div className="p-6">
                  <div className="space-y-2">
                    {[...Array(5)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-xl cursor-pointer group
                          ${currentTrack === index ?
                            'bg-violet-50 dark:bg-violet-900/30' :
                            'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
                        onClick={() => setCurrentTrack(index)}
                      >
                        <div className="flex items-center gap-4">
                          {/* Track number or play icon */}
                          <div className={`w-8 h-8 rounded-full
                            ${currentTrack === index ?
                              'bg-violet-500' : 'bg-gray-100 dark:bg-gray-700'}
                            flex items-center justify-center`}
                          >
                            {currentTrack === index ? (
                              <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                }}
                                className="text-white"
                              >
                                ▶
                              </motion.span>
                            ) : (
                              <span className={`text-sm font-medium
                                ${currentTrack === index ?
                                  'text-white' : 'text-gray-500 dark:text-gray-400'}`}
                              >
                                {index + 1}
                              </span>
                            )}
                          </div>

                          {/* Track info */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900
                              dark:text-white mb-1"
                            >
                              Track {index + 1}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              3:45
                            </p>
                          </div>

                          {/* Track controls */}
                          <div className="ml-auto flex items-center gap-2
                            opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 rounded-full bg-violet-100
                                dark:bg-violet-900/30 flex items-center justify-center
                                text-violet-500"
                            >
                              ♡
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 rounded-full bg-violet-100
                                dark:bg-violet-900/30 flex items-center justify-center
                                text-violet-500"
                            >
                              ⋯
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    text-white/70 hover:text-white transition-colors"
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
      className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-500
        text-white font-medium rounded-xl shadow-lg 
        shadow-violet-500/20 hover:shadow-violet-500/30 
        transition-all duration-300"
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
      className="mb-4"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white
        flex items-center gap-2"
      >
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
      className="text-gray-600 dark:text-gray-300"
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
      className="mt-6 flex justify-end space-x-4"
    >
      {children}
    </motion.div>
  );
}

export function DialogExample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("playlist");

  return (
    <div className="p-8 bg-gradient-to-br from-violet-50 to-purple-50
      dark:from-gray-900 dark:to-gray-800
      min-h-screen flex flex-col items-center justify-center space-y-8"
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(animationStyles).map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white dark:bg-gray-800 
              text-gray-600 dark:text-gray-300 font-medium rounded-xl
              shadow-sm hover:shadow-md transition-all duration-200
              border border-gray-200 dark:border-gray-700"
            onClick={() => setAnimationType(type as keyof typeof animationStyles)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <StyledDialog>
        <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
          Open Playlist
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            My Playlist
          </StyledDialogHeader>
          <StyledDialogDescription>
            Your favorite tracks
          </StyledDialogDescription>
          <StyledDialogFooter>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 text-gray-600 dark:text-gray-300
                font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700
                transition-colors"
            >
              Close
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDialogOpen(false);
                alert("Playlist saved!");
              }}
              className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-500
                text-white font-medium rounded-xl"
            >
              Save Playlist
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 