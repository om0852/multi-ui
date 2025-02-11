"use client";
import React  from "react";
import { motion } from "framer-motion";

const AnimatedPagination = ({
  className,
  totalPages = 10,
  currentPage,
  visibleCount = 5,
  onPageChange,
  ...props
}: {
  className?: string;
  totalPages?: number;
  currentPage: number;
  visibleCount?: number;
  onPageChange: (page: number) => void;
} & React.ComponentProps<"nav">) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  const renderPageLinks = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(visibleCount / 2));
    const endPage = Math.min(totalPages, startPage + visibleCount - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.button
          key={i}
          onClick={() => handlePageChange(i)}
          whileHover={{ scale: 1.1, backgroundColor: "#4ade80" }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1 mx-1 rounded-md text-sm font-medium transition-all border-2 ${
            i === currentPage
              ? "bg-green-400 text-white border-green-500 shadow-lg"
              : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
          }`}
        >
          {i}
        </motion.button>
      );
    }

    return pages;
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Animated Pagination Navigation"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`flex flex-col items-center space-y-4 ${className || ""}`}
    >
      <motion.div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#bfdbfe" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white text-blue-500 border border-blue-400 hover:bg-blue-100"
          }`}
        >
          Previous
        </motion.button>

        {renderPageLinks()}

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#bfdbfe" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white text-blue-500 border border-blue-400 hover:bg-blue-100"
          }`}
        >
          Next
        </motion.button>
      </motion.div>

      <motion.div
        className="text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Page {currentPage} of {totalPages}
      </motion.div>
    </motion.nav>
  );
};

export default AnimatedPagination;
