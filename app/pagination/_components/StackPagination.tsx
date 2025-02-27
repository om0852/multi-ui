'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const StackPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3 perspective-[1000px]">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 transition-all duration-500
            ${currentPage === index + 1 
              ? 'translate-z-12 rotate-x-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-white' 
              : 'rotate-x-60 bg-white border border-gray-200 text-gray-600'} 
            rounded-lg shadow-lg`}
        >
          <span className="relative z-10">{index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default StackPagination;