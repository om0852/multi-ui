"use client";
import React from 'react';
import GlowingMenu from '../_components/Popup_30';

export default function PopupExample() {
  // Define menu items for the popup with music genre options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎸</span><span className="text-xs">Rock</span></div>, 
      onClick: () => console.log('Rock selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎹</span><span className="text-xs">Jazz</span></div>, 
      onClick: () => console.log('Jazz selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎤</span><span className="text-xs">Pop</span></div>, 
      onClick: () => console.log('Pop selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎻</span><span className="text-xs">Classical</span></div>, 
      onClick: () => console.log('Classical selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🥁</span><span className="text-xs">Hip Hop</span></div>, 
      onClick: () => console.log('Hip Hop selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <GlowingMenu 
        menuItems={menuItems}
        label="🎵"
        centerColor="bg-gradient-to-r from-blue-600 to-purple-600"
        glowColor="ring-blue-300"
        distance={160}
      />
    </div>
  );
}
