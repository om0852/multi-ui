'use client';
import React, { useState } from 'react';
import CrystalPagination from '../_components/CrystalPagination';

const CrystalExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const crystals = [
    { id: 1, name: 'Quartz', color: 'Clear' },
    { id: 2, name: 'Amethyst', color: 'Purple' },
    { id: 3, name: 'Rose Quartz', color: 'Pink' },
    { id: 4, name: 'Citrine', color: 'Yellow' },
    { id: 5, name: 'Jade', color: 'Green' },
    { id: 6, name: 'Sapphire', color: 'Blue' },
    { id: 7, name: 'Ruby', color: 'Red' },
    { id: 8, name: 'Diamond', color: 'Clear' },
    { id: 9, name: 'Emerald', color: 'Green' }
  ];

  const totalPages = Math.ceil(crystals.length / itemsPerPage);
  const currentItems = crystals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="text-white/80">{item.color}</p>
          </div>
        ))}
      </div>
      <CrystalPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CrystalExample;