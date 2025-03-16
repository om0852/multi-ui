'use client';
import React, { useState } from 'react';
import OutlinePagination from '../_components/OutlinePagination';

const OutlineExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const shapes = [
    { id: 1, name: 'Square', sides: 4, interior: '90°' },
    { id: 2, name: 'Triangle', sides: 3, interior: '60°' },
    { id: 3, name: 'Pentagon', sides: 5, interior: '108°' },
    { id: 4, name: 'Hexagon', sides: 6, interior: '120°' },
    { id: 5, name: 'Octagon', sides: 8, interior: '135°' },
    { id: 6, name: 'Circle', sides: 'Infinite', interior: '360°' }
  ];

  const totalPages = Math.ceil(shapes.length / itemsPerPage);
  const currentItems = shapes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} 
            className="p-4 bg-white border-2 border-indigo-500 rounded-lg hover:border-indigo-600 transition-colors">
            <h3 className="text-lg font-semibold text-indigo-700">{item.name}</h3>
            <p className="text-indigo-600">Sides: {item.sides}</p>
            <p className="text-indigo-600">Interior Angle: {item.interior}</p>
          </div>
        ))}
      </div>
      <OutlinePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default OutlineExample;