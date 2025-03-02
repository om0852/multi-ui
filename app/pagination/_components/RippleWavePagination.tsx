'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const RippleWavePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="group relative w-14 h-14 overflow-hidden rounded-lg"
        >
          <span className={`absolute inset-0 transition-colors duration-300
            ${currentPage === index + 1 ? 'bg-emerald-500' : 'bg-gray-100'}`} />
          <span className="absolute inset-0 flex items-center justify-center z-10 transition-colors duration-300
            group-hover:text-emerald-500">
            {index + 1}
          </span>
          <span className="absolute inset-0 bg-white transform origin-center
            transition-transform duration-500 ease-out scale-0 group-hover:scale-100 rounded-full" />
        </button>
      ))}
    </div>
  );
};

export default RippleWavePagination;