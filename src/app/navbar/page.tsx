'use client'
import React from 'react';
import GlassNavbar from './_components/GlassNavbar';
import ExpandingNavbar from './_components/ExpandingNavbar';
import FloatingNavbar from './_components/FloatingNavbar';
import GlowNavbar from './_components/GlowNavbar';
import RotatingNavbar from './_components/RotatingNavbar';
import PerspectiveNavbar from './_components/PerspectiveNavbar';
import MagneticNavbar from './_components/MagneticNavbar';
import SplitNavbar from './_components/SplitNavbar';
import LiquidNavbar from './_components/LiquidNavbar';
import NeonBorderNavbar from './_components/NeonBorderNavbar';

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Glass Morphism Navbar</h2>
          <GlassNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Expanding Search Navbar</h2>
          <ExpandingNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Floating Indicator Navbar</h2>
          <FloatingNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Glow Effect Navbar</h2>
          <GlowNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Rotating Icons Navbar</h2>
          <RotatingNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">3D Perspective Navbar</h2>
          <PerspectiveNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Magnetic Hover Navbar</h2>
          <MagneticNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Split Text Navbar</h2>
          <SplitNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Liquid Effect Navbar</h2>
          <LiquidNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Neon Border Navbar</h2>
          <NeonBorderNavbar />
        </div>

        {/* Documentation */}
        <div className="mt-12 p-6 bg-white rounded-lg mx-4">
          <h2 className="text-xl font-bold mb-4">Features</h2>
          <div className="space-y-2 text-sm">
            <p>• GlassNavbar: Glass morphism effect with underline animations</p>
            <p>• ExpandingNavbar: Expanding search bar with gradient background</p>
            <p>• FloatingNavbar: Smooth floating background indicator</p>
            <p>• GlowNavbar: Scale and glow effects on hover</p>
            <p>• RotatingNavbar: Rotating icons with sliding text</p>
            <p>• PerspectiveNavbar: 3D perspective hover effect with underline</p>
            <p>• MagneticNavbar: Magnetic hover effect with scaling backgrounds</p>
            <p>• SplitNavbar: Text splitting animation on hover</p>
            <p>• LiquidNavbar: Smooth liquid-like transitions</p>
            <p>• NeonBorderNavbar: Animated neon border effect</p>
          </div>
        </div>
      </div>
    </div>
  );
}
