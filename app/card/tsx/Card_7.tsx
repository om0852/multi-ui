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

const Card_7: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
        />
      </div>

      {/* Glass Effect Container */}
      <div className="absolute inset-0 rounded-lg backdrop-blur-md bg-white/10 p-6 flex flex-col justify-end transform perspective-1000">
        {/* Content Container with Glass Effect */}
        <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/30 transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            {description}
          </p>
          <Link 
            href={link}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/30 transition-colors"
          >
            {btnText}
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl transform group-hover:translate-x-4 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg transform group-hover:-translate-x-4 transition-transform duration-700" />
      </div>
    </div>
  );
}

export default Card_7;
