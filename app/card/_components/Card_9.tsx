"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_9: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Neon Border Effect */}
      <div className="absolute inset-0 rounded-lg bg-black">
        <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        <div className="absolute -inset-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-500" />
      </div>

      {/* Card Content */}
      <div className="relative h-full rounded-lg bg-gray-900 p-4 overflow-hidden">
        {/* Image with Neon Overlay */}
        <div className="relative h-2/3 overflow-hidden rounded-lg mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        </div>

        {/* Text Content */}
        <div className="h-1/3">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-lg sm:text-xl font-bold mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {description}
          </p>
          <Link 
            href={link}
            className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
          >
            {btnText}
            <span className="ml-1 text-lg group-hover:animate-pulse">→</span>
          </Link>
        </div>

        {/* Animated Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default Card_9;
