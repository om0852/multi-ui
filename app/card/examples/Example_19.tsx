"use client";

import React from 'react';
import Card19 from '../_components/Card_19';

const Example_19 = () => {
  const featuredCard = {
    title: "Featured Neon Card",
    description: "Experience the ultimate cyberpunk aesthetic with our premium neon card. Perfect for creating a futuristic atmosphere.",
    link: "/card19",
    imageUrl: "https://picsum.photos/seed/180/800/400",
    btnText: "Discover"
  };

  const sideCards = [1, 2].map((item) => ({
    title: `Neon Card ${item}`,
    description: "Our standard neon cards feature the same stunning effects in a compact format.",
    link: "/card19",
    imageUrl: `https://picsum.photos/seed/${item + 181}/500/300`,
    btnText: "Learn More"
  }));

  const bottomCards = [3, 4, 5].map((item) => ({
    title: `Neon Card ${item}`,
    description: "Explore our collection of neon-styled cards with dynamic hover effects.",
    link: "/card19",
    imageUrl: `https://picsum.photos/seed/${item + 181}/500/300`,
    btnText: "View Details"
  }));

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-950">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 text-center">
        Neon Effect Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card19 {...featuredCard} />
          </div>
          <div className="flex flex-col gap-8">
            {sideCards.map((card, index) => (
              <Card19 key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bottomCards.map((card, index) => (
            <Card19 key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_19; 