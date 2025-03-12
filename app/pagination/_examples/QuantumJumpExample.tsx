'use client';
import React, { useState } from 'react';
import QuantumJumpPagination from '../_components/QuantumJumpPagination';

const QuantumJumpExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const particles = [
    { id: 1, name: 'Electron', spin: '1/2', charge: '-1' },
    { id: 2, name: 'Proton', spin: '1/2', charge: '+1' },
    { id: 3, name: 'Neutron', spin: '1/2', charge: '0' },
    { id: 4, name: 'Photon', spin: '1', charge: '0' },
    { id: 5, name: 'Quark', spin: '1/2', charge: '2/3' },
    { id: 6, name: 'Neutrino', spin: '1/2', charge: '0' }
  ];

  const totalPages = Math.ceil(particles.length / itemsPerPage);
  const currentItems = particles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-violet-900 to-purple-900 rounded-lg">
            <h3 className="text-xl font-semibold text-violet-200">{item.name}</h3>
            <div className="mt-2 space-y-1">
              <p className="text-violet-300">Spin: {item.spin}</p>
              <p className="text-violet-300">Charge: {item.charge}</p>
            </div>
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