'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PulseRingPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-12 h-12"
        >
          {currentPage === index + 1 && (
            <span className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-25"></span>
          )}
          <span className={`absolute inset-0 rounded-full transition-all duration-300
            ${currentPage === index + 1 
              ? 'bg-orange-500 text-white scale-110' 
              : 'bg-gray-100 hover:bg-gray-200'} 
            flex items-center justify-center`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PulseRingPagination;