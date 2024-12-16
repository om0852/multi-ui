import * as React from "react";

const Pagination_5 = ({
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
  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  const renderPageLinks = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
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
      className={`relative mx-auto flex w-full justify-center ${className || ""}`}
      {...props}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {renderPageLinks()}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={`flex items-center gap-4 ${className || ""}`} {...props} />
  )
);

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={className || ""} {...props} />
  )
);

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
  <button
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`${
      isActive
        ? "bg-indigo-600 text-white transform scale-105 duration-200"
        : "bg-transparent text-indigo-600 hover:bg-indigo-100"
    } px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:scale-110 ${className || ""}`}
    {...props}
  >
    {children}
  </button>
);

const PaginationPrevious = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <PaginationLink className={className} onClick={onClick}>
    <span>&larr; Previous</span>
  </PaginationLink>
);

const PaginationNext = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <PaginationLink className={className} onClick={onClick}>
    <span>Next &rarr;</span>
  </PaginationLink>
);

export { Pagination_5, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext };
