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
  className?: string;
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
    <div className="flex items-center gap-6 p-2 bg-gradient-to-r w-full from-cyan-500 to-purple-500 rounded-lg shadow-xl">
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
      className={`relative w-full px-6 py-3 text-lg font-semibold transition-all rounded-lg ${
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

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab = "", className = "" }) => {
  const [direction, setDirection] = useState(0);
  
  React.useEffect(() => {
    setDirection(value > (activeTab || "") ? 1 : -1);
  }, [value, activeTab]);

  return (
    <div className="relative perspective-[2000px] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        {activeTab === value && (
          <motion.div
            key={value}
            custom={direction}
            initial={{ 
              opacity: 0,
              rotateY: direction * 90,
              x: direction * 100,
              z: -100
            }}
            animate={{ 
              opacity: 1,
              rotateY: 0,
              x: 0,
              z: 0
            }}
            exit={{ 
              opacity: 0,
              rotateY: direction * -90,
              x: direction * -100,
              z: -100
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
            className={`mt-6 rounded-xl p-4 focus:outline-none transform-gpu ${className}`}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
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