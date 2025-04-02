'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MorphingPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-2xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 transition-all duration-500
            ${currentPage === index + 1 ? 'rounded-lg' : 'rounded-full'}`}
        >
          <span className={`absolute inset-0 transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-gradient-to-br from-fuchsia-500 to-purple-600 scale-100 rounded-lg' 
              : 'bg-white scale-90 rounded-full'}
            flex items-center justify-center ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MorphingPagination;