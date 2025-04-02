'use client';
import React from 'react';

interface DotPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const DotPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: DotPaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="text-emerald-500 hover:text-emerald-600 transition-colors"
      >
        ←
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className="group relative"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index + 1
                  ? 'bg-emerald-500 scale-125'
                  : 'bg-emerald-200 hover:bg-emerald-300'
              }`}
            />
            <span
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              {index + 1}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="text-emerald-500 hover:text-emerald-600 transition-colors"
      >
        →
      </button>
    </div>
  );
};

export default DotPagination; 