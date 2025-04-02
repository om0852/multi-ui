"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = ({ defaultValue, className = "", children }) => {
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

const TabsList = ({ children, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`inline-flex p-1 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-2xl ${className}`}>
      <div className="flex w-full gap-1 p-1 bg-gray-900 rounded-xl">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                activeTab,
                setActiveTab,
              })
            : child
        )}
      </div>
    </div>
  );
};

const TabsTrigger = ({
  value,
  children,
  activeTab,
  setActiveTab,
  className = "",
}) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`relative flex-1 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg"
          layoutId="tab-background"
          transition={{
            type: "spring",
            bounce: 0.15,
            duration: 0.5
          }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent = ({ value, children, activeTab, className = "" }) => {
  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, rotateX: -10, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 10, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className={`mt-6 p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; 