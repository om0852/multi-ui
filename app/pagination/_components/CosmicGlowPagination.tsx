'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CosmicGlowPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-2xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          <span className={`absolute inset-0 rounded-lg transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-xy' 
              : 'bg-gray-800'}`}
          />
          <span className={`absolute inset-0 rounded-lg bg-black/50 transition-opacity duration-300
            ${currentPage === index + 1 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
          />
          <span className={`relative z-10 flex items-center justify-center w-full h-full text-lg
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-400'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CosmicGlowPagination;