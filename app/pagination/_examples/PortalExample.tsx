'use client';
import React, { useState } from 'react';
import PortalPagination from '../_components/PortalPagination';

const PortalExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const dimensions = [
    { id: 1, name: 'Reality Prime', stability: 'Stable', inhabitants: 'Humans' },
    { id: 2, name: 'Mirror World', stability: 'Unstable', inhabitants: 'Reflections' },
    { id: 3, name: 'Dream Realm', stability: 'Fluctuating', inhabitants: 'Thought Forms' },
    { id: 4, name: 'Void Space', stability: 'Unknown', inhabitants: 'Energy Beings' },
    { id: 5, name: 'Crystal Dimension', stability: 'Stable', inhabitants: 'Light Entities' },
    { id: 6, name: 'Time Spiral', stability: 'Dynamic', inhabitants: 'Chronovores' }
  ];

  const totalPages = Math.ceil(dimensions.length / itemsPerPage);
  const currentItems = dimensions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-emerald-900 to-teal-900 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-300">{item.name}</h3>
            <p className="text-emerald-200">Stability: {item.stability}</p>
            <p className="text-emerald-200">Inhabitants: {item.inhabitants}</p>
          </div>
        ))}
      </div>
      <PortalPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PortalExample;