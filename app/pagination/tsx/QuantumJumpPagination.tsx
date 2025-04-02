'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const QuantumJumpPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          <span className={`absolute inset-0 rounded-lg transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-violet-600 scale-0 animate-[quantum_0.5s_forwards]' 
              : 'bg-gray-200 scale-100'}`} />
          <span className={`absolute inset-0 rounded-lg flex items-center justify-center
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
          <span className={`absolute inset-0 rounded-lg bg-violet-500/30 scale-[2] transition-opacity duration-300
            ${currentPage === index + 1 ? 'opacity-100' : 'opacity-0'}`} />
        </button>
      ))}
    </div>
  );
};

export default QuantumJumpPagination;