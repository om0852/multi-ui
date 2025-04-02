'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const OrigamiPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 [transform-style:preserve-3d] transition-transform duration-500"
          style={{
            transform: currentPage === index + 1 ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front face */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-lg 
              border-2 border-teal-500 text-teal-500 bg-white [backface-visibility:hidden]"
          >
            {index + 1}
          </div>
          
          {/* Back face */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-lg 
              bg-teal-500 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            {index + 1}
          </div>
        </button>
      ))}
    </div>
  );
};

export default OrigamiPagination;