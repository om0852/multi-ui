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

interface TabChildProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
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
    <div className={`inline-flex p-4 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-xl rounded-[2rem] ${className}`}>
      <div className="flex w-full gap-3 p-2 bg-white/5 rounded-[1.5rem]">
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-all duration-500 rounded-lg overflow-hidden ${
        isActive
          ? "text-sky-950"
          : "text-sky-300 hover:text-sky-100"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-100 to-sky-200" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.8) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:100%_4px]" />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-white/30 blur-sm" />
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
                boxShadow: [
                  "0 0 10px rgba(186,230,253,0.5)",
                  "0 0 20px rgba(186,230,253,0.8)",
                  "0 0 10px rgba(186,230,253,0.5)",
                ],
                scale: [1, 0.9, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-2 h-2 bg-gradient-to-br from-sky-200 to-white"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
              }}
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
              y: 20,
              scale: 0.95,
              filter: "blur(8px)"
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              scale: 0.95,
              filter: "blur(8px)"
            }}
            transition={{
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1]
            }}
            className={`mt-6 p-8 bg-gradient-to-br from-white/10 via-sky-100/10 to-sky-200/10 backdrop-blur-2xl rounded-2xl border border-sky-200/20 shadow-[0_8px_32px_rgba(186,230,253,0.15)] ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(186,230,253,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(186,230,253,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(186,230,253,0.2) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-sky-100">
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