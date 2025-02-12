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
    <div className={`inline-flex p-4 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-[2rem] ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-white/5 rounded-[1.5rem]">
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
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-2xl overflow-hidden ${
        isActive
          ? "text-white"
          : "text-blue-200/70 hover:text-white"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
          layoutId="morph-bg"
          initial={{ borderRadius: "1rem" }}
          animate={{ 
            borderRadius: ["1rem", "2rem", "1.5rem", "2.5rem", "1rem"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-xl" />
      </motion.div>
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
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
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
      <AnimatePresence mode="wait" initial={false}>
        {activeTab === value && (
          <motion.div
            key={value}
            initial={{ 
              opacity: 0,
              scale: 0.9,
              borderRadius: "1rem"
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              borderRadius: ["1rem", "2rem", "1.5rem", "2.5rem", "1rem"]
            }}
            exit={{ 
              opacity: 0,
              scale: 0.9,
              borderRadius: "3rem"
            }}
            transition={{
              duration: 0.5,
              borderRadius: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className={`mt-8 p-8 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-2xl border border-white/10 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(139,92,246,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-white/90">
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