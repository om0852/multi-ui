'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SplitTextPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-12 h-12 overflow-hidden group"
        >
          <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300
            ${currentPage === index + 1 ? '-translate-y-full' : 'translate-y-0'}
            ${currentPage === index + 1 ? 'text-rose-500' : 'text-gray-600'}`}>
            {index + 1}
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300
            ${currentPage === index + 1 ? 'translate-y-0' : 'translate-y-full'}
            text-rose-500`}>
            {index + 1}
          </span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </button>
      ))}
    </div>
  );
};

export default SplitTextPagination;