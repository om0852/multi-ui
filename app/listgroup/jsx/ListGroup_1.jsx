'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * ListGroup Component
 * Acts as a container for list items.
 */
const ListGroup = ({ children, className = "" }) => {
  return (
    <motion.ul
      className={`list-group bg-white dark:bg-gray-800 shadow rounded-md divide-y divide-gray-200 dark:divide-gray-700 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, staggerChildren: 0.1 }}
    >
      {children}
    </motion.ul>
  );
};

/**
 * ListItem Component
 * Represents an individual item in the list.
 */
const ListItem = ({ children, onClick, className = "" }) => {
  return (
    <motion.li
      className={`list-group-item cursor-pointer p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-gray-800 dark:text-gray-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

// Export both components
export { ListGroup, ListItem }; 