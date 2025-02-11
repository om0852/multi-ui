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
  backgroundColor?: string;
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
    <div className="flex w-full items-center gap-6 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-lg shadow-lg">
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
      className={`relative px-6 py-3 w-full text-lg font-medium transition-all rounded-lg ${
        isActive
          ? "bg-white text-purple-700 shadow-xl transform scale-105"
          : "bg-transparent text-white hover:bg-purple-700"
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
    <AnimatePresence>
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25,
            duration: 0.4,
          }}
          className={`mt-4 p-6 rounded-lg shadow-lg ${
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
