'use client';
import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MagneticPagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-8">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative"
        >
          <div className={`w-10 h-10 flex items-center justify-center transition-all duration-300
            ${currentPage === index + 1 ? 'text-blue-600' : 'text-gray-600'}
            ${hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1 ? 'transform translate-x-2' : ''}
          `}>
            {index + 1}
          </div>
        </button>
      ))}
    </div>
  );
};

export default MagneticPagination;