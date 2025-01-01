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
    <div className="flex gap-4 py-4 border-b-4 border-gray-200">
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
    <motion.button
      className={`relative py-3 px-8 text-lg font-medium transition-all duration-300 rounded-lg shadow-md hover:shadow-lg ${
        isActive
          ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
      onClick={() => setActiveTab?.(value)}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500"
          layoutId="tabs-indicator"
        />
      )}
    </motion.button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab }) => {
  return (
    <AnimatePresence>
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{
            opacity: { duration: 0.4, ease: "easeInOut" },
            x: { type: "spring", stiffness: 200, damping: 25 },
          }}
          className="pt-6"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
