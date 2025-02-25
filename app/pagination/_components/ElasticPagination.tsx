'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ElasticPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-12 h-12 rounded-lg transition-all duration-300 transform hover:scale-y-90 hover:scale-x-110
            ${currentPage === index + 1 
              ? 'bg-green-500 text-white scale-y-90 scale-x-110' 
              : 'bg-gray-100 text-gray-700'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ElasticPagination;