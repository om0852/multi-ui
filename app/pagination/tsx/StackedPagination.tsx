'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const StackedPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-violet-300 rounded-lg transform transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
        <div className="relative px-4 py-2 bg-violet-500 text-white rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          Previous
        </div>
      </button>
      <div className="flex items-center gap-3">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className="relative group"
          >
            <div className={`absolute inset-0 rounded-lg transform transition-transform group-hover:-translate-x-1 group-hover:translate-y-1
              ${currentPage === index + 1 ? 'bg-violet-300' : 'bg-gray-300'}`}>
            </div>
            <div className={`relative w-10 h-10 flex items-center justify-center rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1
              ${currentPage === index + 1 
                ? 'bg-violet-500 text-white' 
                : 'bg-gray-100 text-gray-700'}`}>
              {index + 1}
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-violet-300 rounded-lg transform transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
        <div className="relative px-4 py-2 bg-violet-500 text-white rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          Next
        </div>
      </button>
    </div>
  );
};

export default StackedPagination; 