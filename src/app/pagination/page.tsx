"use client";
import React, { useState } from "react";
import FancyPagination from "./_components/Pagination_10";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the state
    console.log("Page changed to:", page); // For debugging
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pagination Example</h1>
      <FancyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        visibleCount={7}
        onPageChange={handlePageChange}
        className="my-custom-pagination"
      />
      <p className="mt-4 text-lg">Currently Viewing Page: {currentPage}</p>
    </div>
  );
};

export default App;
