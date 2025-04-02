'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MagneticPulsePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-6">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="group relative w-14 h-14"
        >
          <span className={`absolute inset-0 rounded-xl transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 scale-100' 
              : 'bg-gray-200 scale-75 group-hover:scale-90'}`}
          />
          <span className={`absolute inset-0 rounded-xl border-2 border-rose-500/50 transition-all duration-500
            ${currentPage === index + 1 ? 'scale-150 animate-ping opacity-0' : 'scale-100 opacity-0 group-hover:opacity-100'}`}
          />
          <span className={`relative z-10 flex items-center justify-center w-full h-full
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MagneticPulsePagination;