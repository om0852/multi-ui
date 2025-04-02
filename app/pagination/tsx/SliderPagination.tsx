'use client';
import React from 'react';

interface SliderPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SliderPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: SliderPaginationProps) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 p-2 rounded-lg">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        Previous
      </button>
      <div className="flex items-center">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className="relative"
          >
            <div
              className={`w-8 h-1 mx-1 rounded-full transition-all duration-300 ${
                currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
            <span
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${
                currentPage === index + 1 ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
            >
              {index + 1}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default SliderPagination; 