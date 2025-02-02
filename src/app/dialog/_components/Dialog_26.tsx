"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  recipe: {
    initial: { scale: 0.9, y: 20, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.9, y: -20, opacity: 0 },
    transition: { type: "spring", damping: 25 }
  },
  timer: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  ingredient: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
    transition: { duration: 0.2, staggerChildren: 0.1 }
  },
  step: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
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
              {/* Recipe card pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#f87171_1px,transparent_1px)]
                bg-[length:16px_16px] rounded-2xl opacity-10" />
              
              {/* Main content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl
                shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Recipe timer */}
                <div className="absolute top-4 right-12 flex items-center gap-2">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-8 h-8 rounded-full border-2 border-red-500
                      border-t-transparent"
                  />
                  <span className="text-sm font-medium text-red-500">25:00</span>
                </div>

                {/* Recipe content */}
                <div className="p-6">
                  {/* Recipe image */}
                  <div className="relative h-48 -mx-6 -mt-6 mb-6 bg-gradient-to-br
                    from-red-100 to-red-50 dark:from-red-900/30 dark:to-red-800/30"
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 flex items-center justify-center
                        text-6xl"
                    >
                      🍳
                    </motion.div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                      Ingredients
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "2 cups flour",
                        "1 cup sugar",
                        "3 eggs",
                        "1 cup milk",
                      ].map((ingredient, index) => (
                        <motion.div
                          key={ingredient}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600
                            dark:text-gray-300"
                        >
                          <div className="w-4 h-4 rounded border border-red-200
                            dark:border-red-800 flex-shrink-0"
                          />
                          {ingredient}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                      Instructions
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Preheat oven to 350°F",
                        "Mix dry ingredients",
                        "Add wet ingredients",
                        "Bake for 25 minutes",
                      ].map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-red-100
                            dark:bg-red-900/30 flex items-center justify-center
                            text-sm font-medium text-red-500"
                          >
                            {index + 1}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {step}
                          </p>
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
      className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600
        text-white font-medium rounded-xl shadow-lg 
        shadow-red-500/20 hover:shadow-red-500/30 
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
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("recipe");

  return (
    <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50
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
          View Recipe
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Classic Chocolate Cake
          </StyledDialogHeader>
          <StyledDialogDescription>
            A delicious homemade chocolate cake recipe
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
                alert("Recipe saved to favorites!");
              }}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600
                text-white font-medium rounded-xl"
            >
              Save Recipe
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 