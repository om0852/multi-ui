'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const FloatingCardPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-14 h-14 transition-all duration-500 ease-in-out
            ${currentPage === index + 1 
              ? '-translate-y-4 bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-400/50' 
              : 'bg-white shadow-md hover:-translate-y-2'} 
            rounded-2xl text-lg font-semibold ${currentPage === index + 1 ? 'text-white' : 'text-gray-700'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default FloatingCardPagination;