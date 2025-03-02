'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const RipplePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3 p-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="relative overflow-hidden px-4 py-2 bg-cyan-500 text-white rounded-lg group"
      >
        <span className="relative z-10">←</span>
        <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`relative overflow-hidden w-10 h-10 rounded-lg flex items-center justify-center group
              ${currentPage === index + 1 
                ? 'bg-cyan-500 text-white' 
                : 'bg-cyan-100 text-cyan-600'}`}
          >
            <span className="relative z-10">{index + 1}</span>
            <div className={`absolute inset-0 bg-cyan-600 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center
              ${currentPage === index + 1 ? 'scale-100' : ''}`}></div>
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="relative overflow-hidden px-4 py-2 bg-cyan-500 text-white rounded-lg group"
      >
        <span className="relative z-10">→</span>
        <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
      </button>
    </div>
  );
};

export default RipplePagination; 