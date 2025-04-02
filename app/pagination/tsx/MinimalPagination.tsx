import React from 'react';

interface MinimalPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MinimalPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: MinimalPaginationProps) => {
  return (
    <div className="flex items-center gap-4 font-mono">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="text-gray-500 hover:text-black transition-colors"
      >
        prev
      </button>
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          {currentPage.toString().padStart(2, '0')}
        </span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-gray-500">
          {totalPages.toString().padStart(2, '0')}
        </span>
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="text-gray-500 hover:text-black transition-colors"
      >
        next
      </button>
    </div>
  );
};

export default MinimalPagination; 