'use client';
import React, { useState } from 'react';
import PlasmaFieldPagination from '../_components/PlasmaFieldPagination';

const PlasmaFieldExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Sample data
  const items = [
    { id: 1, title: "Item 1", description: "Description for item 1" },
    { id: 2, title: "Item 2", description: "Description for item 2" },
    { id: 3, title: "Item 3", description: "Description for item 3" },
    { id: 4, title: "Item 4", description: "Description for item 4" },
    { id: 5, title: "Item 5", description: "Description for item 5" },
    { id: 6, title: "Item 6", description: "Description for item 6" },
    { id: 7, title: "Item 7", description: "Description for item 7" },
    { id: 8, title: "Item 8", description: "Description for item 8" },
    { id: 9, title: "Item 9", description: "Description for item 9" },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Items List */}
      <div className="mb-8 space-y-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <PlasmaFieldPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PlasmaFieldExample;