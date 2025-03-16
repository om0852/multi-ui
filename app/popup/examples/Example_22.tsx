"use client";
import React from 'react';
import GlowingMenu from '../_components/Popup_22';

export default function PopupExample() {
  // Define menu items for the popup with glowing elements
  const menuItems = [
    { 
      label: <span className="text-xl">🔥</span>, 
      onClick: () => console.log('Fire') 
    },
    { 
      label: <span className="text-xl">💧</span>, 
      onClick: () => console.log('Water') 
    },
    { 
      label: <span className="text-xl">🌿</span>, 
      onClick: () => console.log('Earth') 
    },
    { 
      label: <span className="text-xl">💨</span>, 
      onClick: () => console.log('Air') 
    },
    { 
      label: <span className="text-xl">⚡</span>, 
      onClick: () => console.log('Lightning') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <GlowingMenu 
        menuItems={menuItems}
        label="✨"
        centerColor="bg-purple-700"
        glowColor="ring-purple-400"
        distance={130}
      />
    </div>
  );
}
