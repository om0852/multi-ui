"use client";

import React, { useState } from 'react';
import Timeline1 from './_components/Timeline_21';
import Timeline2 from './_components/Timeline_22';
import Timeline3 from './_components/Timeline_23';
import Timeline4 from './_components/Timeline_24';
import Timeline5 from './_components/Timeline_25';
import Timeline6 from './_components/Timeline_26';
import Timeline7 from './_components/Timeline_27';
import Timeline8 from './_components/Timeline_28';
import Timeline9 from './_components/Timeline_29';
import Timeline10 from './_components/Timeline_30';
import Timeline11 from './_components/Timeline_31';
import Timeline12 from './_components/Timeline_32';
import Timeline13 from './_components/Timeline_33';
import Timeline14 from './_components/Timeline_34';
import Timeline15 from './_components/Timeline_35';
import Timeline16 from './_components/Timeline_36';
import Timeline17 from './_components/Timeline_37';
import Timeline18 from './_components/Timeline_38';

const sampleData = [
  {
    title: "Company Founded",
    description: "Our journey began with a simple idea and a passionate team.",
    date: "January 2020",
    category: "Milestone",
    tags: ["Startup", "Innovation"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    link: "#"
  },
  {
    title: "First Major Client",
    description: "Secured our first enterprise client, marking a significant milestone in our growth.",
    date: "March 2020",
    category: "Success",
    tags: ["Enterprise", "Growth"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Product Launch",
    description: "Successfully launched our flagship product after months of development and testing.",
    date: "June 2020",
    category: "Product",
    tags: ["Launch", "Technology"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: "#"
  },
  {
    title: "International Expansion",
    description: "Expanded operations to three new countries, establishing global presence.",
    date: "September 2020",
    category: "Growth",
    tags: ["Global", "Expansion"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Series A Funding",
    description: "Raised $10M in Series A funding to accelerate growth and product development.",
    date: "December 2020",
    category: "Finance",
    tags: ["Funding", "Investment"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "#"
  }
];

export default function TimelinePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [layout, setLayout] = useState<'left' | 'right' | 'alternate'>('alternate');
  const [selectedVariant, setSelectedVariant] = useState<number>(1);

  const variants = [
    { name: "Basic Style", component: Timeline1, hasLayout: true },
    { name: "Modern Card", component: Timeline2, hasLayout: true },
    { name: "Neon Glow", component: Timeline3, hasLayout: true },
    { name: "Liquid Flow", component: Timeline4, hasLayout: false },
    { name: "Cosmic Particles", component: Timeline5, hasLayout: false },
    { name: "Crystal Prism", component: Timeline6, hasLayout: false },
    { name: "Digital Circuit", component: Timeline7, hasLayout: false },
    { name: "Retro Gaming", component: Timeline8, hasLayout: false },
    { name: "Steampunk", component: Timeline9, hasLayout: false },
    { name: "Neon Cyberpunk", component: Timeline10, hasLayout: false },
    { name: "Holographic", component: Timeline11, hasLayout: false },
    { name: "Cosmic", component: Timeline12, hasLayout: false },
    { name: "Futuristic HUD", component: Timeline13, hasLayout: false },
    { name: "Quantum Circuit", component: Timeline14, hasLayout: false },
    { name: "Paper Art", component: Timeline15, hasLayout: false },
    { name: "Botanical Garden", component: Timeline16, hasLayout: false },
    { name: "Geometric Art", component: Timeline17, hasLayout: false },
    { name: "Stained Glass", component: Timeline18, hasLayout: false }
  ];

  const SelectedTimeline = variants[selectedVariant - 1].component;
  const hasLayoutOption = variants[selectedVariant - 1].hasLayout;

  // Get the timeline props based on variant capabilities
  const getTimelineProps = () => {
    const commonProps = {
      data: sampleData,
      theme,
      animated: true
    };

    if (hasLayoutOption) {
      return {
        ...commonProps,
        layout
      };
    }

    return commonProps;
  };

  const getVariantDescription = (variantName: string) => {
    const descriptions: Record<string, string> = {
      "Basic Style": "A clean and professional timeline with smooth animations and flexible layout options. Perfect for portfolios and project histories.",
      "Modern Card": "Elevated card-based design with shadows and hover effects. Great for showcasing detailed content with a contemporary feel.",
      "Neon Glow": "Vibrant neon effects with glowing animations and dynamic color transitions. Perfect for tech-focused or nightlife-themed timelines.",
      "Liquid Flow": "Fluid animations and morphing shapes create an organic, flowing experience. Ideal for creative or artistic timelines.",
      "Cosmic Particles": "Space-inspired design with floating particles and stellar animations. Great for science or space-related content.",
      "Crystal Prism": "Prismatic effects with light refraction and crystalline animations. Perfect for luxury or premium content presentation.",
      "Digital Circuit": "Tech-inspired design with circuit patterns and data flow animations. Ideal for technology or engineering timelines.",
      "Retro Gaming": "8-bit inspired design with pixelated elements and game-like interactions. Perfect for gaming or nostalgic content.",
      "Steampunk": "Victorian-era industrial aesthetic with mechanical animations and brass accents. Great for alternative history or industrial themes.",
      "Neon Cyberpunk": "Futuristic cyberpunk style with neon accents and high-tech visual effects. Ideal for sci-fi or tech-focused content.",
      "Holographic": "Futuristic holographic effects with iridescent colors and 3D-like animations. Perfect for cutting-edge or innovative content.",
      "Cosmic": "Space-themed design with nebula effects and celestial animations. Great for astronomical or scientific content.",
      "Futuristic HUD": "Heads-up display inspired design with scanning effects and tech overlays. Ideal for data-driven or analytical content.",
      "Quantum Circuit": "Quantum computing inspired design with wave function animations and circuit patterns. Perfect for scientific or research timelines.",
      "Paper Art": "Origami-inspired design with folding animations and paper textures. Great for artistic or creative content.",
      "Botanical Garden": "Nature-inspired design with growing vines and blooming flowers. Perfect for environmental or organic themes.",
      "Geometric Art": "Abstract geometric patterns with mathematical animations. Ideal for design or architectural content.",
      "Stained Glass": "Cathedral-inspired design with translucent panels and light effects. Perfect for artistic or historical timelines."
    };
    return descriptions[variantName] || "Select a timeline variant to see its description.";
  };

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 min-h-screen' : 'bg-gray-50 min-h-screen'}>
      {/* Controls */}
      <div className="max-w-6xl mx-auto pt-8 px-4">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Timeline Examples
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Variant Selector */}
          <select
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(Number(e.target.value))}
            className={`px-4 py-2 rounded-lg font-medium ${
              theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            {variants.map((variant, index) => (
              <option key={index + 1} value={index + 1}>
                Timeline {index + 1}: {variant.name}
              </option>
            ))}
          </select>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`px-4 py-2 rounded-lg font-medium ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            } transition-colors`}
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>

          {/* Layout Selector (only for variants that support it) */}
          {hasLayoutOption && (
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value as 'left' | 'right' | 'alternate')}
              className={`px-4 py-2 rounded-lg font-medium ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              <option value="left">Left Layout</option>
              <option value="right">Right Layout</option>
              <option value="alternate">Alternate Layout</option>
            </select>
          )}
        </div>

        {/* Description */}
        <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {getVariantDescription(variants[selectedVariant - 1].name)}
        </p>
      </div>

      {/* Timeline Component */}
      <SelectedTimeline {...getTimelineProps()} />
    </div>
  );
}
