'use client'
import React from 'react';
import GlassNavbar from './components/GlassNavbar';
import ExpandingNavbar from './components/ExpandingNavbar';
import FloatingNavbar from './components/FloatingNavbar';
import GlowNavbar from './components/GlowNavbar';
import RotatingNavbar from './components/RotatingNavbar';
import PerspectiveNavbar from './components/PerspectiveNavbar';
import MagneticNavbar from './components/MagneticNavbar';
import SplitNavbar from './components/SplitNavbar';
import LiquidNavbar from './components/LiquidNavbar';
import NeonBorderNavbar from './components/NeonBorderNavbar';
import MorphingNavbar from './components/MorphingNavbar';

import WaveNavbar from './components/WaveNavbar';
import SpotlightNavbar from './components/SpotlightNavbar'; 
import TypewriterNavbar from './components/TypewriterNavbar';
import ShimmerNavbar from './components/ShimmerNavbar';
import FlipCardNavbar from './components/FlipCardNavbar';
import ParticleNavbar from './components/ParticleNavbar';
import GlitchNavbar from './components/GlitchNavbar';
import MagneticPullNavbar from './components/MagneticPullNavbar';
import RadarNavbar from './components/RadarNavbar';

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

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Morphing Background Navbar</h2>
          <MorphingNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Wave Effect Navbar</h2>
          <WaveNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Spotlight Effect Navbar</h2>
          <SpotlightNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Typewriter Effect Navbar</h2>
          <TypewriterNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Shimmer Effect Navbar</h2>
          <ShimmerNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">3D Flip Card Navbar</h2>
          <FlipCardNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Particle Effect Navbar</h2>
          <ParticleNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Glitch Effect Navbar</h2>
          <GlitchNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Magnetic Pull Navbar</h2>
          <MagneticPullNavbar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold px-4">Radar Scan Navbar</h2>
          <RadarNavbar />
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
            <p>• MorphingNavbar: Smooth morphing background transitions</p>
            <p>• WaveNavbar: Animated wave pattern background</p>
            <p>• SpotlightNavbar: Dynamic spotlight hover effect</p>
            <p>• TypewriterNavbar: Terminal-style typewriter animation</p>
            <p>• ShimmerNavbar: Elegant shimmer effect on hover</p>
            <p>• FlipCardNavbar: 3D card flip animation on hover</p>
            <p>• ParticleNavbar: Particle explosion effect on hover</p>
            <p>• GlitchNavbar: Cyberpunk-style glitch animation</p>
            <p>• MagneticPullNavbar: Magnetic pull effect between items</p>
            <p>• RadarNavbar: Radar scanning animation on hover</p>
          </div>
        </div>
      </div>
    </div>
  );
}
