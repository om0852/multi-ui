'use client';
import React, { useState } from 'react';
import QuantumJumpPagination from '../_components/QuantumJumpPagination';

const QuantumJumpExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const particles = [
    { id: 1, name: 'Electron', charge: '-1' },
    { id: 2, name: 'Proton', charge: '+1' },
    { id: 3, name: 'Neutron', charge: '0' },
    { id: 4, name: 'Photon', charge: '0' },
    { id: 5, name: 'Quark', charge: '⅔' },
    { id: 6, name: 'Neutrino', charge: '0' },
  ];

  const totalPages = Math.ceil(particles.length / itemsPerPage);
  const currentItems = particles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 space-y-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-violet-50 rounded-lg border border-violet-200">
            <h3 className="text-xl font-semibold text-violet-900">{item.name}</h3>
            <p className="text-violet-600">Charge: {item.charge}</p>
          </div>
        ))}
      </div>

      <QuantumJumpPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default QuantumJumpExample;