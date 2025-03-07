'use client';
import React, { useState } from 'react';
import OrigamiPagination from '../_components/OrigamiPagination';

const OrigamiExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const origamiTypes = [
    { id: 1, name: 'Crane', difficulty: 'Medium' },
    { id: 2, name: 'Butterfly', difficulty: 'Easy' },
    { id: 3, name: 'Dragon', difficulty: 'Hard' },
    { id: 4, name: 'Lotus', difficulty: 'Medium' },
    { id: 5, name: 'Star', difficulty: 'Easy' },
    { id: 6, name: 'Phoenix', difficulty: 'Expert' },
  ];

  const totalPages = Math.ceil(origamiTypes.length / itemsPerPage);
  const currentItems = origamiTypes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 space-y-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-teal-50 rounded-lg border-2 border-teal-200">
            <h3 className="text-xl font-semibold text-teal-900">{item.name}</h3>
            <p className="text-teal-600">Difficulty: {item.difficulty}</p>
          </div>
        ))}
      </div>

      <OrigamiPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default OrigamiExample;