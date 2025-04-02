"use client";
import React from 'react';
import Popup_10 from '../tsx/Popup_10';

export default function PopupExample() {
  // Define menu items for the popup with social media actions
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">👍</span><span className="text-xs">Like</span></div>, 
      onClick: () => console.log('Like clicked') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">💬</span><span className="text-xs">Comment</span></div>, 
      onClick: () => console.log('Comment clicked') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🔄</span><span className="text-xs">Share</span></div>, 
      onClick: () => console.log('Share clicked') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">⭐</span><span className="text-xs">Save</span></div>, 
      onClick: () => console.log('Save clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_10 
        menuItems={menuItems}
        label={<span className="text-xl">+</span>}
        centerColor="bg-pink-600"
        menuColor="bg-white"
        centerRadius="w-16 h-16"
        menuItemRadius="w-20 h-20"
        distance={140}
      />
    </div>
  );
}
