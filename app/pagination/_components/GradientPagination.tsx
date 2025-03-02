'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const GradientPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300"
      >
        ←
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 
              ${currentPage === index + 1 
                ? 'bg-white text-purple-600 shadow-lg scale-110' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300"
      >
        →
      </button>
    </div>
  );
};

export default GradientPagination; 