'use client';
import React, { useState } from 'react';
import OrbitPagination from '../_components/OrbitPagination';

const OrbitExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const planets = [
    { id: 1, name: 'Mercury', distance: '57.9M km', orbit: '88 days' },
    { id: 2, name: 'Venus', distance: '108.2M km', orbit: '225 days' },
    { id: 3, name: 'Earth', distance: '149.6M km', orbit: '365 days' },
    { id: 4, name: 'Mars', distance: '227.9M km', orbit: '687 days' },
    { id: 5, name: 'Jupiter', distance: '778.5M km', orbit: '12 years' },
    { id: 6, name: 'Saturn', distance: '1.4B km', orbit: '29 years' }
  ];

  const totalPages = Math.ceil(planets.length / itemsPerPage);
  const currentItems = planets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} 
            className="p-6 bg-gradient-to-r from-slate-900 to-blue-900 rounded-lg border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-200">{item.name}</h3>
            <p className="text-blue-300">Distance from Sun: {item.distance}</p>
            <p className="text-blue-300">Orbital Period: {item.orbit}</p>
          </div>
        ))}
      </div>
      <OrbitPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default OrbitExample;