'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const HolographicPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 rounded-lg overflow-hidden
            ${currentPage === index + 1 ? 'ring-2 ring-cyan-400 ring-opacity-50' : ''}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20
            transition-all duration-500 backdrop-blur-sm
            ${currentPage === index + 1 ? 'opacity-100' : 'opacity-0'}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
            animate-[shimmer_2s_linear_infinite] -skew-x-12" />
          <span className={`relative z-10 flex items-center justify-center w-full h-full text-lg font-medium
            ${currentPage === index + 1 ? 'text-cyan-400' : 'text-gray-400'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default HolographicPagination;