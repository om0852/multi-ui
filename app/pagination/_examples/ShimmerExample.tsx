'use client';
import React, { useState } from 'react';
import ShimmerPagination from '../_components/ShimmerPagination';

const ShimmerExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const gems = [
    { id: 1, name: 'Diamond', color: 'Clear', sparkle: 'High' },
    { id: 2, name: 'Ruby', color: 'Red', sparkle: 'Medium' },
    { id: 3, name: 'Sapphire', color: 'Blue', sparkle: 'High' },
    { id: 4, name: 'Emerald', color: 'Green', sparkle: 'Medium' },
    { id: 5, name: 'Amethyst', color: 'Purple', sparkle: 'Low' },
    { id: 6, name: 'Topaz', color: 'Yellow', sparkle: 'Medium' }
  ];

  const totalPages = Math.ceil(gems.length / itemsPerPage);
  const currentItems = gems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600">Color: {item.color}</p>
            <p className="text-gray-600">Sparkle: {item.sparkle}</p>
          </div>
        ))}
      </div>
      <ShimmerPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShimmerExample;