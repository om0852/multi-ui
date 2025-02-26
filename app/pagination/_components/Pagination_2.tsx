"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="container bg-gray-100 p-4 rounded shadow-md">
      <ul className="pagination flex justify-center items-center space-x-2">
        <PaginationPrevious disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
        <PaginationContent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        <PaginationNext disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
      </ul>
    </div>
  );
};

export const PaginationContent: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const [showEllipsisMenu, setShowEllipsisMenu] = useState(false);
  const [ellipsisPosition, setEllipsisPosition] = useState<"left" | "right" | null>(null);

  const renderPageNumbers = () => {
    const pages: React.ReactNode[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <PaginationItem key={i} active={i === currentPage}>
            <PaginationLink onClick={() => onPageChange(i)}>{i}</PaginationLink>
          </PaginationItem>
        );
      } else if ((i < currentPage - 1 || i > currentPage + 1) && !pages.includes("...")) {
        pages.push(
          <PaginationEllipsis
            key={`ellipsis-${i}`}
            onClick={(position) => {
              setShowEllipsisMenu(true);
              setEllipsisPosition(position);
            }}
            position={i < currentPage ? "left" : "right"}
          />
        );
      }
    }

    return pages;
  };

  const renderEllipsisMenu = () => {
    if (!showEllipsisMenu || !ellipsisPosition) return null;

    const pagesToShow = ellipsisPosition === "left"
      ? Array.from({ length: currentPage - 1 }, (_, i) => i + 1)
      : Array.from({ length: totalPages - currentPage }, (_, i) => currentPage + i + 1);

    return (
      <div className="absolute bg-white border rounded shadow-md p-2 flex space-x-1">
        {pagesToShow.map((page) => (
          <div
            key={page}
            className="cursor-pointer p-1 hover:bg-gray-200"
            onClick={() => {
              setShowEllipsisMenu(false);
              onPageChange(page);
            }}
          >
            {page}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex items-center space-x-2">
      {renderPageNumbers()}
      {renderEllipsisMenu()}
    </div>
  );
};

export const PaginationItem: React.FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active }) => {
  return (
    <motion.li
      className={`pagination-item flex items-center justify-center rounded px-3 py-1 cursor-pointer shadow-md transition-all duration-200 ${
        active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.li>
  );
};

export const PaginationLink: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-full h-full">
      {children}
    </button>
  );
};

export const PaginationEllipsis: React.FC<{ onClick?: (position: "left" | "right") => void; position: "left" | "right" }> = ({ onClick, position }) => {
  return (
    <motion.li
      className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => onClick?.(position)}
    >
      ...
    </motion.li>
  );
};

export const PaginationNext: React.FC<{ disabled?: boolean; onClick?: () => void }> = ({ disabled, onClick }) => {
  return (
    <motion.li
      className={`pagination-next flex items-center justify-center px-3 py-1 rounded cursor-pointer shadow-md transition-all duration-200 ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={onClick}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
    >
      Next
    </motion.li>
  );
};

export const PaginationPrevious: React.FC<{ disabled?: boolean; onClick?: () => void }> = ({ disabled, onClick }) => {
  return (
    <motion.li
      className={`pagination-previous flex items-center justify-center px-3 py-1 rounded cursor-pointer shadow-md transition-all duration-200 ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={onClick}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
    >
      Previous
    </motion.li>
  );
};
