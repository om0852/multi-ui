'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const AuroraPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14"
        >
          <span className={`absolute inset-0 rounded-lg transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 animate-gradient-xy opacity-100' 
              : 'bg-gray-800 opacity-50'}`} />
          <span className={`absolute inset-0 rounded-lg backdrop-blur-sm transition-opacity duration-500
            ${currentPage === index + 1 ? 'opacity-30' : 'opacity-0'}`} />
          <span className="relative z-10 flex items-center justify-center w-full h-full text-white">
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default AuroraPagination;