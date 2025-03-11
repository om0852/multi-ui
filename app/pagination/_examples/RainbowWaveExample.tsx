'use client';
import React, { useState } from 'react';
import RainbowWavePagination from '../_components/RainbowWavePagination';

const RainbowWaveExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const colors = [
    { id: 1, name: 'Red', hex: '#FF0000', meaning: 'Energy' },
    { id: 2, name: 'Orange', hex: '#FFA500', meaning: 'Creativity' },
    { id: 3, name: 'Yellow', hex: '#FFFF00', meaning: 'Joy' },
    { id: 4, name: 'Green', hex: '#00FF00', meaning: 'Growth' },
    { id: 5, name: 'Blue', hex: '#0000FF', meaning: 'Serenity' },
    { id: 6, name: 'Purple', hex: '#800080', meaning: 'Royalty' }
  ];

  const totalPages = Math.ceil(colors.length / itemsPerPage);
  const currentItems = colors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div 
            key={item.id} 
            className="p-4 rounded-lg"
            style={{ backgroundColor: item.hex }}
          >
            <div className="bg-white/90 p-3 rounded">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">{item.hex}</p>
              <p className="text-sm">{item.meaning}</p>
            </div>
          </div>
        ))}
      </div>
      <RainbowWavePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RainbowWaveExample;