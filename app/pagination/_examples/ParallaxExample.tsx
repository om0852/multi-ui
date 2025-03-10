'use client';
import React, { useState } from 'react';
import ParallaxPagination from '../_components/ParallaxPagination';

const ParallaxExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const layers = [
    { id: 1, layer: "Background", depth: "Farthest" },
    { id: 2, layer: "Mountains", depth: "Far" },
    { id: 3, layer: "Trees", depth: "Middle" },
    { id: 4, layer: "Buildings", depth: "Near" },
    { id: 5, layer: "Characters", depth: "Close" },
    { id: 6, layer: "UI Elements", depth: "Closest" }
  ];

  const totalPages = Math.ceil(layers.length / itemsPerPage);
  const currentItems = layers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900">{item.layer}</h3>
            <p className="text-blue-700">Depth: {item.depth}</p>
          </div>
        ))}
      </div>
      <ParallaxPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ParallaxExample;