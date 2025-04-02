'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MatrixRainPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-black rounded-xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          {currentPage === index + 1 && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 animate-matrix-rain opacity-50" />
            </div>
          )}
          <span className={`relative z-10 flex items-center justify-center w-full h-full rounded-lg border-2
            ${currentPage === index + 1 
              ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
              : 'border-green-900 text-green-700 hover:border-green-500/50 hover:text-green-500/50'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MatrixRainPagination;