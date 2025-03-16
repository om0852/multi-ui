"use client";
import React from 'react';
import FanMenu from '../_components/Popup_25';

export default function PopupExample() {
  // Define menu items for the popup with fruit options
  const menuItems = [
    { 
      label: <span className="text-xl">🍎</span>, 
      onClick: () => console.log('Apple') 
    },
    { 
      label: <span className="text-xl">🍌</span>, 
      onClick: () => console.log('Banana') 
    },
    { 
      label: <span className="text-xl">🍊</span>, 
      onClick: () => console.log('Orange') 
    },
    { 
      label: <span className="text-xl">🍇</span>, 
      onClick: () => console.log('Grapes') 
    },
    { 
      label: <span className="text-xl">🍓</span>, 
      onClick: () => console.log('Strawberry') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <FanMenu 
        menuItems={menuItems}
        label="🍽️"
        centerColor="bg-green-600"
        menuColor="bg-red-400"
        radius={150}
      />
    </div>
  );
}
