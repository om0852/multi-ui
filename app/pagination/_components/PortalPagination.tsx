'use client';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PortalPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className="group relative w-12 h-12"
        >
          <span className={`absolute inset-0 rounded-full transition-all duration-700
            ${currentPage === index + 1 
              ? 'animate-[portal_2s_ease-in-out_infinite] bg-gradient-to-r from-green-400 to-emerald-600' 
              : 'bg-gray-200'}`} />
          <span className={`absolute inset-0 flex items-center justify-center
            ${currentPage === index + 1 ? 'text-white' : 'text-gray-600'}`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PortalPagination;