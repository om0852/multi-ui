"use client";
import React, { useState } from "react";
import GlassPagination from './_components/GlassPagination';
import ExpandingPagination from './_components/ExpandingPagination';
import NeonPagination from './_components/NeonPagination';
import WavePagination from './_components/WavePagination';


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the state
    console.log("Page changed to:", page); // For debugging
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-16 p-24">
     
     

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Glass Pagination</h2>
        <GlassPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Expanding Pagination</h2>
        <ExpandingPagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

     
    </div>
  );
};

export default App;
