'use client';
import React, { useState } from 'react';
import SwipeEffectPagination from '../_components/SwipeEffectPagination';

const SwipeEffectExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const cards = [
    { id: 1, title: 'Summer Collection', category: 'Fashion', liked: true },
    { id: 2, title: 'Tech Gadgets', category: 'Electronics', liked: false },
    { id: 3, title: 'Home Decor', category: 'Lifestyle', liked: true },
    { id: 4, title: 'Fitness Gear', category: 'Sports', liked: false },
    { id: 5, title: 'Art Supplies', category: 'Creativity', liked: true },
    { id: 6, title: 'Garden Tools', category: 'Outdoor', liked: false },
    { id: 7, title: 'Kitchen Essentials', category: 'Home', liked: true },
    { id: 8, title: 'Travel Gear', category: 'Adventure', liked: false }
  ];

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const currentItems = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.category}</p>
            <div className="mt-2">
              {item.liked ? (
                <span className="text-red-500">❤️</span>
              ) : (
                <span className="text-gray-400">🤍</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <SwipeEffectPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SwipeEffectExample;