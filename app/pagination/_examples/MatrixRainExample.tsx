'use client';
import React, { useState } from 'react';
import MatrixRainPagination from '../_components/MatrixRainPagination';

const MatrixRainExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const codeSnippets = [
    { id: 1, language: 'Python', code: 'def hack_matrix(): return "access_granted"' },
    { id: 2, language: 'JavaScript', code: 'const matrix = new VirtualReality();' },
    { id: 3, language: 'Ruby', code: 'class Matrix < Reality; end' },
    { id: 4, language: 'Java', code: 'Matrix.disconnect(systemControl);' },
    { id: 5, language: 'C++', code: 'void enterMatrix(Reality* r);' },
    { id: 6, language: 'Rust', code: 'impl Matrix for Reality {}' }
  ];

  const totalPages = Math.ceil(codeSnippets.length / itemsPerPage);
  const currentItems = codeSnippets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="p-6 bg-black rounded-lg border border-green-500/30">
            <h3 className="text-xl font-mono text-green-500">{item.language}</h3>
            <code className="block mt-2 font-mono text-green-400">{item.code}</code>
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