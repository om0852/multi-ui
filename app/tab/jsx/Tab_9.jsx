"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`flex flex-col ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              activeTab,
              setActiveTab,
            })
          : child
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 py-4 border-b-4 border-gray-200">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              activeTab,
              setActiveTab,
            })
          : child
      )}
    </div>
  );
};

const TabsTrigger = ({
  value,
  children,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === value;

  return (
    <motion.button
      className={`relative w-full py-3 px-8 text-lg font-medium transition-all duration-300 rounded-lg shadow-md hover:shadow-lg ${
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

const TabsContent = ({ value, children, activeTab, className = "" }) => {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              scale: 1.5,
              filter: "blur(20px)",
              y: 20
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              y: 0
            }}
            exit={{ 
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
              y: -20
            }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
              filter: { duration: 0.4 },
              y: { type: "spring", stiffness: 400, damping: 30 }
            }}
            className={`mt-6 rounded-xl p-4 focus:outline-none transform-gpu ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
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