'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MinimalistPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-6 font-light">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="text-gray-400 hover:text-black transition-colors relative group"
      >
        <span className="relative z-10">previous</span>
        <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
      </button>
      <div className="flex items-center gap-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`relative group ${
              currentPage === index + 1 ? 'text-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            <span className="relative z-10">{(index + 1).toString().padStart(2, '0')}</span>
            <span className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300
              ${currentPage === index + 1 ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="text-gray-400 hover:text-black transition-colors relative group"
      >
        <span className="relative z-10">next</span>
        <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
      </button>
    </div>
  );
};

export default MinimalistPagination; 