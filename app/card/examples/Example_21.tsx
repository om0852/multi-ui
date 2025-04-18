"use client";

import React from 'react';
import Card21 from '../_components/Card_21';

const Example_21 = () => {
  const featuredArticles = [
    {
      title: "The Future of Web Development",
      description: "Explore the latest trends and technologies shaping modern web development. From WebAssembly to Edge Computing.",
      link: "/blog/future-web-dev",
      imageUrl: "https://picsum.photos/seed/201/800/600",
      btnText: "Read Article"
    },
    {
      title: "Mastering React Patterns",
      description: "Deep dive into advanced React patterns and best practices for building scalable applications.",
      link: "/blog/react-patterns",
      imageUrl: "https://picsum.photos/seed/202/800/600",
      btnText: "Learn More"
    }
  ];

  const regularArticles = [
    {
      title: "TypeScript Best Practices",
      description: "Essential TypeScript patterns and practices for modern development workflows.",
      link: "/blog/typescript-tips",
      imageUrl: "https://picsum.photos/seed/203/800/600",
      btnText: "Explore"
    },
    {
      title: "CSS Grid Mastery",
      description: "Master CSS Grid layout with practical examples and real-world use cases.",
      link: "/blog/css-grid",
      imageUrl: "https://picsum.photos/seed/204/800/600",
      btnText: "View Guide"
    },
    {
      title: "State Management",
      description: "Compare different state management solutions and learn when to use each one.",
      link: "/blog/state-management",
      imageUrl: "https://picsum.photos/seed/205/800/600",
      btnText: "Read More"
    },
    {
      title: "Performance Optimization",
      description: "Techniques and strategies for optimizing web application performance.",
      link: "/blog/performance",
      imageUrl: "https://picsum.photos/seed/206/800/600",
      btnText: "Discover"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 to-orange-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Featured Articles
        </h2>
        <p className="text-orange-200 text-center mb-8 max-w-2xl mx-auto">
          Explore our latest articles and tutorials on web development, design patterns, and best practices.
        </p>

        {/* Featured Articles - 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {featuredArticles.map((article, index) => (
            <div key={index} className="h-full">
              <Card21 {...article} />
            </div>
          ))}
        </div>

        {/* Regular Articles - Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularArticles.map((article, index) => (
            <div key={index} className="h-full">
              <Card21 {...article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_21; 