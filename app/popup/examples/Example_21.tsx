"use client";
import React from 'react';
import RadialMenu from '../_components/Popup_21';

export default function PopupExample() {
  // Define menu items for the popup with emoji reactions
  const menuItems = [
    { 
      label: <span className="text-2xl">👍</span>, 
      onClick: () => console.log('Like') 
    },
    { 
      label: <span className="text-2xl">❤️</span>, 
      onClick: () => console.log('Love') 
    },
    { 
      label: <span className="text-2xl">😂</span>, 
      onClick: () => console.log('Laugh') 
    },
    { 
      label: <span className="text-2xl">😮</span>, 
      onClick: () => console.log('Wow') 
    },
    { 
      label: <span className="text-2xl">😢</span>, 
      onClick: () => console.log('Sad') 
    },
    { 
      label: <span className="text-2xl">😡</span>, 
      onClick: () => console.log('Angry') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <RadialMenu 
        menuItems={menuItems}
        label="😀"
        centerColor="bg-yellow-500"
        menuColor="bg-gray-200"
        distance={120}
      />
    </div>
  );
}
