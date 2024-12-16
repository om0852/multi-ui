"use client"
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./_components/Pagination_3";

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pagination Example</h1>
      <Pagination
        totalPages={20}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        className="my-4"
      />
    </div>
  );
};

export default PaginationExample;
