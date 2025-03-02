"use client";

import React from 'react';
import Avatar from '../_components/Avatar_1';

export default function AvatarExample1() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Basic Avatar</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Different sizes */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Size Variations</h3>
          <div className="flex space-x-6 items-center">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Small Avatar" 
                size="sm" 
              />
              <span className="text-white mt-2">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Medium Avatar" 
                size="md" 
              />
              <span className="text-white mt-2">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Large Avatar" 
                size="lg" 
              />
              <span className="text-white mt-2">Large</span>
            </div>
          </div>
        </div>

        {/* Different border colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Border Color Variations</h3>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Default Border" 
                size="md" 
              />
              <span className="text-white mt-2">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Blue Border" 
                size="md" 
                borderColor="border-blue-500"
              />
              <span className="text-white mt-2">Blue</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Green Border" 
                size="md" 
                borderColor="border-green-500"
              />
              <span className="text-white mt-2">Green</span>
            </div>
          </div>
        </div>

        {/* Different border widths */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Border Width Variations</h3>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Thin Border" 
                size="md" 
                borderWidth={1}
                borderColor="border-purple-500"
              />
              <span className="text-white mt-2">Thin</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Medium Border" 
                size="md" 
                borderWidth={3}
                borderColor="border-purple-500"
              />
              <span className="text-white mt-2">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Thick Border" 
                size="md" 
                borderWidth={5}
                borderColor="border-purple-500"
              />
              <span className="text-white mt-2">Thick</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 