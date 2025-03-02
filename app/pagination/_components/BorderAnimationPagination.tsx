'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const BorderAnimationPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="relative px-4 py-2 text-teal-600 overflow-hidden group"
      >
        <span className="absolute w-full h-0.5 bg-teal-600 left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        Prev
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`relative w-10 h-10 flex items-center justify-center group
              ${currentPage === index + 1 ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
          >
            <span className={`absolute inset-0 border-2 rounded 
              ${currentPage === index + 1 
                ? 'border-teal-600 scale-100' 
                : 'border-transparent scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:border-teal-600'} 
              transition-all duration-300`}>
            </span>
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="relative px-4 py-2 text-teal-600 overflow-hidden group"
      >
        <span className="absolute w-full h-0.5 bg-teal-600 left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        Next
      </button>
    </div>
  );
};

export default BorderAnimationPagination; 