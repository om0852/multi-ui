'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ShimmerPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 rounded-lg overflow-hidden
            ${currentPage === index + 1 ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          {currentPage === index + 1 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
              animate-[shimmer_1.5s_infinite] -skew-x-12" />
          )}
          <span className="relative z-10">{index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default ShimmerPagination;