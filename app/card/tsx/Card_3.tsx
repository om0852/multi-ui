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

const Card_3: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Card Container */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Title - Always Visible */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 transition-transform duration-300 group-hover:translate-y-[-100%]">
            <h3 className="text-white text-xl sm:text-2xl font-bold">{title}</h3>
          </div>
          
          {/* Description and Button - Slide Up */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-white text-sm sm:text-base mb-4">{description}</p>
            <Link 
              href={link}
              className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-colors"
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card_3;
