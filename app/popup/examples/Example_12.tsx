"use client";
import React from 'react';
import RadialMenu from '../tsx/Popup_12';

export default function PopupExample() {
  // Define menu items for the popup with color options
  const menuItems = [
    { 
      label: <div className="w-full h-full bg-red-500 rounded-full"></div>, 
      onClick: () => console.log('Red selected') 
    },
    { 
      label: <div className="w-full h-full bg-blue-500 rounded-full"></div>, 
      onClick: () => console.log('Blue selected') 
    },
    { 
      label: <div className="w-full h-full bg-green-500 rounded-full"></div>, 
      onClick: () => console.log('Green selected') 
    },
    { 
      label: <div className="w-full h-full bg-yellow-500 rounded-full"></div>, 
      onClick: () => console.log('Yellow selected') 
    },
    { 
      label: <div className="w-full h-full bg-purple-500 rounded-full"></div>, 
      onClick: () => console.log('Purple selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <RadialMenu 
        menuItems={menuItems}
        label="🎨"
        centerColor="bg-gray-800"
        menuColor="bg-transparent"
        centerRadius="w-14 h-14"
        menuItemRadius="w-10 h-10"
        distance={120}
      />
    </div>
  );
}
