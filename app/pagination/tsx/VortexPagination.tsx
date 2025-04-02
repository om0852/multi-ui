'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const VortexPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          <span className={`absolute inset-0 rounded-full transition-all duration-700
            ${currentPage === index + 1 
              ? 'bg-gradient-to-r from-blue-600 to-violet-600 rotate-180 scale-100' 
              : 'bg-gray-200 rotate-0 scale-90 group-hover:scale-95'}`}
          />
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-700
            ${currentPage === index + 1 ? 'text-white rotate-180' : 'text-gray-600 rotate-0'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default VortexPagination;