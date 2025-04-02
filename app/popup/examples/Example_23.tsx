"use client";
import React from 'react';
import CircularMenu from '../tsx/Popup_23';

export default function PopupExample() {
  // Define menu items for the popup with tool options
  const menuItems = [
    { 
      label: <span className="text-xl">🔨</span>, 
      onClick: () => console.log('Hammer') 
    },
    { 
      label: <span className="text-xl">🔧</span>, 
      onClick: () => console.log('Wrench') 
    },
    { 
      label: <span className="text-xl">🪛</span>, 
      onClick: () => console.log('Screwdriver') 
    },
    { 
      label: <span className="text-xl">🔌</span>, 
      onClick: () => console.log('Plug') 
    },
    { 
      label: <span className="text-xl">🔍</span>, 
      onClick: () => console.log('Magnifier') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <CircularMenu 
        menuItems={menuItems}
        label="⚙️"
        centerColor="bg-gray-700"
        menuItemColor="bg-gray-500"
        distance={140}
      />
    </div>
  );
}
