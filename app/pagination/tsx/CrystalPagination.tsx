'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CrystalPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-14 h-14 rounded-lg overflow-hidden backdrop-blur-sm
            ${currentPage === index + 1 ? 'ring-2 ring-white/50' : ''}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 transition-opacity duration-500
            ${currentPage === index + 1 ? 'opacity-100' : 'opacity-0'}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
            animate-[shimmer_2s_linear_infinite]" />
          <span className={`relative z-10 flex items-center justify-center w-full h-full text-lg
            ${currentPage === index + 1 ? 'text-white' : 'text-white/70'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CrystalPagination;