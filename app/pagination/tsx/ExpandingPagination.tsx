'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ExpandingPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="group relative px-4 h-12 overflow-hidden rounded-xl bg-amber-500 text-white"
      >
        <span className="relative z-10 flex items-center h-full group-hover:scale-90 transition-transform">←</span>
        <div className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className="group relative"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300
              ${currentPage === index + 1
                ? 'bg-amber-500 text-white'
                : 'bg-amber-100 text-amber-600'}`}
            >
              <span className={`transition-transform duration-300 ${
                currentPage === index + 1 ? 'scale-125' : 'group-hover:scale-125'
              }`}>
                {index + 1}
              </span>
            </div>
            {currentPage === index + 1 && (
              <div className="absolute -inset-1 bg-amber-500 -z-10 rounded-xl blur-sm"></div>
            )}
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="group relative px-4 h-12 overflow-hidden rounded-xl bg-amber-500 text-white"
      >
        <span className="relative z-10 flex items-center h-full group-hover:scale-90 transition-transform">→</span>
        <div className="absolute inset-0 bg-amber-600 transform translate-x-full group-hover:translate-x-0 transition-transform"></div>
      </button>
    </div>
  );
};

export default ExpandingPagination; 