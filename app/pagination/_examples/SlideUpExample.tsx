'use client';
import React, { useState } from 'react';
import SlideUpPagination from '../_components/SlideUpPagination';

const SlideUpExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const notifications = [
    { id: 1, title: 'New Message', time: '2 min ago', type: 'message' },
    { id: 2, title: 'System Update', time: '15 min ago', type: 'system' },
    { id: 3, title: 'Battery Low', time: '1 hour ago', type: 'warning' },
    { id: 4, title: 'Download Complete', time: '2 hours ago', type: 'success' },
    { id: 5, title: 'New Friend Request', time: '3 hours ago', type: 'social' },
    { id: 6, title: 'Cloud Sync Complete', time: '4 hours ago', type: 'system' }
  ];

  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const currentItems = notifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">{item.time}</span>
              <span className="text-sm text-blue-600">{item.type}</span>
            </div>
          </div>
        ))}
      </div>
      <SlideUpPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SlideUpExample;