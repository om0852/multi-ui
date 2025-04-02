'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const FireflyPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          {currentPage === index + 1 && (
            <>
              <span className="absolute inset-0 rounded-lg bg-yellow-400/30 animate-ping" />
              <span className="absolute -inset-2 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 
                blur-lg animate-pulse" />
            </>
          )}
          <span className={`relative z-10 flex items-center justify-center w-full h-full rounded-lg border-2
            ${currentPage === index + 1 
              ? 'border-yellow-400 text-yellow-400' 
              : 'border-gray-700 text-gray-500 group-hover:border-yellow-400/50 group-hover:text-yellow-400/50'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FireflyPagination;