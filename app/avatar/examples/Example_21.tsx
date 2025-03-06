"use client";

import React from 'react';
import Avatar from '../_components/Avatar_21';

export default function AvatarExample21() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=500&fit=crop",
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Floating Glow Avatar</h2>
      
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

        {/* Different people */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Different People</h3>
          <div className="flex space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Person 1" 
                size="md" 
              />
              <span className="text-white mt-2">Person 1</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Person 2" 
                size="md" 
              />
              <span className="text-white mt-2">Person 2</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Person 3" 
                size="md" 
              />
              <span className="text-white mt-2">Person 3</span>
            </div>
          </div>
        </div>

        {/* Animation description */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Floating Animation with Gradient Glow</h3>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Animation Example" 
                size="lg" 
              />
            </div>
          </div>
          <p className="text-white text-center mt-4">
            The avatar continuously floats up and down with a colorful gradient glow effect, and scales slightly on hover
          </p>
        </div>
      </div>
    </div>
  );
} 