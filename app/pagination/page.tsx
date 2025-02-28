'use client';
import React, { useState } from 'react';
import HolographicPagination from './_components/HolographicPagination';
import PerspectiveCardPagination from './_components/PerspectiveCardPagination';
import PortalPagination from './_components/PortalPagination';
import ParallaxPagination from './_components/ParallaxPagination';



export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen p-8 space-y-16">
              <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Holographic Pagination</h2>
        <HolographicPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Perspective Card Pagination</h2>
        <PerspectiveCardPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>


      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Portal Pagination</h2>
        <PortalPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Parallax Depth Pagination</h2>
        <ParallaxPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
     
    </div>
  );
}
