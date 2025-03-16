'use client';
import React, { useState } from 'react';
import PerspectivePagination from '../_components/PerspectivePagination';

const PerspectiveExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const scenes = [
    { id: 1, title: 'Mountain Vista', depth: 'Far', elements: 'Peaks, Clouds' },
    { id: 2, title: 'City Street', depth: 'Medium', elements: 'Buildings, Cars' },
    { id: 3, title: 'Forest Path', depth: 'Varied', elements: 'Trees, Shadows' },
    { id: 4, title: 'Ocean View', depth: 'Infinite', elements: 'Waves, Horizon' },
    { id: 5, title: 'Desert Dunes', depth: 'Dynamic', elements: 'Sand, Sky' },
    { id: 6, title: 'Canyon Edge', depth: 'Deep', elements: 'Rocks, River' }
  ];

  const totalPages = Math.ceil(scenes.length / itemsPerPage);
  const currentItems = scenes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-slate-200">{item.title}</h3>
            <p className="text-slate-300">Depth: {item.depth}</p>
            <p className="text-slate-300">Elements: {item.elements}</p>
          </div>
        ))}
      </div>
      <PerspectivePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PerspectiveExample;