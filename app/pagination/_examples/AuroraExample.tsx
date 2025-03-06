'use client';
import React, { useState } from 'react';
import AuroraPagination from '../_components/AuroraPagination';

const AuroraExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const locations = [
    { id: 1, place: 'Iceland', time: 'Winter' },
    { id: 2, place: 'Norway', time: 'September-March' },
    { id: 3, place: 'Finland', time: 'October-March' },
    { id: 4, place: 'Alaska', time: 'August-April' },
    { id: 5, place: 'Canada', time: 'September-April' },
    { id: 6, place: 'Greenland', time: 'Winter' },
  ];

  const totalPages = Math.ceil(locations.length / itemsPerPage);
  const currentItems = locations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 space-y-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gray-900 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300">{item.place}</h3>
            <p className="text-purple-200">Best Time: {item.time}</p>
          </div>
        ))}
      </div>

      <AuroraPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AuroraExample;