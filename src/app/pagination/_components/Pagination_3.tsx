import * as React from "react";
import { motion } from "framer-motion";

const Pagination = ({
  className,
  totalPages = 30,
  currentPage = 1,
  onPageChange,
  ...props
}: {
  className?: string;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
} & React.ComponentProps<"nav">) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupPages, setPopupPages] = React.useState<number[]>([]);
  const [popupPosition, setPopupPosition] = React.useState<number>(0); // Track the position of the ellipsis

  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
    setShowPopup(false); // Close the popup when a page is selected
  };
  const handleAnimationStart = (event: React.AnimationEvent<HTMLUListElement>) => {
    // Your logic here
  };
  

  const handleEllipsisClick = (leftPage: number, rightPage: number) => {
    // Show the next 5 pages between leftPage and rightPage
    const pagesToShow: number[] = [];
    let startPage = leftPage ;
    let endPage = rightPage - 1;

    // Show 5 pages or less based on the available pages
    for (let i = startPage; i <= endPage && i < totalPages; i++) {
      if (pagesToShow.length < 5) pagesToShow.push(i);
    }

    setPopupPages(pagesToShow);
    setShowPopup(true);
    setPopupPosition(leftPage); // Track where the ellipsis was clicked
  };

  const renderPageLinks = () => {
    const pages = [];
    let ellipsisLeftRendered = false; // Track if the left ellipsis has been rendered
    let ellipsisRightRendered = false; // Track if the right ellipsis has been rendered

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        Math.abs(i - currentPage) === 1
      ) {
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
      } else if (i === currentPage - 2 && !ellipsisLeftRendered) {
        // Render left ellipsis if it's not already rendered
        pages.push(
          <PaginationItem key={`ellipsis-left`}>
            <PaginationEllipsis
              onClick={() => handleEllipsisClick(i - 1, currentPage + 5)} // Send the left and right page numbers
            />
          </PaginationItem>
        );
        ellipsisLeftRendered = true; // Mark the left ellipsis as rendered
      } else if (i === currentPage + 2 && !ellipsisRightRendered) {
        // Render right ellipsis if it's not already rendered
        pages.push(
          <PaginationItem key={`ellipsis-right`}>
            <PaginationEllipsis
              onClick={() => handleEllipsisClick(i - 3, i + 2)} // Send the left and right page numbers
            />
          </PaginationItem>
        );
        ellipsisRightRendered = true; // Mark the right ellipsis as rendered
      }
    }
    return pages;
  };

  const renderPopup = () => {
    if (!showPopup || popupPages.length === 0) return null;
    return (
      <div
        className="absolute w-[auto] top-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2 rounded-md bg-white p-2 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {popupPages.map((page) => (
          <div
            key={page}
            onClick={() => handlePageChange(page)}
            className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
          >
            {page}
          </div>
        ))}
      </div>
    );
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

        {renderPopup()}

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
Pagination.displayName = "Pagination";
const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>( 
    ({ className, ...props }, ref) => (
      <motion.ul
        ref={ref}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex flex-row items-center gap-1 ${className || ""}`}
      />
    )
  );
  PaginationContent.displayName = "PaginationContent";
  
const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>( 
  ({ className, ...props }, ref) => (
    <motion.li
      ref={ref}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${className || ""}`}
    />
  )
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  size?: "default" | "small";
} & React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "default",
  ...props
}: PaginationLinkProps) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-current={isActive ? "page" : undefined}
    className={`${
      isActive ? "border border-gray-300 bg-gray-100" : "bg-transparent"
    } ${size === "default" ? "px-4 py-2 text-sm" : "px-2 py-1 text-xs"} rounded-md flex items-center justify-center transition-all hover:bg-gray-200 ${className || ""}`}
    
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={`gap-1 pl-2.5 ${className || ""}`}
    {...props}
  >
    <span className="h-4 w-4">&#8592;</span>
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={`gap-1 pr-2.5 ${className || ""}`}
    {...props}
  >
    <span>Next</span>
    <span className="h-4 w-4">&#8594;</span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<"span"> & { onClick?: () => void }) => (
  <motion.span
    aria-hidden
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    className={`flex h-9 w-9 cursor-pointer items-center justify-center hover:bg-gray-200 rounded-md ${className || ""}`}
  >
    <span className="text-lg">...</span>
    <span className="sr-only">More pages</span>
  </motion.span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
