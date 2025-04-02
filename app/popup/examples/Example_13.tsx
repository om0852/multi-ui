"use client";
import React from 'react';
import Popup_13 from '../tsx/Popup_13';

export default function PopupExample() {
  // Define menu items for the popup with weather options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">☀️</span><span className="text-xs">Sunny</span></div>, 
      onClick: () => console.log('Sunny selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">☁️</span><span className="text-xs">Cloudy</span></div>, 
      onClick: () => console.log('Cloudy selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🌧️</span><span className="text-xs">Rainy</span></div>, 
      onClick: () => console.log('Rainy selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">❄️</span><span className="text-xs">Snowy</span></div>, 
      onClick: () => console.log('Snowy selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_13 
        menuItems={menuItems}
        label={<span className="text-lg">🌤️</span>}
        centerColor="bg-cyan-500"
        menuColor="bg-teal-400"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={150}
      />
    </div>
  );
}
