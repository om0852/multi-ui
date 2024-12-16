"use client"
import React, { useState } from "react";
import {
  Pagination_6,
} from "./_components/Pagination_6";

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pagination Example</h1>
      <Pagination_6
        totalPages={20} // Total pages to be paginated
        currentPage={currentPage} // Current page to highlight
        onPageChange={handlePageChange} // Function to handle page changes
        visiblePageCount={5} // Number of pages to display at a time
        className="my-pagination" // Optional custom class for styling
      />
    </div>
  );
};

export default PaginationExample;
