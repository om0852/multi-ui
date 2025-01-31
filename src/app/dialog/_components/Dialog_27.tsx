"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationStyles = {
  destination: {
    initial: { scale: 0.9, y: 20, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.9, y: -20, opacity: 0 },
    transition: { type: "spring", damping: 25 }
  },
  booking: {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: { type: "spring", damping: 20 }
  },
  calendar: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { duration: 0.2 }
  },
  flight: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { type: "spring", bounce: 0.4 }
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
              {/* Travel pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_25%,transparent_25%,transparent_50%,rgba(59,130,246,0.1)_50%,rgba(59,130,246,0.1)_75%,transparent_75%,transparent)]
                bg-[length:24px_24px] rounded-2xl opacity-30" />
              
              {/* Main content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl
                shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Flight animation */}
                <motion.div
                  animate={{
                    x: [0, 400, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-8 right-8 text-2xl opacity-20"
                >
                  ✈️
                </motion.div>

                {/* Booking content */}
                <div className="p-6">
                  {/* Destination cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { name: "Paris", emoji: "🗼", price: "$599" },
                      { name: "Tokyo", emoji: "🗾", price: "$899" },
                      { name: "New York", emoji: "🗽", price: "$499" },
                      { name: "Dubai", emoji: "🌇", price: "$799" },
                    ].map((destination, index) => (
                      <motion.div
                        key={destination.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl
                          border border-blue-200 dark:border-blue-800
                          hover:shadow-lg transition-shadow cursor-pointer group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-2xl mb-2 block">
                              {destination.emoji}
                            </span>
                            <h3 className="text-sm font-medium text-gray-900
                              dark:text-white"
                            >
                              {destination.name}
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400
                              font-medium"
                            >
                              {destination.price}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-6 h-6 rounded-full bg-blue-500
                              text-white flex items-center justify-center
                              text-sm opacity-0 group-hover:opacity-100
                              transition-opacity"
                          >
                            →
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Booking form */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700
                          dark:text-gray-300 mb-1"
                        >
                          Check-in
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700
                          dark:text-gray-300 mb-1"
                        >
                          Check-out
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            rounded-lg text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700
                        dark:text-gray-300 mb-1"
                      >
                        Guests
                      </label>
                      <select
                        className="w-full px-3 py-2 bg-white dark:bg-gray-700
                          border border-gray-300 dark:border-gray-600
                          rounded-lg text-sm"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
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
      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600
        text-white font-medium rounded-xl shadow-lg 
        shadow-blue-500/20 hover:shadow-blue-500/30 
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
  const [animationType, setAnimationType] = useState<keyof typeof animationStyles>("destination");

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
          Book Travel
        </StyledDialogTrigger>
        <StyledDialogContent
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          animationType={animationType}
        >
          <StyledDialogHeader>
            Travel Destinations
          </StyledDialogHeader>
          <StyledDialogDescription>
            Find and book your next adventure
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
                alert("Booking confirmed!");
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600
                text-white font-medium rounded-xl"
            >
              Book Now
            </motion.button>
          </StyledDialogFooter>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
} 