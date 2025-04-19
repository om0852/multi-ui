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

const Card_6: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 sm:h-72 group">
      {/* Glowing Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      {/* Card Content */}
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden ring-1 ring-gray-900/5">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
            {title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
            {description}
          </p>
          <Link 
            href={link}
            className="inline-flex items-center justify-center px-6 py-2 text-sm sm:text-base font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transform group-hover:-translate-y-1 transition-all duration-500 delay-100"
          >
            {btnText}
            <svg className="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card_6;
