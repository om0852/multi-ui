"use client";
import React from 'react';
import CircularMenu from '../_components/Popup_24';

export default function PopupExample() {
  // Define menu items for the popup with animal options
  const menuItems = [
    { 
      label: <span className="text-xl">🐶</span>, 
      onClick: () => console.log('Dog') 
    },
    { 
      label: <span className="text-xl">🐱</span>, 
      onClick: () => console.log('Cat') 
    },
    { 
      label: <span className="text-xl">🐰</span>, 
      onClick: () => console.log('Rabbit') 
    },
    { 
      label: <span className="text-xl">🐦</span>, 
      onClick: () => console.log('Bird') 
    },
    { 
      label: <span className="text-xl">🐠</span>, 
      onClick: () => console.log('Fish') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <CircularMenu 
        menuItems={menuItems}
        label="🐾"
        centerColor="bg-amber-600"
        menuItemColor="bg-amber-400"
        distance={140}
      />
    </div>
  );
}
