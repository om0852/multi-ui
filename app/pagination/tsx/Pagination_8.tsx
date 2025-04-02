import * as React from "react";
import { motion } from "framer-motion";

const Pagination_8 = ({
  totalPages = 30,
  currentPage = 1,
  onPageChange,
  visiblePageCount = 5,
  className,
  ...props
}: {
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  visiblePageCount?: number;
  className?: string;
}) => {
  if (totalPages < 1) return null; // No pages to display

  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  const renderPageLinks = () => {
    const pages = [];
    const halfVisible = Math.floor(visiblePageCount / 2);
    const startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={`flex justify-center items-center ${className || ""}`}
      {...props}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="previous"
            isDisabled={currentPage === 1}
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>

        {renderPageLinks()}

        <PaginationItem>
          <PaginationArrow
            direction="next"
            isDisabled={currentPage === totalPages}
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={`flex items-center gap-4 ${className || ""}`}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={`list-none ${className || ""}`} {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({
  isActive,
  children,
  onClick,
  className,
  ...props
}: {
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`${
      isActive
        ? "bg-teal-600 text-white shadow-lg"
        : "bg-white text-teal-600 border border-teal-600 hover:bg-teal-100"
    } px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${className || ""}`}
    {...props}
  >
    {children}
  </motion.div>
);

const PaginationArrow = ({
  direction,
  isDisabled,
  onClick,
}: {
  direction: "previous" | "next";
  isDisabled: boolean;
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={!isDisabled ? { scale: 1.1, rotate: direction === "previous" ? -15 : 15 } : {}}
    whileTap={!isDisabled ? { scale: 0.9 } : {}}
    onClick={onClick}
    disabled={isDisabled}
    className={`${
      isDisabled
        ? "opacity-50 pointer-events-none"
        : "hover:bg-teal-100"
    } bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-full transition-all duration-300 ease-in-out`}
  >
    {direction === "previous" ? "\u2190" : "\u2192"}
  </motion.button>
);

export {
  Pagination_8,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationArrow,
};
