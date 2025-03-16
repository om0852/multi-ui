"use client";
import React from 'react';
import Popup_11 from '../_components/Popup_11';

export default function PopupExample() {
  // Define menu items for the popup with music player controls
  const menuItems = [
    { 
      label: <span className="text-xl">⏮️</span>, 
      onClick: () => console.log('Previous track') 
    },
    { 
      label: <span className="text-xl">⏯️</span>, 
      onClick: () => console.log('Play/Pause') 
    },
    { 
      label: <span className="text-xl">⏭️</span>, 
      onClick: () => console.log('Next track') 
    },
    { 
      label: <span className="text-xl">🔊</span>, 
      onClick: () => console.log('Volume') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_11 
        menuItems={menuItems}
        label={<span className="text-xl">🎵</span>}
        centerColor="bg-indigo-500"
        menuColor="bg-pink-400"
        centerRadius="w-16 h-16"
        menuItemRadius="w-12 h-12"
        distance={150}
      />
    </div>
  );
}
