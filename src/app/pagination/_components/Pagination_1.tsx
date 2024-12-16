"use client";
import React from "react";
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
    <nav className="flex items-center justify-center space-x-2 mt-4">
      <PaginationPrevious disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
      <PaginationContent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <PaginationNext disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
    </nav>
  );
};

export const PaginationContent: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages: React.ReactNode[] = [];
    let hasEllipsis = false;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <PaginationItem key={i} active={i === currentPage}>
            <PaginationLink onClick={() => onPageChange(i)}>{i}</PaginationLink>
          </PaginationItem>
        );
        hasEllipsis = false;
      } else if ((i === currentPage - 2 || i === currentPage + 2) && !hasEllipsis) {
        pages.push(<PaginationEllipsis key={`ellipsis-${i}`} />);
        hasEllipsis = true;
      }
    }

    return pages;
  };

  return <div className="flex items-center space-x-1">{renderPageNumbers()}</div>;
};

export const PaginationItem: React.FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active }) => {
  return (
    <motion.div
      className={`w-8 h-8 flex items-center justify-center rounded-md ${
        active ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export const PaginationLink: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-full h-full flex items-center justify-center">
      {children}
    </button>
  );
};

export const PaginationEllipsis: React.FC = () => {
  return (
    <motion.div
      className="w-8 h-8 flex items-center justify-center text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      ...
    </motion.div>
  );
};

export const PaginationNext: React.FC<{ disabled?: boolean; onClick?: () => void }> = ({ disabled, onClick }) => {
  return (
    <motion.button
      className={`w-8 h-8 flex items-center justify-center rounded-md ${
        disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      onClick={onClick}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      disabled={disabled}
    >
      →
    </motion.button>
  );
};

export const PaginationPrevious: React.FC<{ disabled?: boolean; onClick?: () => void }> = ({ disabled, onClick }) => {
  return (
    <motion.button
      className={`w-8 h-8 flex items-center justify-center rounded-md ${
        disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      onClick={onClick}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      disabled={disabled}
    >
      ←
    </motion.button>
  );
};
