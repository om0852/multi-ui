'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const FlipPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="group perspective"
        >
          <div className={`relative w-12 h-12 transition-all duration-500 transform-style-3d
            ${currentPage === index + 1 ? 'rotate-y-180' : ''}`}>
            <div className="absolute inset-0 bg-emerald-500 text-white rounded-lg flex items-center justify-center backface-hidden">
              {index + 1}
            </div>
            <div className="absolute inset-0 bg-white border-2 border-emerald-500 text-emerald-500 rounded-lg flex items-center justify-center rotate-y-180 backface-hidden">
              {index + 1}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FlipPagination;