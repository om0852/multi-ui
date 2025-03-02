"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabChildProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

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
  className?: string; // Custom class for the content container
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
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

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between gap-4 pb-2 border-b-2 border-gray-300">
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

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`relative w-full flex-1 text-lg font-semibold py-2 px-4 rounded-t-lg transition-all duration-300 ease-in-out ${
        isActive
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
          : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500"
          layoutId="tabs-indicator"
          transition={{ duration: 0.3 }}
        />
      )}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab, className = "" }) => {
  const [direction, setDirection] = useState(0);
  
  React.useEffect(() => {
    setDirection(value > (activeTab ?? '') ? 1 : -1);
  }, [value, activeTab]);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        {activeTab === value && (
          <motion.div
            key={value}
            custom={direction}
            initial={{ opacity: 0, x: 100 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 * direction }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
            className={`mt-6 rounded-xl p-4 focus:outline-none ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.3
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
