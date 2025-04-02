'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const GlowPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 rounded-lg transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
              : 'bg-gray-100 hover:bg-gray-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]'}`}
        >
          <span className={`absolute inset-0 rounded-lg bg-blue-400 opacity-0 blur-xl transition-opacity duration-500
            ${currentPage === index + 1 ? 'opacity-50' : ''}`}></span>
          <span className="relative z-10">{index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default GlowPagination;