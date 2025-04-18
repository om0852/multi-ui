"use client";

import React from 'react';
import Card30 from '../_components/Card_30';

const Example_30 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Blog Cards - Variation 10
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "The Future of Web Development",
              description: "Explore the latest trends and technologies shaping the future of web development, from AI-powered tools to WebAssembly.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/297/800/400",
              btnText: "Read Article"
            },
            {
              title: "Mastering Modern Design Patterns",
              description: "Learn about essential design patterns that can help you create more maintainable and scalable applications.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/298/800/400",
              btnText: "Read Article"
            }
          ].map((post, index) => (
            <Card30
              key={index}
              {...post}
            />
          ))}
        </div>

        {/* Latest Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Getting Started with TypeScript",
              description: "A comprehensive guide to TypeScript fundamentals and best practices for beginners.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/299/400/300",
              btnText: "Read More"
            },
            {
              title: "Building Responsive Layouts",
              description: "Learn how to create beautiful, responsive layouts using modern CSS techniques.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/300/400/300",
              btnText: "Read More"
            },
            {
              title: "State Management in React",
              description: "Compare different state management solutions and learn when to use each one.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/301/400/300",
              btnText: "Read More"
            },
            {
              title: "Optimizing Web Performance",
              description: "Essential techniques for improving your website's loading speed and performance.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/302/400/300",
              btnText: "Read More"
            },
            {
              title: "Modern Authentication Patterns",
              description: "Explore different authentication strategies for modern web applications.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/303/400/300",
              btnText: "Read More"
            },
            {
              title: "Testing React Applications",
              description: "Best practices for testing React applications using modern testing libraries.",
              link: "/card30",
              imageUrl: "https://picsum.photos/seed/304/400/300",
              btnText: "Read More"
            }
          ].map((post, index) => (
            <Card30
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_30; 