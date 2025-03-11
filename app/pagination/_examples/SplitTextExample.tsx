'use client';
import React, { useState } from 'react';
import SplitTextPagination from '../_components/SplitTextPagination';

const SplitTextExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const quotes = [
    { id: 1, text: "Life is what happens while you're busy making other plans", author: "John Lennon" },
    { id: 2, text: "The future belongs to those who believe in the beauty of their dreams", author: "Eleanor Roosevelt" },
    { id: 3, text: "Be the change you wish to see in the world", author: "Mahatma Gandhi" },
    { id: 4, text: "Everything you can imagine is real", author: "Pablo Picasso" },
    { id: 5, text: "The only way to do great work is to love what you do", author: "Steve Jobs" },
    { id: 6, text: "It does not matter how slowly you go as long as you do not stop", author: "Confucius" }
  ];

  const totalPages = Math.ceil(quotes.length / itemsPerPage);
  const currentItems = quotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-6">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
            <blockquote className="text-xl text-indigo-900 font-serif">"{item.text}"</blockquote>
            <p className="mt-2 text-right text-purple-700">— {item.author}</p>
          </div>
        ))}
      </div>
      <SplitTextPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SplitTextExample;