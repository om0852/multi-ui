'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const StaggeredPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-12 h-12 rounded-lg transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-teal-500 text-white translate-y-0' 
              : 'bg-gray-100 hover:bg-gray-200'}
            ${Math.abs(currentPage - (index + 1)) === 1 ? 'translate-y-2' : 'translate-y-0'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default StaggeredPagination;