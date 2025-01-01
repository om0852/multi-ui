"use client";
import React, { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

/**
 * Props for the ListGroup component
 */
interface ListGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * ListGroup Component
 * Acts as a container for list items.
 */
const ListGroup: React.FC<ListGroupProps> = ({ children, className = "" }) => {
  return (
    <motion.ul
      className={`list-group rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
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
}

/**
 * ListItem Component
 * Represents an individual item in the list.
 */
const ListItem: React.FC<ListItemProps> = ({ children, onClick, className = "" }) => {
  return (
    <motion.li
      className={`list-group-item cursor-pointer px-5 py-4 bg-white dark:bg-gray-800 hover:shadow-lg transition-all rounded-md m-2 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 ${className}`}
      whileHover={{ x: 10, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        <span>{children}</span>
      </div>
    </motion.li>
  );
};

// Export both components
export { ListGroup, ListItem };
