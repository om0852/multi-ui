'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PerspectivePagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 perspective-[1000px]">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`group w-12 h-12 transition-all duration-500
            ${Math.abs(currentPage - (index + 1)) <= 1 
              ? 'rotate-y-0 scale-100' 
              : 'rotate-y-60 scale-90 opacity-50'}`}
        >
          <div className="w-full h-full rounded-lg bg-violet-500 text-white
            flex items-center justify-center transform transition-transform duration-300
            group-hover:scale-110">
            {index + 1}
          </div>
        </button>
      ))}
    </div>
  );
};

export default PerspectivePagination;