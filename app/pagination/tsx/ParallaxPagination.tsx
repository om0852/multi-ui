'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ParallaxPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-5">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          <span className={`absolute inset-0 rounded-lg transition-all duration-500 delay-150
            ${currentPage === index + 1 ? 'bg-blue-500 translate-y-0' : 'bg-blue-300 translate-y-2'}`} />
          <span className={`absolute inset-0 rounded-lg transition-all duration-500 delay-100
            ${currentPage === index + 1 ? 'bg-blue-400 translate-y-0' : 'bg-blue-200 translate-y-1'}`} />
          <span className={`absolute inset-0 rounded-lg transition-all duration-500
            ${currentPage === index + 1 ? 'bg-blue-600 translate-y-0' : 'bg-blue-100 translate-y-0'} 
            flex items-center justify-center text-white font-medium`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ParallaxPagination;