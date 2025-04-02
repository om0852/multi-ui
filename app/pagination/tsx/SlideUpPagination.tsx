import React from 'react';

interface SlideUpPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SlideUpPagination: React.FC<SlideUpPaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`relative overflow-hidden w-10 h-10 bg-gray-100 rounded
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600 hover:text-gray-800'}`}
        >
          <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300
            ${currentPage === index + 1 ? 'translate-y-0 bg-indigo-600' : 'translate-y-full bg-indigo-600'}`}>
            {index + 1}
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300
            ${currentPage === index + 1 ? '-translate-y-full' : 'translate-y-0'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SlideUpPagination;