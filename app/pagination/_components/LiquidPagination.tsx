'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const LiquidPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-full">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <span className={`absolute inset-0 rounded-full transition-all duration-500 ease-out
            ${currentPage === index + 1 
              ? 'bg-violet-500 scale-100' 
              : 'bg-transparent scale-50 opacity-0'}`}></span>
          <span className={`relative z-10 transition-colors duration-500
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LiquidPagination;