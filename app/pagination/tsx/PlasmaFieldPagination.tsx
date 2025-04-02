'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PlasmaFieldPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="relative w-14 h-14 group"
        >
          <span className={`absolute inset-0 rounded-lg transition-all duration-500
            ${currentPage === index + 1 
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-plasma' 
              : 'bg-gray-800'}`} />
          <span className={`absolute inset-0 rounded-lg flex items-center justify-center
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-500'}`}>
            {index + 1}
          </span>
          {currentPage === index + 1 && (
            <span className="absolute -inset-2 rounded-lg bg-purple-500/20 animate-pulse blur-xl" />
          )}
        </button>
      ))}
    </div>
  );
};

export default PlasmaFieldPagination;