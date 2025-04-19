"use client";

import React from 'react';
import Card18 from '../tsx/Card_18';

const Example_18 = () => {
  const standardCards = [1, 2, 3, 4].map((item) => ({
    title: `Gradient Card ${item}`,
    description: "Experience the floating animation with our beautifully designed gradient cards.",
    link: "/card18",
    imageUrl: `https://picsum.photos/seed/${item + 170}/500/300`,
    btnText: "Explore"
  }));

  const featureGroups = [5, 6].map((groupId) => (
    [0, 1].map((subItem) => ({
      title: `Feature Card ${groupId - 4 + subItem}`,
      description: "Our featured gradient cards showcase enhanced floating effects and smooth transitions.",
      link: "/card18",
      imageUrl: `https://picsum.photos/seed/${groupId + subItem + 170}/500/300`,
      btnText: "View More"
    }))
  ));

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Floating Gradient Cards - Variation 2
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {standardCards.map((card, index) => (
            <Card18 key={index} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col sm:flex-row gap-6">
              {group.map((card, cardIndex) => (
                <Card18 key={`${groupIndex}-${cardIndex}`} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_18; 