"use client";

import React from 'react';
import Avatar from '../_components/Avatar_5';

export default function AvatarExample5() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Spinning Border Avatar</h2>
      
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

        {/* Different border colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Border Color Variations</h3>
          <div className="flex space-x-12">
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
                alt="Purple Border" 
                size="md" 
                borderColor="purple-500"
              />
              <span className="text-white mt-2">Purple</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Green Border" 
                size="md" 
                borderColor="green-500"
              />
              <span className="text-white mt-2">Green</span>
            </div>
          </div>
        </div>

        {/* More border colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">More Border Colors</h3>
          <div className="flex space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Red Border" 
                size="md" 
                borderColor="red-500"
              />
              <span className="text-white mt-2">Red</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Yellow Border" 
                size="md" 
                borderColor="yellow-500"
              />
              <span className="text-white mt-2">Yellow</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Pink Border" 
                size="md" 
                borderColor="pink-500"
              />
              <span className="text-white mt-2">Pink</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 