"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

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
    <div className={`inline-flex p-3 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 backdrop-blur-xl rounded-2xl ${className}`}>
      <div className="flex w-full gap-3 p-1.5 bg-black/5 rounded-xl">
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      setMouseX(distanceX * 0.1);
      setMouseY(distanceY * 0.1);
      
      x.set(distanceX * 0.1);
      y.set(distanceY * 0.1);
    }
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`group relative flex-1 px-6 py-3 text-sm font-medium transition-colors rounded-xl overflow-hidden ${
        isActive
          ? "text-amber-900 dark:text-amber-100"
          : "text-amber-700/70 hover:text-amber-900 dark:text-amber-400/70 dark:hover:text-amber-100"
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mouseX,
        y: mouseY,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-100 dark:from-amber-500/20 dark:to-yellow-500/20"
          layoutId="magnetic-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(251,191,36,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(251,191,36,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(251,191,36,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 0%, rgba(251,191,36,0.2) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
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
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400"
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
              scale: 0.95,
              y: 10,
              rotateX: -10
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              y: -10,
              rotateX: 10
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className={`mt-6 p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-500/10 dark:to-yellow-500/10 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-amber-500/5 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 blur-2xl" />
              <div className="relative z-10 text-amber-900 dark:text-amber-100">
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