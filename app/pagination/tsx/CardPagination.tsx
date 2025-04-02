import React from 'react';

interface CardPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CardPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: CardPaginationProps) => {
  return (
    <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-lg">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-orange-100 text-orange-500 rounded-lg hover:bg-orange-200 transition-colors"
      >
        Previous
      </button>
      <div className="flex items-center">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-10 h-10 mx-1 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              currentPage === index + 1
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-orange-50 text-orange-500 hover:bg-orange-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-orange-100 text-orange-500 rounded-lg hover:bg-orange-200 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default CardPagination; 