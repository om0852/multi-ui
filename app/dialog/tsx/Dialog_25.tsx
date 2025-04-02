"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  folder: {
    initial: { scale: 0.9, y: 20, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.9, y: -20, opacity: 0 },
    transition: { type: "spring", damping: 25 }
  },
  file: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  list: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3 }
  },
  grid: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-2xl"
            >
              {/* File manager background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.05)_25%,transparent_25%,transparent_50%,rgba(59,130,246,0.05)_50%,rgba(59,130,246,0.05)_75%,transparent_75%,transparent)]
                bg-[length:20px_20px] rounded-2xl opacity-30" />
              
              {/* Main content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl
                shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Toolbar */}
                <div className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200
                  dark:border-gray-600 p-4 flex items-center justify-between"
                >
                  {/* Navigation */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center
                        bg-white dark:bg-gray-600 rounded-lg shadow-sm
                        text-gray-600 dark:text-gray-300"
                    >
                      ←
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center
                        bg-white dark:bg-gray-600 rounded-lg shadow-sm
                        text-gray-600 dark:text-gray-300"
                    >
                      →
                    </motion.button>
                  </div>

                  {/* View options */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center
                        bg-white dark:bg-gray-600 rounded-lg shadow-sm
                        text-gray-600 dark:text-gray-300"
                    >
                      ≡
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center
                        bg-white dark:bg-gray-600 rounded-lg shadow-sm
                        text-gray-600 dark:text-gray-300"
                    >
                      #
                    </motion.button>
                  </div>
                </div>

                {/* File browser */}
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {["Documents", "Images", "Music", "Videos"].map((folder) => (
                      <motion.div
                        key={folder}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl
                          border border-blue-200 dark:border-blue-800
                          cursor-pointer group"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <motion.div
                            animate={{
                              rotateY: [0, 10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="w-12 h-12 bg-blue-500 rounded-xl
                              flex items-center justify-center text-white text-2xl"
                          >
                            📁
                          </motion.div>
                          <span className="text-sm font-medium text-gray-700
                            dark:text-gray-300 group-hover:text-blue-500
                            dark:group-hover:text-blue-400 transition-colors"
                          >
                            {folder}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Recent files */}
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700
                      dark:text-gray-300 mb-4"
                    >
                      Recent Files
                    </h3>
                    <div className="space-y-2">
                      {["Document.pdf", "Image.jpg", "Music.mp3"].map((file) => (
                        <motion.div
                          key={file}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg
                            border border-gray-200 dark:border-gray-600
                            flex items-center gap-3 group cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30
                            rounded-lg flex items-center justify-center
                            text-blue-500"
                          >
                            📄
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300
                            group-hover:text-blue-500 dark:group-hover:text-blue-400
                            transition-colors"
                          >
                            {file}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                    text-gray-500 dark:text-gray-400 hover:text-gray-700
                    dark:hover:text-gray-200 transition-colors"
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
      className="px-8 py-3 bg-blue-500 text-white font-medium rounded-xl
        shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 
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
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("folder");

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50
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
          Open Files
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            File Manager
          </StyledDialogHeader>
          <StyledDialogDescription>
            Browse and manage your files
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
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsDialogOpen(false);
                alert("Files uploaded successfully!");
              }}
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-xl"
            >
              Upload
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 