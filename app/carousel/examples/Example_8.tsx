"use client";

import React from 'react';
import Carousel from '../_components/Carousel_8';

const Example_8 = () => {
  const carouselItems = [
    {
      id: 1,
      image: "https://picsum.photos/seed/801/800/500",
      title: "Elastic Motion",
      description: "Experience springy transitions with our elastic carousel effect"
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/802/800/500",
      title: "Bouncy Effects",
      description: "Watch elements bounce smoothly between transitions"
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/803/800/500",
      title: "Dynamic Springs",
      description: "Enjoy natural-feeling animations with spring physics"
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/804/800/500",
      title: "Smooth Interactions",
      description: "Interactive controls with elastic feedback"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Elastic Effect Carousel</h2>
      <Carousel 
        items={carouselItems}
        autoPlay={true}
        interval={4200}
      />
    </div>
  );
};

export default Example_8; 