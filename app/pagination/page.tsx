'use client';
import React, { useState } from 'react';

import LiquidBubblePagination from './_components/LiquidBubblePagination';
import CrystalPagination from './_components/CrystalPagination';
import MagneticPulsePagination from './_components/MagneticPulsePagination';
import CosmicGlowPagination from './_components/CosmicGlowPagination';
import VortexPagination from './_components/VortexPagination';
import FireflyPagination from './_components/FireflyPagination';
import RippleWavePagination from './_components/RippleWavePagination';
import AuroraPagination from './_components/AuroraPagination';
import NeomorphicPagination from './_components/NeomorphicPagination';
import MatrixRainPagination from './_components/MatrixRainPagination';
import QuantumJumpPagination from './_components/QuantumJumpPagination';
import OrigamiPagination from './_components/OrigamiPagination';
import PlasmaFieldPagination from './_components/PlasmaFieldPagination';
import PrismPagination from './_components/PrismPagination';

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

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Vortex Pagination</h2>
        <VortexPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Firefly Pagination</h2>
        <FireflyPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Ripple Wave Pagination</h2>
        <RippleWavePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Aurora Pagination</h2>
        <AuroraPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Neomorphic Pagination</h2>
        <NeomorphicPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Matrix Rain Pagination</h2>
        <MatrixRainPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Quantum Jump Pagination</h2>
        <QuantumJumpPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Origami Fold Pagination</h2>
        <OrigamiPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Plasma Field Pagination</h2>
        <PlasmaFieldPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Prism Reflection Pagination</h2>
        <PrismPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
     
    </div>
  );
}
