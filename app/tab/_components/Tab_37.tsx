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
    <div className={`inline-flex p-3 bg-black border border-[#0ff]/20 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] ${className}`}>
      <div className="flex w-full gap-2">
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

  return (
    <button
      className={`relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
        isActive
          ? "text-[#0ff]"
          : "text-[#0ff]/50 hover:text-[#0ff]"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-[#0ff]/10"
          layoutId="cyber-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(90deg, #0ff 0%, transparent 100%)",
                "linear-gradient(90deg, transparent 0%, #0ff 50%, transparent 100%)",
                "linear-gradient(90deg, transparent 0%, #0ff 100%)",
              ],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-x-0 h-px top-0 bg-[#0ff]/50" />
          <div className="absolute inset-x-0 h-px bottom-0 bg-[#0ff]/50" />
        </motion.div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1 h-4 bg-[#0ff] shadow-[0_0_10px_#0ff]"
          />
        )}
      </span>
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab = "", className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className={`mt-6 p-6 bg-black/50 border border-[#0ff]/20 rounded-lg shadow-[0_0_30px_rgba(0,255,255,0.1)] ${className}`}
          >
            <div className="relative z-10 text-[#0ff]/90">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 