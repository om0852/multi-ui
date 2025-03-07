'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const NeomorphicPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-8 bg-gray-100 rounded-2xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative w-14 h-14 rounded-xl transition-all duration-300
            ${currentPage === index + 1 
              ? 'bg-gray-100 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]' 
              : 'bg-gray-100 shadow-[-3px_-3px_6px_rgba(255,255,255,0.7),3px_3px_6px_rgba(0,0,0,0.2)]'}`}
        >
          <span className={`text-lg ${currentPage === index + 1 ? 'text-blue-500' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default NeomorphicPagination;