import React from 'react';

interface CircularPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CircularPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: CircularPaginationProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
      >
        ←
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-10 h-10 rounded-full ${
            currentPage === index + 1
              ? 'bg-purple-500 text-white scale-110'
              : 'bg-purple-100 text-purple-500 hover:bg-purple-200'
          } flex items-center justify-center transform hover:scale-110 transition-all duration-200`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
      >
        →
      </button>
    </div>
  );
};

export default CircularPagination; 