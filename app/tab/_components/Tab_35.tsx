"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (value: string) => void;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  className?: string;
}

interface TabChildProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className = "", children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`flex flex-col ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<TabChildProps>, {
              activeTab,
              setActiveTab,
            })
          : child
      )}
    </div>
  );
};

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`inline-flex p-4 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-[2rem] ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-white/5 rounded-[1.5rem]">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<TabChildProps>, {
                activeTab,
                setActiveTab,
              })
            : child
        )}
      </div>
    </div>
  );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  activeTab,
  setActiveTab,
  className = "",
}) => {
  const isActive = activeTab === value;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-xl overflow-hidden ${
        isActive
          ? "text-white"
          : "text-red-300/70 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0"
          layoutId="sunset-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 50% 0%, rgba(248,113,113,0.4) 0%, transparent 70%)",
                "radial-gradient(circle at 50% 100%, rgba(248,113,113,0.4) 0%, transparent 70%)",
                "radial-gradient(circle at 50% 0%, rgba(248,113,113,0.4) 0%, transparent 70%)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 blur-sm" />
      </motion.div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(248,113,113,0.7)",
                  "0 0 40px rgba(248,113,113,0.9)",
                  "0 0 20px rgba(248,113,113,0.7)",
                ],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-yellow-400"
            />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab = "", className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              y: 20,
              scale: 0.95,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              scale: 0.95,
              filter: "blur(10px)"
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className={`mt-6 p-8 bg-gradient-to-br from-red-950/40 via-orange-950/40 to-yellow-950/40 backdrop-blur-2xl rounded-2xl border border-red-400/20 shadow-[0_8px_32px_rgba(248,113,113,0.15)] ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(248,113,113,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(248,113,113,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(248,113,113,0.2) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-red-50">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; 