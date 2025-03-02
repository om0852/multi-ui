"use client"

import React from 'react';
import MinimalFileInput from './_components/FileInput_26';
import GlassFileInput from './_components/FileInput_27';
import GridFileInput from './_components/FileInput_28';
import NeonFileInput from './_components/FileInput_29';
import MaterialFileInput from './_components/FileInput_30';
import BrutalistFileInput from './_components/FileInput_31';
import FuturisticFileInput from './_components/FileInput_32';
import MinimalistDarkFileInput from './_components/FileInput_34';
import FloatingFileInput from './_components/FileInput_35';
import GradientFileInput from './_components/FileInput_36';
import BorderedFileInput from './_components/FileInput_37';
import AnimatedFileInput from './_components/FileInput_38';
import RetroFileInput from './_components/FileInput_39';
import TerminalFileInput from './_components/FileInput_40';

export default function FileInputPage() {
  const handleFiles = (files: FileList | null) => {
    if (files) {
      console.log('Selected files:', Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">File Input Components</h1>
          <p className="text-xl text-gray-600">
            A collection of beautiful and functional file input components
          </p>
        </div>

        {/* Minimal Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Minimal Style</h2>
          <p className="text-gray-600 mb-6">
            A clean and simple design focused on usability.
          </p>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <MinimalFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Glass Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Glass Style</h2>
          <p className="text-gray-600 mb-6">
            A modern glassmorphic design with blur effects.
          </p>
          <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <GlassFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Grid Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Grid Style</h2>
          <p className="text-gray-600 mb-6">
            A responsive grid layout with file previews.
          </p>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <GridFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Neon Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Neon Style</h2>
          <p className="text-gray-600 mb-6">
            A vibrant design with neon glow effects.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <NeonFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Material Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Material Style</h2>
          <p className="text-gray-600 mb-6">
            Following Material Design principles with elevation and transitions.
          </p>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <MaterialFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Brutalist Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Brutalist Style</h2>
          <p className="text-gray-600 mb-6">
            A bold and raw design inspired by brutalist architecture and web design principles.
          </p>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <BrutalistFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Futuristic Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Futuristic Style</h2>
          <p className="text-gray-600 mb-6">
            A sci-fi inspired design with holographic effects and advanced animations.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <FuturisticFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Minimalist Dark Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Minimalist Dark Style</h2>
          <p className="text-gray-600 mb-6">
            A sleek and modern dark-themed file input with subtle animations and clean design.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <MinimalistDarkFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Floating Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Floating Style</h2>
          <p className="text-gray-600 mb-6">
            A modern floating design with glassmorphic effects and smooth transitions.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <FloatingFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Gradient Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Gradient Style</h2>
          <p className="text-gray-600 mb-6">
            A vibrant gradient-themed file input with dynamic color transitions and modern aesthetics.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <GradientFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Bordered Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Bordered Style</h2>
          <p className="text-gray-600 mb-6">
            An elegant design with multiple border layers and smooth hover effects.
          </p>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <BorderedFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Animated Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Animated Style</h2>
          <p className="text-gray-600 mb-6">
            A highly interactive design with advanced animations and mouse-follow effects.
          </p>
          <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
            <AnimatedFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Retro Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Retro Style</h2>
          <p className="text-gray-600 mb-6">
            A nostalgic design inspired by retro computer interfaces with scanlines and glowing effects.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <RetroFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Terminal Style */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Terminal Style</h2>
          <p className="text-gray-600 mb-6">
            A command-line interface inspired design with a modern terminal aesthetic.
          </p>
          <div className="p-8 bg-gray-900 rounded-lg">
            <TerminalFileInput
              onFilesSelected={handleFiles}
              maxFiles={3}
              accept="image/*,video/*"
              allowMultiple={true}
            />
          </div>
        </section>

        {/* Documentation */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Features & Documentation</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Drag and drop file upload support</li>
            <li>Multiple file selection</li>
            <li>File type validation</li>
            <li>Progress indicators</li>
            <li>Minimalist Dark theme with subtle animations and clean design</li>
            <li>Floating style with glassmorphic effects and 3D transforms</li>
            <li>Dynamic gradient animations with smooth color transitions</li>
            <li>Elegant bordered design with multiple layers</li>
            <li>Advanced animations with mouse-follow effects</li>
            <li>Brutalist style with bold geometry and raw aesthetics</li>
            <li>Futuristic style with holographic effects and sci-fi elements</li>
            <li>Retro style with nostalgic computer interface elements</li>
            <li>Terminal style with command-line interface aesthetics</li>
            <li>Responsive design</li>
            <li>Accessible keyboard navigation</li>
            <li>Custom styling and theming</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
