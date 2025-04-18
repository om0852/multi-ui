"use client";

import React from 'react';
import Card23 from '../_components/Card_23';

const Example_23 = () => {
  const mainStory = {
    title: "The Evolution of Modern Design",
    description: "An in-depth look at how design principles have evolved in the digital age and what it means for the future of web development.",
    link: "/articles/modern-design",
    imageUrl: "https://picsum.photos/seed/230/1200/600",
    btnText: "Read Feature"
  };

  const sideStories = [
    {
      title: "AI in Web Development",
      description: "How artificial intelligence is transforming the way we build and maintain websites.",
      link: "/articles/ai-development",
      imageUrl: "https://picsum.photos/seed/231/800/600",
      btnText: "Discover"
    },
    {
      title: "Future of CSS",
      description: "Exploring upcoming CSS features that will revolutionize web styling.",
      link: "/articles/css-future",
      imageUrl: "https://picsum.photos/seed/232/800/600",
      btnText: "Learn More"
    }
  ];

  const latestStories = [
    {
      title: "Design Systems at Scale",
      description: "Building and maintaining design systems for enterprise applications.",
      link: "/articles/design-systems",
      imageUrl: "https://picsum.photos/seed/233/800/600",
      btnText: "Read Article"
    },
    {
      title: "Performance Optimization",
      description: "Advanced techniques for optimizing web application performance.",
      link: "/articles/performance",
      imageUrl: "https://picsum.photos/seed/234/800/600",
      btnText: "View Guide"
    },
    {
      title: "Accessibility First",
      description: "Why accessibility should be a priority in modern web development.",
      link: "/articles/accessibility",
      imageUrl: "https://picsum.photos/seed/235/800/600",
      btnText: "Explore"
    },
    {
      title: "Mobile UX Patterns",
      description: "Essential mobile UX patterns for creating engaging experiences.",
      link: "/articles/mobile-ux",
      imageUrl: "https://picsum.photos/seed/236/800/600",
      btnText: "Read More"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-rose-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Featured Stories
        </h2>
        <p className="text-rose-200 text-center mb-8 max-w-2xl mx-auto">
          Discover the latest insights, trends, and innovations in web development and design.
        </p>

        {/* Main Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-8">
          {/* Featured Story - 4 columns on large screens */}
          <div className="lg:col-span-4">
            <Card23 {...mainStory} />
          </div>
          
          {/* Side Stories - 2 columns stack */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {sideStories.map((story, index) => (
              <div key={index} className="h-full">
                <Card23 {...story} />
              </div>
            ))}
          </div>
        </div>

        {/* Latest Stories - 4 Column Grid */}
        <h3 className="text-xl sm:text-2xl font-bold text-rose-100 mb-6">
          Latest Stories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestStories.map((story, index) => (
            <div key={index} className="h-full">
              <Card23 {...story} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_23; 