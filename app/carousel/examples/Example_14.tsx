"use client";

import React from 'react';
import Carousel from '../tsx/Carousel_14';

const Example_14 = () => {
  const carouselItems = [
    {
      id: 1,
      image: "https://picsum.photos/seed/1401/800/500",
      title: "Smooth Fading",
      description: "Experience smooth fade transitions",
      size: "large" as const
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/1402/800/500",
      title: "Elegant Blend",
      description: "Watch content blend seamlessly",
      size: "medium" as const
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/1403/800/500",
      title: "Soft Transition",
      description: "Enjoy soft transitioning effects",
      size: "medium" as const
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/1404/800/500",
      title: "Gentle Flow",
      description: "Gentle content flow animations",
      size: "large" as const
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/1405/800/500",
      title: "Dynamic Blend",
      description: "Dynamic content transitions",
      size: "medium" as const
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/1406/800/500",
      title: "Smooth Motion",
      description: "Smooth motion effects",
      size: "small" as const
    },
    {
      id: 7,
      image: "https://picsum.photos/seed/1407/800/500",
      title: "Fluid Animation",
      description: "Fluid animation transitions",
      size: "medium" as const
    },
    {
      id: 8,
      image: "https://picsum.photos/seed/1408/800/500",
      title: "Seamless Flow",
      description: "Seamless content flow",
      size: "small" as const
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Grid Layout Carousel</h2>
      <Carousel 
        items={carouselItems}
        autoPlay={true}
        interval={4300}
        columns={4}
      />
    </div>
  );
};

export default Example_14; 