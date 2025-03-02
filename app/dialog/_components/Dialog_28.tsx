"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  gallery: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { type: "spring", damping: 25 }
  },
  zoom: {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  slide: {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90"
            onClick={() => selectedImage === null ? onClose() : setSelectedImage(null)}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              {...animation}
              className="relative w-full max-w-4xl"
            >
              {/* Main content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl
                shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Gallery grid */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="aspect-square relative group cursor-pointer
                          overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(index)}
                      >
                        {/* Placeholder image with gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br
                          ${index % 3 === 0 ? 'from-purple-500 to-pink-500' :
                          index % 3 === 1 ? 'from-blue-500 to-teal-500' :
                          'from-orange-500 to-red-500'}`}
                        />
                        
                        {/* Image overlay */}
                        <motion.div
                          initial={false}
                          animate={{ opacity: 1 }}
                          whileHover={{ opacity: 0.8 }}
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/40
                            transition-colors flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="w-10 h-10 rounded-full bg-white/90
                              flex items-center justify-center text-gray-900"
                          >
                            🔍
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image viewer overlay */}
                <AnimatePresence>
                  {selectedImage !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/95 z-50
                        flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative max-w-4xl w-full aspect-video"
                      >
                        {/* Placeholder image with gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br
                          ${selectedImage % 3 === 0 ? 'from-purple-500 to-pink-500' :
                          selectedImage % 3 === 1 ? 'from-blue-500 to-teal-500' :
                          'from-orange-500 to-red-500'} rounded-lg`}
                        />

                        {/* Navigation buttons */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2
                          flex items-center justify-between px-4"
                        >
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-white/10
                              flex items-center justify-center text-white
                              backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(prev => 
                                prev === null ? null : 
                                prev === 0 ? 8 : prev - 1
                              );
                            }}
                          >
                            ←
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-white/10
                              flex items-center justify-center text-white
                              backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(prev => 
                                prev === null ? null : 
                                prev === 8 ? 0 : prev + 1
                              );
                            }}
                          >
                            →
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500
        text-white font-medium rounded-xl shadow-lg 
        shadow-purple-500/20 hover:shadow-purple-500/30 
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
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("gallery");

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50
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
          View Gallery
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Photo Gallery
          </StyledDialogHeader>
          <StyledDialogDescription>
            Browse through our collection
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
                alert("Photos downloaded!");
              }}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500
                text-white font-medium rounded-xl"
            >
              Download All
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 