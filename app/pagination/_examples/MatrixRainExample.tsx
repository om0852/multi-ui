'use client';
import React, { useState } from 'react';
import MatrixRainPagination from '../_components/MatrixRainPagination';

const MatrixRainExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const codeSnippets = [
    { id: 1, language: 'JavaScript', code: 'console.log("Hello Matrix");' },
    { id: 2, language: 'Python', code: 'print("Welcome to the Matrix")' },
    { id: 3, language: 'Java', code: 'System.out.println("Matrix Lives");' },
    { id: 4, language: 'C++', code: 'cout << "Matrix Reloaded";' },
    { id: 5, language: 'Ruby', code: 'puts "Matrix Revolution"' },
    { id: 6, language: 'Go', code: 'fmt.Println("Matrix Code")' },
  ];

  const totalPages = Math.ceil(codeSnippets.length / itemsPerPage);
  const currentItems = codeSnippets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 space-y-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-4 bg-black border border-green-500/30 rounded-lg">
            <div className="text-green-500 font-mono mb-2">{item.language}</div>
            <code className="text-green-400">{item.code}</code>
          </div>
        ))}
      </div>

      <MatrixRainPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MatrixRainExample;