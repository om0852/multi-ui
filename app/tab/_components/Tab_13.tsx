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
  backgroundColor?: "dark" | "light"; // Optional background color
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
    <div className="flex items-center gap-6 p-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-t-lg shadow-xl w-full">
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
      className={`relative w-full px-6 py-3 text-lg font-semibold transition-all rounded-lg ${
        isActive
          ? "bg-white text-teal-700 shadow-xl transform scale-105"
          : "bg-transparent text-white hover:bg-teal-600"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  activeTab,
  backgroundColor = "light", // Default to light if no background color is provided
}) => {
  return (
    <AnimatePresence>
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.95 }} // Start with a slightly smaller scale
          animate={{ opacity: 1, scale: 1 }} // Scale up and fade in
          exit={{ opacity: 0, scale: 1.05 }} // Scale slightly up as it exits
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.4,
          }}
          className={`mt-4 p-6 rounded-lg shadow-lg transition-all ${
            backgroundColor === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
