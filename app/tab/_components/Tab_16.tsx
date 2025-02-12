"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ... Keep all interfaces the same ...

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
    <div className={`inline-flex p-2 bg-gradient-to-br from-orange-400/20 via-amber-400/20 to-yellow-400/20 backdrop-blur-xl rounded-[1.5rem] shadow-lg ${className}`}>
      <div className="flex w-full gap-2 p-2 bg-black/10 rounded-2xl backdrop-blur-xl">
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

  return (
    <button
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-xl overflow-hidden ${
        isActive
          ? "text-amber-900"
          : "text-amber-700/70 hover:text-amber-900"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100"
          layoutId="liquid-bg"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent)]"
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab, className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              y: 20,
              scaleY: 0.8,
              transformOrigin: "50% 0%"
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scaleY: 1
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              scaleY: 0.8
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6
            }}
            className={`mt-6 p-8 bg-gradient-to-br from-orange-100/30 via-amber-100/30 to-yellow-100/30 backdrop-blur-2xl rounded-2xl shadow-xl border border-amber-200/20 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 blur-2xl" />
              <div className="relative z-10 text-amber-900">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; 