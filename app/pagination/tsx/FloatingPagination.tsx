'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const FloatingPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="hover:-translate-x-1 transition-transform duration-200"
      >
        <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-sm hover:shadow transition-all">
          ←
        </div>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="group relative"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
            ${currentPage === index + 1
              ? 'bg-rose-500 text-white shadow-md hover:shadow-lg -translate-y-1'
              : 'bg-rose-100 text-rose-600 hover:-translate-y-1 hover:shadow'}`}
          >
            {index + 1}
          </div>
          {currentPage === index + 1 && (
            <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-rose-500 rounded-full transform -translate-x-1/2"></span>
          )}
        </button>
      ))}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="hover:translate-x-1 transition-transform duration-200"
      >
        <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-sm hover:shadow transition-all">
          →
        </div>
      </button>
    </div>
  );
};

export default FloatingPagination; 