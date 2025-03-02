"use client";

import React from 'react';
import Avatar from '../_components/Avatar_3';

export default function AvatarExample3() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1546539782-6fc531453083?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&fit=crop",
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Rotating Ring Avatar</h2>
      
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

        {/* Different ring colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Ring Color Variations</h3>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Default Ring" 
                size="md" 
              />
              <span className="text-white mt-2">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Blue Ring" 
                size="md" 
                ringColor="blue-500"
              />
              <span className="text-white mt-2">Blue</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Green Ring" 
                size="md" 
                ringColor="green-500"
              />
              <span className="text-white mt-2">Green</span>
            </div>
          </div>
        </div>

        {/* Different animations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Different Ring Colors</h3>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Purple Ring" 
                size="md" 
                ringColor="purple-500"
              />
              <span className="text-white mt-2">Purple</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Red Ring" 
                size="md" 
                ringColor="red-500"
              />
              <span className="text-white mt-2">Red</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Yellow Ring" 
                size="md" 
                ringColor="yellow-500"
              />
              <span className="text-white mt-2">Yellow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 