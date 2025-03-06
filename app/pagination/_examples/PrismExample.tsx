'use client';
import React, { useState } from 'react';
import PrismPagination from '../_components/PrismPagination';

const PrismExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const colors = [
    { id: 1, name: 'Red', hex: '#FF0000' },
    { id: 2, name: 'Orange', hex: '#FFA500' },
    { id: 3, name: 'Yellow', hex: '#FFFF00' },
    { id: 4, name: 'Green', hex: '#00FF00' },
    { id: 5, name: 'Blue', hex: '#0000FF' },
    { id: 6, name: 'Purple', hex: '#800080' },
  ];

  const totalPages = Math.ceil(colors.length / itemsPerPage);
  const currentItems = colors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div 
            key={item.id} 
            className="p-4 rounded-lg text-center"
            style={{ backgroundColor: item.hex }}
          >
            <div className="bg-white/90 rounded p-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm">{item.hex}</p>
            </div>
          </div>
        ))}
      </div>

      <PrismPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PrismExample;