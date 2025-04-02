'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const BubblePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-12 h-12 rounded-full transition-all duration-500 ease-out
            ${currentPage === index + 1 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white scale-110 shadow-lg shadow-purple-300' 
              : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          <span className="absolute inset-0 rounded-full bg-white opacity-30 scale-0 animate-ping-slow group-hover:scale-100"></span>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default BubblePagination;