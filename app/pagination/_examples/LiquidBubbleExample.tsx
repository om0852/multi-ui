'use client';
import React, { useState } from 'react';
import LiquidBubblePagination from '../_components/LiquidBubblePagination';

const LiquidBubbleExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const oceans = [
    { id: 1, name: 'Pacific', depth: '11,034 m' },
    { id: 2, name: 'Atlantic', depth: '8,486 m' },
    { id: 3, name: 'Indian', depth: '7,906 m' },
    { id: 4, name: 'Southern', depth: '7,235 m' },
    { id: 5, name: 'Arctic', depth: '5,625 m' },
    { id: 6, name: 'Caribbean', depth: '7,686 m' }
  ];

  const totalPages = Math.ceil(oceans.length / itemsPerPage);
  const currentItems = oceans.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">
            <h3 className="text-xl font-semibold text-white">{item.name} Ocean</h3>
            <p className="text-cyan-100">Maximum Depth: {item.depth}</p>
          </div>
        ))}
      </div>
      <LiquidBubblePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default LiquidBubbleExample;