"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToggleGroupProps {
  type: "single" | "multiple"; // Type of toggle group (single or multiple selection)
  children: React.ReactNode; // Child components (ToggleGroupItem)
  className?: string; // Custom class for the toggle group container
}

interface ToggleGroupItemProps {
  value: string; // The value of the toggle item
  children: React.ReactNode; // Content of the toggle item
  isActive?: boolean; // Is the toggle item active or not
  setActive?: (value: string) => void; // Function to change the active toggle
  type: "single" | "multiple"; // Type of toggle group
  className?: string; // Custom class for the toggle item
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({ type, children, className }) => {
  const [activeValues, setActiveValues] = useState<string[]>(type === "multiple" ? [] : [""]);

  const setActive = (value: string) => {
    if (type === "single") {
      // For single selection, set only one active value
      setActiveValues([value]);
    } else {
      // For multiple selection, toggle the value on and off
      setActiveValues((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // Remove if already active
          : [...prev, value] // Add if not active
      );
    }
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              isActive: activeValues.includes(child.props.value),
              setActive,
              type,
            })
          : child
      )}
    </div>
  );
};

const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({
  value,
  children,
  isActive,
  setActive,
  type,
  className,
}) => {
  const handleClick = () => {
    setActive(value); // Trigger active state change
  };

  return (
    <motion.button
      className={`relative px-6 py-3 text-lg font-semibold transition-all rounded-lg w-full ${className} ${
        isActive
          ? "bg-blue-600 text-white shadow-md scale-105"
          : "bg-transparent text-gray-600 hover:bg-blue-100"
      }`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-300 rounded"
          layoutId="toggle-indicator"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
      )}
    </motion.button>
  );
};

export { ToggleGroup, ToggleGroupItem };
