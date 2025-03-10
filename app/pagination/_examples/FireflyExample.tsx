'use client';
import React, { useState } from 'react';
import FireflyPagination from '../_components/FireflyPagination';

const FireflyExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const lights = [
    { id: 1, name: "Firefly", brightness: "Bioluminescent" },
    { id: 2, name: "Lantern", brightness: "Warm" },
    { id: 3, name: "Star", brightness: "Distant" },
    { id: 4, name: "Lightning", brightness: "Intense" },
    { id: 5, name: "Moon", brightness: "Reflected" },
    { id: 6, name: "Sunset", brightness: "Diffused" },
    { id: 7, name: "Aurora", brightness: "Dancing" },
    { id: 8, name: "Torch", brightness: "Flickering" },
    { id: 9, name: "Glow worm", brightness: "Gentle" }
  ];

  const totalPages = Math.ceil(lights.length / itemsPerPage);
  const currentItems = lights.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-gray-900 rounded-lg border border-yellow-400/30">
            <h3 className="text-lg font-semibold text-yellow-400">{item.name}</h3>
            <p className="text-yellow-200">{item.brightness}</p>
          </div>
        ))}
      </div>
      <FireflyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default FireflyExample;