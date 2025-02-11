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
    <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
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
      className={`relative w-full px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-600 hover:text-gray-800"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-600"
          layoutId="tabs-indicator"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="mt-4 p-6 bg-gray-50 border rounded-lg shadow-md"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
