'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const OrbitPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-12 h-12 group"
        >
          <span className={`absolute inset-0 rounded-full transition-all duration-500
            ${currentPage === index + 1 ? 'bg-blue-500 scale-75' : 'bg-gray-200 scale-100'}`} />
          <span className={`absolute inset-0 rounded-full transition-all duration-500
            border-2 border-blue-500 group-hover:rotate-180
            ${currentPage === index + 1 ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`} />
          <span className={`absolute inset-0 flex items-center justify-center
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default OrbitPagination;