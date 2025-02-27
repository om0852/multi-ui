'use client';
import React, { useState } from 'react';
import PulseRingPagination from './_components/PulseRingPagination';
import MorphingPagination from './_components/MorphingPagination';
import StaggeredPagination from './_components/StaggeredPagination';
import OrbitPagination from './_components/OrbitPagination';
import SplitTextPagination from './_components/SplitTextPagination';
import FloatingCardPagination from './_components/FloatingCardPagination';
import SwipeEffectPagination from './_components/SwipeEffectPagination';
import ShimmerPagination from './_components/ShimmerPagination';
import StackPagination from './_components/StackPagination';
import FloatingPagination from './_components/FloatingPagination';
import StackedPagination from './_components/StackedPagination';

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen p-8 space-y-16">
            <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Pulse Ring Pagination</h2>
        <PulseRingPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Morphing Pagination</h2>
        <MorphingPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Staggered Motion Pagination</h2>
        <StaggeredPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Orbit Pagination</h2>
        <OrbitPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Split Text Pagination</h2>
        <SplitTextPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Floating Card Pagination</h2>
        <FloatingCardPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Swipe Effect Pagination</h2>
        <SwipeEffectPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Shimmer Pagination</h2>
        <ShimmerPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">3D Stack Pagination</h2>
        <StackPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">3D Stack Pagination</h2>
        <StackedPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">3D Stack Pagination</h2>
        <FloatingPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
     
    </div>
  );
}
