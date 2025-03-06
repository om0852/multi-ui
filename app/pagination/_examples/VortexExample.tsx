'use client';
import React, { useState } from 'react';
import VortexPagination from '../_components/VortexPagination';

const VortexExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const galaxies = [
    { id: 1, name: 'Milky Way', type: 'Spiral Galaxy' },
    { id: 2, name: 'Andromeda', type: 'Spiral Galaxy' },
    { id: 3, name: 'Triangulum', type: 'Spiral Galaxy' },
    { id: 4, name: 'Whirlpool', type: 'Spiral Galaxy' },
    { id: 5, name: 'Sombrero', type: 'Spiral Galaxy' },
    { id: 6, name: 'Pinwheel', type: 'Spiral Galaxy' },
    { id: 7, name: 'Black Eye', type: 'Spiral Galaxy' },
    { id: 8, name: 'Cartwheel', type: 'Lenticular Galaxy' },
    { id: 9, name: 'Cigar', type: 'Irregular Galaxy' }
  ];

  const totalPages = Math.ceil(galaxies.length / itemsPerPage);
  const currentItems = galaxies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg">
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            <p className="text-blue-200">{item.type}</p>
          </div>
        ))}
      </div>
      <VortexPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default VortexExample;