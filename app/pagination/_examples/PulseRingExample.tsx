'use client';
import React, { useState } from 'react';
import PulseRingPagination from '../_components/PulseRingPagination';

const PulseRingExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const signals = [
    { id: 1, type: 'Radio Wave', frequency: '100 MHz', strength: 'High' },
    { id: 2, type: 'Microwave', frequency: '2.4 GHz', strength: 'Medium' },
    { id: 3, type: 'Infrared', frequency: '300 GHz', strength: 'Low' },
    { id: 4, type: 'UV Light', frequency: '750 THz', strength: 'High' },
    { id: 5, type: 'X-Ray', frequency: '30 PHz', strength: 'Very High' },
    { id: 6, type: 'Gamma Ray', frequency: '30 EHz', strength: 'Extreme' }
  ];

  const totalPages = Math.ceil(signals.length / itemsPerPage);
  const currentItems = signals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-rose-900 to-pink-900 rounded-lg">
            <h3 className="text-xl font-semibold text-rose-100">{item.type}</h3>
            <p className="text-rose-200">Frequency: {item.frequency}</p>
            <p className="text-rose-200">Signal Strength: {item.strength}</p>
          </div>
        ))}
      </div>
      <PulseRingPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PulseRingExample;