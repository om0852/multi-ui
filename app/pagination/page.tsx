'use client';
import React, { useState } from 'react';
import GlassPagination from './_components/GlassPagination';
import ExpandingPagination from './_components/ExpandingPagination';
import BubblePagination from './_components/BubblePagination';
import FlipPagination from './_components/FlipPagination';
import MagneticPagination from './_components/MagneticPagination';
import GlowPagination from './_components/GlowPagination';
import LiquidPagination from './_components/LiquidPagination';
import RainbowWavePagination from './_components/RainbowWavePagination';
import PerspectivePagination from './_components/PerspectivePagination';
import ElasticPagination from './_components/ElasticPagination';

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen p-8 space-y-16">
      <BubblePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <FlipPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <MagneticPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <GlowPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <LiquidPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <RainbowWavePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <ElasticPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <PerspectivePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Glass Pagination</h2>
        <GlassPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Expanding Pagination</h2>
        <ExpandingPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
