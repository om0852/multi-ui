'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const RainbowWavePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 rounded-lg overflow-hidden transition-transform duration-300
            ${currentPage === index + 1 ? 'scale-110' : 'hover:scale-105'}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500
            animate-gradient-x transition-opacity duration-300
            ${currentPage === index + 1 ? 'opacity-100' : 'opacity-0 hover:opacity-50'}`} />
          <span className={`relative z-10 flex items-center justify-center w-full h-full
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-700'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default RainbowWavePagination;