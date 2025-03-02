"use client";

import React from 'react';
import Avatar from '../_components/Avatar_4';

export default function AvatarExample4() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Pulsing Glow Avatar</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Different sizes */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Size Variations</h3>
          <div className="flex space-x-12 items-center">
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

        {/* Different glow colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Glow Color Variations</h3>
          <div className="flex space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Default Glow" 
                size="md" 
              />
              <span className="text-white mt-2">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Purple Glow" 
                size="md" 
                glowColor="purple-500"
              />
              <span className="text-white mt-2">Purple</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Green Glow" 
                size="md" 
                glowColor="green-500"
              />
              <span className="text-white mt-2">Green</span>
            </div>
          </div>
        </div>

        {/* More glow colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">More Glow Colors</h3>
          <div className="flex space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Red Glow" 
                size="md" 
                glowColor="red-500"
              />
              <span className="text-white mt-2">Red</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Yellow Glow" 
                size="md" 
                glowColor="yellow-500"
              />
              <span className="text-white mt-2">Yellow</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Pink Glow" 
                size="md" 
                glowColor="pink-500"
              />
              <span className="text-white mt-2">Pink</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 