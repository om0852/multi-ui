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
    <div className={`inline-flex p-3 bg-black border border-[#00ff00]/20 rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.15)] ${className}`}>
      <div className="flex w-full gap-2">
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
      className={`relative flex-1 px-6 py-3 text-sm font-mono transition-all duration-300 rounded-lg ${
        isActive
          ? "text-[#00ff00]"
          : "text-[#00ff00]/50 hover:text-[#00ff00]"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-[#00ff00]/10"
          layoutId="matrix-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.4 }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear",
                }}
              >
                <div className="h-full w-px bg-[#00ff00]/30 mx-2" />
                <div className="h-full w-px bg-[#00ff00]/20 mx-2" />
                <div className="h-full w-px bg-[#00ff00]/10 mx-2" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1 h-4 bg-[#00ff00] shadow-[0_0_10px_#00ff00]"
          >
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "steps(3)",
              }}
              className="w-full h-full"
            />
          </motion.div>
        )}
      </span>
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab = "", className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`mt-6 p-6 bg-black/90 border border-[#00ff00]/20 rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.1)] overflow-hidden ${className}`}
          >
            <div className="relative">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear",
                  }}
                >
                  <div className="h-full w-px bg-[#00ff00]/10 absolute" style={{ left: `${i * 20}%` }} />
                </motion.div>
              ))}
              <div className="relative z-10 text-[#00ff00]/90 font-mono">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; 