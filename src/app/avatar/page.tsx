"use client";
import React from "react";
import Avatar_21 from "./_components/Avatar_21";
import Avatar_22 from "./_components/Avatar_22";
import Avatar_23 from "./_components/Avatar_23";
import Avatar_24 from "./_components/Avatar_24";
import Avatar_25 from "./_components/Avatar_25";
import Avatar_26 from "./_components/Avatar_26";
import Avatar_27 from "./_components/Avatar_27";
import Avatar_28 from "./_components/Avatar_28";
import Avatar_29 from "./_components/Avatar_29";
import Avatar_30 from "./_components/Avatar_30";

const AvatarPage = () => {
  const avatarImages = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1546539782-6fc531453083?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Animated Avatars</h1>
        
        {/* Floating & Glowing */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Floating & Glowing Effects</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <Avatar_21 src={avatarImages[0]} alt="Avatar 21" size="lg" />
            <Avatar_22 src={avatarImages[1]} alt="Avatar 22" size="lg" />
            <Avatar_23 src={avatarImages[2]} alt="Avatar 23" size="lg" />
            <Avatar_24 src={avatarImages[3]} alt="Avatar 24" size="lg" />
            <Avatar_25 src={avatarImages[4]} alt="Avatar 25" size="lg" />
          </div>
        </div>

        {/* Digital & Futuristic */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Digital & Futuristic Effects</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <Avatar_26 src={avatarImages[5]} alt="Avatar 26" size="lg" />
            <Avatar_27 src={avatarImages[6]} alt="Avatar 27" size="lg" />
            <Avatar_28 src={avatarImages[7]} alt="Avatar 28" size="lg" />
            <Avatar_29 src={avatarImages[8]} alt="Avatar 29" size="lg" />
            <Avatar_30 src={avatarImages[9]} alt="Avatar 30" size="lg" />
          </div>
        </div>

        {/* Size Variations */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Size Variations</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <Avatar_26 src={avatarImages[5]} alt="Small" size="sm" />
            <Avatar_27 src={avatarImages[6]} alt="Small" size="sm" />
            <Avatar_28 src={avatarImages[7]} alt="Medium" size="md" />
            <Avatar_29 src={avatarImages[8]} alt="Medium" size="md" />
            <Avatar_30 src={avatarImages[9]} alt="Large" size="lg" />
            <Avatar_25 src={avatarImages[4]} alt="Large" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPage;
