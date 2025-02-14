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
    <div className={`inline-flex p-3 bg-gray-900 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.3)] ${className}`}>
      <div className="flex w-full gap-2">
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
      className={`group relative flex-1 px-5 py-2.5 text-sm font-medium transition-all duration-500 rounded-xl overflow-hidden ${
        isActive
          ? "text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          : "text-gray-400 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"
          layoutId="neon-bg"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-xl" />
      </motion.div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
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
              filter: "blur(10px)",
              y: 20
            }}
            animate={{ 
              opacity: 1,
              filter: "blur(0px)",
              y: 0
            }}
            exit={{ 
              opacity: 0,
              filter: "blur(10px)",
              y: -20
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.5
            }}
            className={`mt-6 p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.2)] border border-violet-500/20 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 blur-2xl" />
              <div className="relative text-gray-200">
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
