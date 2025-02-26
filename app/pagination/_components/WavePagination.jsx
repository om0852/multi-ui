import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WavePagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <div className="relative h-12 w-full max-w-md mx-auto">
      <div className="absolute w-full h-1 bg-blue-200 top-1/2 -translate-y-1/2" />
      <div className="relative flex justify-between">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(page)}
            className="w-8 h-8 rounded-full bg-blue-500 text-white relative z-10"
            style={{
              y: currentPage === page ? '-50%' : '0%',
              transition: 'y 0.3s ease'
            }}
          >
            {page}
          </motion.button>
        ))}
      </div>
      <motion.div
        className="absolute h-1 bg-blue-500 top-1/2 -translate-y-1/2"
        style={{
          width: `${(currentPage / totalPages) * 100}%`,
          left: 0
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </div>
  );
};

export default WavePagination;
