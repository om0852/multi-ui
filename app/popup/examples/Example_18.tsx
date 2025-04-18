"use client";
import React from 'react';
import Popup_18 from '../_components/Popup_18';

export default function PopupExample() {
  // Define menu items for the popup with social media platforms
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📘</span><span className="text-xs">Facebook</span></div>, 
      onClick: () => console.log('Facebook selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📷</span><span className="text-xs">Instagram</span></div>, 
      onClick: () => console.log('Instagram selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🐦</span><span className="text-xs">Twitter</span></div>, 
      onClick: () => console.log('Twitter selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">💼</span><span className="text-xs">LinkedIn</span></div>, 
      onClick: () => console.log('LinkedIn selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📺</span><span className="text-xs">YouTube</span></div>, 
      onClick: () => console.log('YouTube selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_18 
        menuItems={menuItems}
        label={<span className="text-lg">🌐</span>}
        centerColor="bg-purple-600"
        menuColor="bg-indigo-500"
        centerRadius="w-16 h-16"
        menuItemRadius="w-18 h-18"
        distance={160}
      />
    </div>
  );
}
