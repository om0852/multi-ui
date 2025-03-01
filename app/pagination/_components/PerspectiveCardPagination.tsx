'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PerspectiveCardPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-6 perspective-[1000px]">
      {[...Array(totalPages)].map((_, index) => {
        const distance = Math.abs(currentPage - (index + 1));
        return (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`relative w-14 h-14 transition-all duration-500 ease-out
              ${distance === 0 
                ? 'rotate-y-0 translate-z-8 bg-gradient-to-br from-violet-500 to-indigo-600 text-white' 
                : `rotate-y-${distance * 15} translate-z-${-distance * 4} opacity-${100 - distance * 20}`}
              bg-white border border-gray-200 shadow-xl rounded-xl`}
          >
            <span className="relative z-10 text-lg font-semibold">{index + 1}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PerspectiveCardPagination;