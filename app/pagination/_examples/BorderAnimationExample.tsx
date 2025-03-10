'use client';
import React, { useState } from 'react';
import BorderAnimationPagination from '../_components/BorderAnimationPagination';

const BorderAnimationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const borders = [
    { id: 1, style: "Solid", width: "2px" },
    { id: 2, style: "Dashed", width: "3px" },
    { id: 3, style: "Dotted", width: "1px" },
    { id: 4, style: "Double", width: "4px" },
    { id: 5, style: "Groove", width: "3px" },
    { id: 6, style: "Ridge", width: "3px" },
    { id: 7, style: "Inset", width: "2px" },
    { id: 8, style: "Outset", width: "2px" },
    { id: 9, style: "Hidden", width: "0px" }
  ];

  const totalPages = Math.ceil(borders.length / itemsPerPage);
  const currentItems = borders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} 
            className="p-4 bg-white rounded-lg border-2 border-teal-500"
            style={{ borderStyle: item.style.toLowerCase() }}
          >
            <h3 className="text-lg font-semibold text-teal-700">{item.style}</h3>
            <p className="text-teal-600">Width: {item.width}</p>
          </div>
        ))}
      </div>
      
      <BorderAnimationPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BorderAnimationExample;