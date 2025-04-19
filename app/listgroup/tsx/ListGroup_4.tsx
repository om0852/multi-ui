"use client";
import React, { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

/**
 * Props for the ListGroup component
 */
interface ListGroupProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "highlighted" | "gradient";
}

/**
 * ListGroup Component
 * Acts as a container for list items.
 */
const ListGroup: React.FC<ListGroupProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variants = {
    default: "space-y-2",
    bordered: "space-y-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4",
    highlighted: "space-y-2 bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-lg p-4",
    gradient:
      "space-y-2 bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-800 dark:to-pink-800 rounded-lg p-6",
  };

  return (
    <motion.ul
      className={`list-group ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, staggerChildren: 0.1 }}
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
  animationType?:
    | "hover-scale"
    | "slide-in"
    | "fade-in"
    | "rotate"
    | "flip"
    | "bounce";
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
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.3 },
    },
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
    },
    rotate: {
      whileHover: { rotate: 15 },
      whileTap: { rotate: -15 },
    },
    flip: {
      whileHover: { rotateY: 180 },
      whileTap: { rotateY: 0 },
    },
    bounce: {
      whileHover: { y: -10 },
      whileTap: { y: 0 },
    },
  };

  const motionProps = animations[animationType] || {};

  return (
    <motion.li
      className={`list-group-item cursor-pointer p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.li>
  );
};

// Export both components
export { ListGroup, ListItem };
