'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PrismPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          <span className={`absolute inset-0 rounded-lg transition-all duration-700
            ${currentPage === index + 1 
              ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-prism-shift' 
              : 'bg-gray-200'}`} />
          <span className={`absolute inset-0 rounded-lg backdrop-blur-sm flex items-center justify-center
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
          <span className={`absolute inset-0 rounded-lg bg-white/30 transition-opacity duration-300
            ${currentPage === index + 1 ? 'opacity-25' : 'opacity-0'}`} />
        </button>
      ))}
    </div>
  );
};

export default PrismPagination;