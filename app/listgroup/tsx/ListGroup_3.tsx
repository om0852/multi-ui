"use client";
import React, { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

/**
 * Props for the ListGroup component
 */
interface ListGroupProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "card" | "stacked";
}

/**
 * ListGroup Component
 * Acts as a container for list items.
 */
const ListGroup: React.FC<ListGroupProps> = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "space-y-2",
    card: "flex flex-col space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4",
    stacked: "flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6",
  };

  return (
    <motion.ul
      className={`list-group ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.ul>
  );
};

/**
 * Props for the ListItem component
 */
interface ListItemProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
  className?: string;
  animationType?: "hover-scale" | "slide-in" | "pulse";
}

/**
 * ListItem Component
 * Represents an individual item in the list.
 */
const ListItem: React.FC<ListItemProps> = ({
  children,
  onClick,
  className = "",
  animationType = "hover-scale",
}) => {
  const animations = {
    "hover-scale": {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    },
    "slide-in": {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.3 },
    },
    pulse: {
      whileHover: { scale: 1.1, backgroundColor: "#f3f4f6" },
      whileTap: { scale: 1.0 },
    },
  };

  const motionProps = animations[animationType] || {};

  return (
    <motion.li
      className={`list-group-item cursor-pointer p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      <motion.div
        className="flex items-center space-x-3"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-4 h-4 bg-blue-500 dark:bg-blue-300 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span>{children}</span>
      </motion.div>
    </motion.li>
  );
};

// Export both components
export { ListGroup, ListItem };
