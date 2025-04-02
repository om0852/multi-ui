import React, { useState } from 'react';

const NeonPagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 font-mono">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 text-pink-400 border border-pink-400 rounded-lg
          hover:bg-pink-400 hover:text-white transition-all
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-8 h-8 rounded-full flex items-center justify-center
              border transition-all
              ${currentPage === page
                ? 'bg-pink-400 border-pink-400 text-white glow'
                : 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-pink-400 border border-pink-400 rounded-lg
          hover:bg-pink-400 hover:text-white transition-all
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default NeonPagination;
