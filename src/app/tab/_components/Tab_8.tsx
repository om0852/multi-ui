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
    <div className="flex items-center gap-4 py-3 border-b-2 border-transparent">
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
      className={`relative flex-1 text-lg font-semibold py-2 px-6 transition-all ease-out duration-300 rounded-t-lg ${
        isActive
          ? "text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600"
          layoutId="tabs-indicator"
        />
      )}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab }) => {
  return (
    <AnimatePresence>
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
          exit={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(5px)",
            transition: { duration: 0.3 },
          }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { type: "spring", stiffness: 250, damping: 25 },
            filter: { type: "spring", stiffness: 300, damping: 30 },
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
