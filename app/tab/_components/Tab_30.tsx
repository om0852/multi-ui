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

const Tabs: React.FC<TabsProps> = ({ defaultValue, className = "", children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`flex flex-col ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
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
    <div className={`inline-flex p-4 bg-zinc-900 rounded-2xl backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)] ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-black/40 rounded-xl">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
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
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-lg overflow-hidden ${
        isActive
          ? "text-white"
          : "text-cyan-300/70 hover:text-white"
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
          layoutId="neon-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-cyan-500/20" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(to right, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 100%)",
                "linear-gradient(to right, rgba(6,182,212,0) 0%, rgba(6,182,212,0.3) 50%, rgba(6,182,212,0) 100%)",
                "linear-gradient(to right, rgba(6,182,212,0) 0%, rgba(6,182,212,0.3) 100%)",
              ],
              x: ["-100%", "100%", "-100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: [
                "inset 0 0 15px rgba(6,182,212,0.5)",
                "inset 0 0 30px rgba(6,182,212,0.5)",
                "inset 0 0 15px rgba(6,182,212,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl" />
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
                  "0 0 10px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.3)",
                  "0 0 20px rgba(6,182,212,0.8), 0 0 40px rgba(6,182,212,0.5)",
                  "0 0 10px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
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
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              scale: 0.95
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className={`mt-6 p-8 bg-zinc-900 rounded-xl backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)] ${className}`}
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
                    "linear-gradient(to right, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0) 100%)",
                    "linear-gradient(to right, rgba(6,182,212,0) 0%, rgba(6,182,212,0.1) 50%, rgba(6,182,212,0) 100%)",
                    "linear-gradient(to right, rgba(6,182,212,0) 0%, rgba(6,182,212,0.1) 100%)",
                  ],
                  x: ["-100%", "100%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-cyan-50">
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