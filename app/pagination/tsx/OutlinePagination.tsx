'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const OutlinePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="group relative px-4 py-2"
      >
        <span className="relative z-10 text-lime-600 group-hover:text-white transition-colors duration-200">Prev</span>
        <div className="absolute inset-0 border-2 border-lime-500 rounded-lg group-hover:bg-lime-500 transition-colors duration-200"></div>
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className="group relative w-10 h-10"
          >
            <span className={`relative z-10 transition-colors duration-200 
              ${currentPage === index + 1 ? 'text-white' : 'text-lime-600 group-hover:text-white'}`}>
              {index + 1}
            </span>
            <div className={`absolute inset-0 border-2 border-lime-500 rounded-lg transition-colors duration-200
              ${currentPage === index + 1 ? 'bg-lime-500' : 'group-hover:bg-lime-500'}`}></div>
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="group relative px-4 py-2"
      >
        <span className="relative z-10 text-lime-600 group-hover:text-white transition-colors duration-200">Next</span>
        <div className="absolute inset-0 border-2 border-lime-500 rounded-lg group-hover:bg-lime-500 transition-colors duration-200"></div>
      </button>
    </div>
  );
};

export default OutlinePagination; 