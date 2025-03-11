'use client';
import React, { useState } from 'react';
import StackPagination from '../_components/StackPagination';

const StackExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const cards = [
    { id: 1, title: 'Task Manager', priority: 'High', status: 'In Progress' },
    { id: 2, title: 'Bug Tracker', priority: 'Medium', status: 'Pending' },
    { id: 3, title: 'User Stories', priority: 'Low', status: 'Completed' },
    { id: 4, title: 'Sprint Planning', priority: 'High', status: 'Scheduled' },
    { id: 5, title: 'Code Review', priority: 'Medium', status: 'In Review' },
    { id: 6, title: 'Deployment', priority: 'High', status: 'Pending' }
  ];

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const currentItems = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">Priority: {item.priority}</p>
            <p className="text-gray-600">Status: {item.status}</p>
          </div>
        ))}
      </div>
      <StackPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default StackExample;