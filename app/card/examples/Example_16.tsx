"use client";

import React from 'react';
import Card16 from '../_components/Card_16';

const Example_16 = () => {
  const featuredCards = [
    {
      title: "Featured Card 1",
      description: "Experience the stunning glow effect with our premium featured cards. Perfect for highlighting special content.",
      link: "/card16",
      imageUrl: "https://picsum.photos/seed/150/800/400",
      btnText: "Learn More"
    },
    {
      title: "Featured Card 2",
      description: "Discover the magic of our glowing border cards with seamless animations and elegant design.",
      link: "/card16",
      imageUrl: "https://picsum.photos/seed/151/800/400",
      btnText: "Explore"
    }
  ];

  const standardCards = [1, 2, 3].map((item) => ({
    title: `Standard Card ${item}`,
    description: "Our standard cards feature the same beautiful glow effect in a compact format.",
    link: "/card16",
    imageUrl: `https://picsum.photos/seed/${item + 152}/500/300`,
    btnText: "View Details"
  }));

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-violet-950 to-purple-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Glowing Border Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featuredCards.map((card, index) => (
            <Card16 key={index} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {standardCards.map((card, index) => (
            <Card16 key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_16; 