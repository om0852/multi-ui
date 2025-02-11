"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabsProps {
  defaultValue: string; // Default tab to display
  className?: string; // Custom class for the container
  children: React.ReactNode; // Child components (TabsList, TabsContent, etc.)
}

interface TabsListProps {
  children: React.ReactNode; // Tab triggers (e.g., <TabsTrigger>)
  activeTab: string; // Currently active tab
  setActiveTab: (value: string) => void; // Function to change the active tab
}

interface TabsTriggerProps {
  value: string; // The tab's value
  children: React.ReactNode; // Content of the tab trigger
  activeTab?: string; // Currently active tab
  setActiveTab?: (value: string) => void; // Function to change the active tab
}

interface TabsContentProps {
  value: string; // Tab value associated with this content
  children: React.ReactNode; // Content of the tab
  activeTab?: string; // Currently active tab
  backgroundColor?: string; // Background color for the content
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
    <div className="flex items-center gap-4 p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-xl">
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
      className={`relative w-full px-5 py-3 text-lg font-semibold transition-all rounded-lg ${
        isActive
          ? "bg-white text-blue-600 shadow-md transform scale-110"
          : "bg-transparent text-white hover:bg-blue-600"
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
  backgroundColor="light",
}) => {
  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
          className={`mt-6 p-6 rounded-lg shadow-md ${
            backgroundColor === "dark"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
