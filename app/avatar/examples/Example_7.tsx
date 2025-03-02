"use client";

import React from 'react';
import Avatar from '../_components/Avatar_7';

export default function AvatarExample7() {
  const avatarData = [
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
      name: "Emma Wilson"
    },
    {
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop",
      name: "Alex Johnson"
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
      name: "Sophia Lee"
    }
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Zoom Out Avatar with Name</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Different sizes */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Size Variations</h3>
          <div className="flex space-x-12 items-center">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarData[0].src} 
                alt={`Avatar of ${avatarData[0].name}`} 
                name={avatarData[0].name}
                size="sm" 
              />
              <span className="text-white mt-2">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarData[0].src} 
                alt={`Avatar of ${avatarData[0].name}`} 
                name={avatarData[0].name}
                size="md" 
              />
              <span className="text-white mt-2">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarData[0].src} 
                alt={`Avatar of ${avatarData[0].name}`} 
                name={avatarData[0].name}
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
                src={avatarData[0].src} 
                alt={`Avatar of ${avatarData[0].name}`} 
                name={avatarData[0].name}
                size="md" 
              />
              <span className="text-white mt-2">{avatarData[0].name}</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarData[1].src} 
                alt={`Avatar of ${avatarData[1].name}`} 
                name={avatarData[1].name}
                size="md" 
              />
              <span className="text-white mt-2">{avatarData[1].name}</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarData[2].src} 
                alt={`Avatar of ${avatarData[2].name}`} 
                name={avatarData[2].name}
                size="md" 
              />
              <span className="text-white mt-2">{avatarData[2].name}</span>
            </div>
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover over avatars to see the zoom out effect and name display</h3>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarData[2].src} 
                alt={`Avatar of ${avatarData[2].name}`} 
                name={avatarData[2].name}
                size="lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 