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
    <div className={`inline-flex p-4 bg-gradient-to-br from-white/5 via-sky-100/10 to-white/5 rounded-2xl shadow-[0_0_30px_rgba(186,230,253,0.2)] backdrop-blur-sm ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-white/5 rounded-xl border border-white/20">
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
          ? "text-sky-100"
          : "text-sky-300/50 hover:text-sky-200"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0"
          layoutId="frost-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              background: [
                "radial-gradient(circle at 20% 50%, rgba(186,230,253,0.3), transparent 70%)",
                "radial-gradient(circle at 80% 50%, rgba(186,230,253,0.3), transparent 70%)",
                "radial-gradient(circle at 20% 50%, rgba(186,230,253,0.3), transparent 70%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-sky-200/10 via-white/5 to-sky-200/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
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
                  "0 0 20px rgba(186,230,253,0.5)",
                  "0 0 40px rgba(186,230,253,0.8)",
                  "0 0 20px rgba(186,230,253,0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-sky-200"
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
            className={`mt-6 p-8 bg-gradient-to-br from-sky-100/5 via-white/10 to-sky-100/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-[0_0_30px_rgba(186,230,253,0.15)] ${className}`}
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
                    "radial-gradient(circle at 0% 0%, rgba(186,230,253,0.2), transparent 70%)",
                    "radial-gradient(circle at 100% 100%, rgba(186,230,253,0.2), transparent 70%)",
                    "radial-gradient(circle at 0% 0%, rgba(186,230,253,0.2), transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 text-sky-100/90">
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