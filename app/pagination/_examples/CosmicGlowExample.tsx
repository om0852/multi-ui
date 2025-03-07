'use client';
import React, { useState } from 'react';
import CosmicGlowPagination from '../_components/CosmicGlowPagination';

const CosmicGlowExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const celestialEvents = [
    { id: 1, event: 'Supernova', description: 'Stellar explosion' },
    { id: 2, event: 'Black Hole Merger', description: 'Gravitational waves' },
    { id: 3, event: 'Gamma Ray Burst', description: 'High-energy emission' },
    { id: 4, event: 'Pulsar', description: 'Rotating neutron star' },
    { id: 5, event: 'Solar Flare', description: 'Solar radiation burst' },
    { id: 6, event: 'Nova', description: 'White dwarf eruption' }
  ];

  const totalPages = Math.ceil(celestialEvents.length / itemsPerPage);
  const currentItems = celestialEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gray-900 border border-violet-500/30 rounded-lg">
            <h3 className="text-xl font-semibold text-violet-300">{item.event}</h3>
            <p className="text-violet-200">{item.description}</p>
          </div>
        ))}
      </div>
      <CosmicGlowPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CosmicGlowExample;