'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SwipeEffectPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-12 h-12 overflow-hidden rounded-lg"
        >
          <div className={`absolute inset-0 bg-purple-500 transition-transform duration-300 ease-out
            ${currentPage === index + 1 ? 'translate-x-0' : '-translate-x-full'}`} />
          <div className={`absolute inset-0 bg-gray-100 transition-transform duration-300 ease-out
            ${currentPage === index + 1 ? 'translate-x-full' : 'translate-x-0'}`} />
          <span className={`relative z-10 flex items-center justify-center w-full h-full
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SwipeEffectPagination;