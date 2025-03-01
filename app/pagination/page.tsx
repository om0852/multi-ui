'use client';
import React, { useState } from 'react';

import LiquidBubblePagination from './_components/LiquidBubblePagination';
import CrystalPagination from './_components/CrystalPagination';
import MagneticPulsePagination from './_components/MagneticPulsePagination';
import CosmicGlowPagination from './_components/CosmicGlowPagination';



export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen p-8 space-y-16">
             
             <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Liquid Bubble Pagination</h2>
        <LiquidBubblePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Crystal Pagination</h2>
        <CrystalPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Magnetic Pulse Pagination</h2>
        <MagneticPulsePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      
     
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Cosmic Glow Pagination</h2>
        <CosmicGlowPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
     
    </div>
  );
}
