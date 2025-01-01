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
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
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

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-6 p-2 bg-gradient-to-r w-full from-cyan-500 to-purple-500 rounded-lg shadow-xl">
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

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`relative px-6 py-3 text-lg font-semibold transition-all rounded-lg ${
        isActive
          ? "bg-white text-blue-600 shadow-2xl transform scale-110"
          : "bg-transparent text-white hover:text-blue-500 hover:scale-105 hover:shadow-lg"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-600"
          layoutId="tabs-indicator"
        />
      )}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab }) => {
  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
          className="mt-6 p-6 bg-white rounded-lg shadow-lg"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
