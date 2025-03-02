"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabChildProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

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
    <div className={`inline-flex p-3 bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-xl rounded-[2rem] shadow-xl ${className}`}>
      <div className="flex w-full gap-3 p-1">
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

  return (
    <button
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-2xl overflow-hidden ${
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500"
          layoutId="blob-bg"
          transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-xl" />
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
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab, className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
              borderRadius: "16px"
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              borderRadius: "24px"
            }}
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
              borderRadius: "32px"
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6
            }}
            className={`mt-8 p-8 bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/10 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 blur-3xl" />
              <div className="relative z-10 text-gray-200">
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




