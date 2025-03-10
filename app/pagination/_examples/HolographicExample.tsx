'use client';
import React, { useState } from 'react';
import HolographicPagination from '../_components/HolographicPagination';

const HolographicExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const holograms = [
    { id: 1, title: "Neural Interface", status: "Active" },
    { id: 2, title: "Quantum Display", status: "Standby" },
    { id: 3, title: "Bio Scanner", status: "Processing" },
    { id: 4, title: "Data Matrix", status: "Online" },
    { id: 5, title: "Virtual Hub", status: "Active" },
    { id: 6, title: "Cyber Link", status: "Offline" }
  ];

  const totalPages = Math.ceil(holograms.length / itemsPerPage);
  const currentItems = holograms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
            <p className="text-cyan-300">{item.status}</p>
          </div>
        ))}
      </div>
      <HolographicPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HolographicExample;