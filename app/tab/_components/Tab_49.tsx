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
          ? React.cloneElement(child as React.ReactElement<TabChildProps>, {
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
    <div className={`inline-flex p-4 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 rounded-2xl shadow-[0_0_30px_rgba(129,140,248,0.2)] backdrop-blur-xl ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-black/20 rounded-xl border border-indigo-500/20">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<TabChildProps>, {
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
    <motion.button
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden ${
        isActive
          ? "text-indigo-200"
          : "text-indigo-400/70 hover:text-indigo-200"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0"
          layoutId="mystic-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(129,140,248,0.3), transparent 70%)",
                "radial-gradient(circle at 80% 50%, rgba(192,132,252,0.3), transparent 70%)",
                "radial-gradient(circle at 20% 50%, rgba(129,140,248,0.3), transparent 70%)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "radial-gradient(circle at 50% -20%, rgba(129,140,248,0.2), transparent 70%)",
            }}
          />
        </motion.div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(129,140,248,0.5)",
                  "0 0 40px rgba(129,140,248,0.8)",
                  "0 0 20px rgba(129,140,248,0.5)",
                ],
                background: [
                  "rgba(129,140,248,1)",
                  "rgba(192,132,252,1)",
                  "rgba(129,140,248,1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full"
            />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab = "", className = "" }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              y: 20,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              scale: 0.95
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className={`mt-6 p-8 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-xl border border-indigo-500/20 shadow-[0_0_30px_rgba(129,140,248,0.15)] ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.2), transparent 70%)",
                    "radial-gradient(circle at 100% 100%, rgba(192,132,252,0.2), transparent 70%)",
                    "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.2), transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 text-indigo-100/90">
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