'use client';
import React, { useState } from 'react';
import StaggeredPagination from '../_components/StaggeredPagination';

const StaggeredExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const tiles = [
    { id: 1, title: 'Photo 1', category: 'Nature', size: 'Large' },
    { id: 2, title: 'Photo 2', category: 'Urban', size: 'Small' },
    { id: 3, title: 'Photo 3', category: 'Portrait', size: 'Medium' },
    { id: 4, title: 'Photo 4', category: 'Abstract', size: 'Large' },
    { id: 5, title: 'Photo 5', category: 'Wildlife', size: 'Medium' },
    { id: 6, title: 'Photo 6', category: 'Architecture', size: 'Small' },
    { id: 7, title: 'Photo 7', category: 'Landscape', size: 'Large' },
    { id: 8, title: 'Photo 8', category: 'Street', size: 'Medium' }
  ];

  const totalPages = Math.ceil(tiles.length / itemsPerPage);
  const currentItems = tiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-2 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800">{item.title}</h3>
            <p className="text-purple-600">Category: {item.category}</p>
            <p className="text-purple-600">Size: {item.size}</p>
          </div>
        ))}
      </div>
      <StaggeredPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default StaggeredExample;