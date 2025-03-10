'use client';
import React, { useState } from 'react';
import RippleWavePagination from '../_components/RippleWavePagination';

const RippleWaveExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const waves = [
    { id: 1, type: "Longitudinal", medium: "Air" },
    { id: 2, type: "Transverse", medium: "Water" },
    { id: 3, type: "Surface", medium: "Ocean" },
    { id: 4, type: "Electromagnetic", medium: "Space" },
    { id: 5, type: "Sound", medium: "Solid" },
    { id: 6, type: "Seismic", medium: "Earth" }
  ];

  const totalPages = Math.ceil(waves.length / itemsPerPage);
  const currentItems = waves.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-emerald-50 rounded-lg border-2 border-emerald-200">
            <h3 className="text-xl font-semibold text-emerald-900">{item.type} Wave</h3>
            <p className="text-emerald-700">Medium: {item.medium}</p>
          </div>
        ))}
      </div>
      <RippleWavePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RippleWaveExample;