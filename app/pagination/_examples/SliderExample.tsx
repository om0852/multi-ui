'use client';
import React, { useState } from 'react';
import SliderPagination from '../_components/SliderPagination';

const SliderExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const audioTracks = [
    { id: 1, title: 'Summer Breeze', duration: '3:45', genre: 'Pop' },
    { id: 2, title: 'Night Drive', duration: '4:20', genre: 'Electronic' },
    { id: 3, title: 'Mountain High', duration: '3:15', genre: 'Rock' },
    { id: 4, title: 'Ocean Waves', duration: '5:30', genre: 'Ambient' },
    { id: 5, title: 'City Lights', duration: '4:10', genre: 'Jazz' },
    { id: 6, title: 'Desert Wind', duration: '6:05', genre: 'World' }
  ];

  const totalPages = Math.ceil(audioTracks.length / itemsPerPage);
  const currentItems = audioTracks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <div className="flex justify-between mt-2">
              <span className="text-gray-300">{item.duration}</span>
              <span className="text-gray-300">{item.genre}</span>
            </div>
          </div>
        ))}
      </div>
      <SliderPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SliderExample;