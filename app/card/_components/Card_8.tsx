"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Define the Card component as a functional React component with TypeScript

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_8: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Container */}
      <div className="relative h-full rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-500 transform group-hover:-translate-y-2">
        <div className="h-full rounded-[6px] bg-black p-4 backdrop-blur-xl">
          {/* Image */}
          <div className="relative h-2/3 overflow-hidden rounded-lg mb-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="h-1/3">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2 line-clamp-1">
              {title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2 mb-3">
              {description}
            </p>
            <Link 
              href={link}
              className="inline-flex items-center text-sm font-semibold text-white hover:text-pink-400 transition-colors"
            >
              {btnText}
              <svg 
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_8;
