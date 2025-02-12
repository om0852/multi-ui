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
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className = "", children }) => {
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

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`inline-flex p-2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg ${className}`}>
      <div className="flex w-full gap-2 p-1 bg-black/5 rounded-xl">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
                activeTab,
                setActiveTab,
              })
            : child
        )}
      </div>
    </div>
  );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  activeTab,
  setActiveTab,
  className = "",
}) => {
  const isActive = activeTab === value;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`group relative flex-1 px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
        isActive
          ? "text-white"
          : "text-gray-600 hover:text-gray-900"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg"
          layoutId="active-tab-bg"
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          exit={{ rotateX: 90 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.6
          }}
        />
      )}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg opacity-0"
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0, rotateZ: -180 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-glow" />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab, className = "" }) => {
  return (
    <div className="relative perspective-[2000px]">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              rotateX: 20,
              y: 40,
              z: -100
            }}
            animate={{ 
              opacity: 1,
              rotateX: 0,
              y: 0,
              z: 0
            }}
            exit={{ 
              opacity: 0,
              rotateX: -20,
              y: -40,
              z: -100
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.7
            }}
            className={`mt-6 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 ${className}`}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 text-gray-200">
                {children}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
