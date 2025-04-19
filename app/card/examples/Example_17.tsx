"use client";

import React from 'react';
import Card17 from '../tsx/Card_17';

const Example_17 = () => {
  const standardCards = [1, 2, 3].map((item) => ({
    title: `Glass Card ${item}`,
    description: "Experience the stunning glass morphism effect with our beautifully designed cards.",
    link: "/card17",
    imageUrl: `https://picsum.photos/seed/${item + 160}/500/300`,
    btnText: "Learn More"
  }));

  const featuredCards = [
    {
      title: "Featured Glass Card 1",
      description: "Our premium glass cards feature an enhanced blur effect and smooth animations for a truly immersive experience.",
      link: "/card17",
      imageUrl: "https://picsum.photos/seed/164/800/400",
      btnText: "Discover"
    },
    {
      title: "Featured Glass Card 2",
      description: "Explore the beauty of glass morphism with our specially curated featured cards.",
      link: "/card17",
      imageUrl: "https://picsum.photos/seed/165/800/400",
      btnText: "View Details"
    }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Glass Morphism Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {standardCards.map((card, index) => (
            <Card17 key={index} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredCards.map((card, index) => (
            <Card17 key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_17; 