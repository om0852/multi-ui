import * as React from "react";
import { motion } from "framer-motion";

const FancyPagination = ({
  className,
  totalPages = 20,
  currentPage = 1,
  visibleCount = 5,
  onPageChange,
  ...props
}: {
  className?: string;
  totalPages?: number;
  currentPage?: number;
  visibleCount?: number;
  onPageChange?: (page: number) => void;
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
        <motion.div
          key={i}
          whileHover={{ rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center items-center"
        >
          <button
            onClick={() => handlePageChange(i)}
            className={`px-4 py-2 mx-1 text-lg font-semibold border-2 border-blue-400 rounded-full transition-transform transform ${
  i === currentPage
                ? "bg-blue-400 text-white scale-110"
                : "bg-white text-blue-400 hover:bg-blue-200 hover:text-white"
            }`}
          >
            {i}
          </button>
        </motion.div>
      );
    }

    return pages;
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Fancy Pagination Navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex justify-center items-center space-x-4 ${className || ""}`}
    >
      <motion.button
        whileHover={{ scale: 1.2, backgroundColor: "#90cdf4" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full text-lg font-semibold transition-transform transform border-2 border-blue-400 ${
  currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-blue-400 hover:bg-blue-200 hover:text-white"
        }`}
      >
        Previous
      </motion.button>

      {renderPageLinks()}

      <motion.button
        whileHover={{ scale: 1.2, backgroundColor: "#90cdf4" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full text-lg font-semibold transition-transform transform border-2 border-blue-400 ${
  currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-blue-400 hover:bg-blue-200 hover:text-white"
        }`}
      >
        Next
      </motion.button>
    </motion.nav>
  );
};

export default FancyPagination;
