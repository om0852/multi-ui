"use client";

import React from 'react';
import Card20 from '../_components/Card_20';

const Example_20 = () => {
  const settingsGroups = [
    {
      title: "User Preferences",
      description: "Customize your personal settings and preferences for a better experience.",
      link: "/settings/user",
      imageUrl: "https://picsum.photos/seed/190/800/600",
      btnText: "Configure"
    },
    {
      title: "Notification Settings",
      description: "Manage your notification preferences and alert settings.",
      link: "/settings/notifications",
      imageUrl: "https://picsum.photos/seed/191/800/600",
      btnText: "Customize"
    },
    {
      title: "Privacy Controls",
      description: "Control your privacy settings and data sharing preferences.",
      link: "/settings/privacy",
      imageUrl: "https://picsum.photos/seed/192/800/600",
      btnText: "Manage"
    },
    {
      title: "Display Settings",
      description: "Adjust your display and theme preferences for optimal viewing.",
      link: "/settings/display",
      imageUrl: "https://picsum.photos/seed/193/800/600",
      btnText: "Adjust"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          System Settings
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Customize your experience with our intuitive settings interface. Each card represents a different aspect of the system you can configure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {settingsGroups.map((settings, index) => (
            <div key={index} className="h-full">
              <Card20 {...settings} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_20; 