'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const GlassPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-50"></div>
      <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          className="px-4 py-2 text-white/80 hover:text-white transition-colors"
        >
          Previous
        </button>
        <div className="flex items-center">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg mx-1 transition-all duration-300
                ${currentPage === index + 1
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/70 hover:bg-white/10'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          className="px-4 py-2 text-white/80 hover:text-white transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GlassPagination; 