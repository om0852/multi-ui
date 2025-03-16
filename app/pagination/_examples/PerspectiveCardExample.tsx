'use client';
import React, { useState } from 'react';
import PerspectiveCardPagination from '../_components/PerspectiveCardPagination';

const PerspectiveCardExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const cards = [
    { id: 1, title: 'Magic Card', type: 'Spell', power: '★★★★☆' },
    { id: 2, title: 'Dragon Card', type: 'Creature', power: '★★★★★' },
    { id: 3, title: 'Shield Card', type: 'Defense', power: '★★★☆☆' },
    { id: 4, title: 'Potion Card', type: 'Item', power: '★★☆☆☆' },
    { id: 5, title: 'Sword Card', type: 'Weapon', power: '★★★★☆' },
    { id: 6, title: 'Portal Card', type: 'Special', power: '★★★★★' }
  ];

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const currentItems = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow-lg transform hover:rotate-3 transition-transform">
            <h3 className="text-lg font-semibold text-amber-900">{item.title}</h3>
            <p className="text-amber-800">Type: {item.type}</p>
            <p className="text-amber-600">{item.power}</p>
          </div>
        ))}
      </div>
      <PerspectiveCardPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PerspectiveCardExample;