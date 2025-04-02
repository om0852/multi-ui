'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const LiquidBubblePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="group relative w-14 h-14"
        >
          <span className={`absolute inset-0 rounded-full transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-gradient-to-br from-teal-300 to-cyan-500 scale-100' 
              : 'bg-gray-200 scale-90 group-hover:scale-95'}`}
          />
          <span className={`absolute inset-0 flex items-center justify-center
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
          <span className={`absolute inset-0 rounded-full bg-teal-400/30 transition-all duration-500
            ${currentPage === index + 1 ? 'scale-150 animate-pulse opacity-50' : 'scale-0 opacity-0'}`}
          />
        </button>
      ))}
    </div>
  );
};

export default LiquidBubblePagination;