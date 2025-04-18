"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_20";

export default function Example_20() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-100">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Social Feed
        </h2>
        <p className="text-gray-500">
          Share updates and connect with your network
        </p>
      </div>

      <div className="space-y-6">
        <EditableContainer
          initialContent="Just finished implementing the new AI-powered recommendation engine! 🚀 The results are incredible - we're seeing a 40% improvement in user engagement and a 25% increase in conversion rates. Big shoutout to the team for their amazing work! #AI #TechInnovation #ProductDevelopment"
          onSave={handleSave}
          username="Sarah Chen"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        />

        <EditableContainer
          initialContent="Excited to announce our latest research paper on 'Sustainable Urban Development' has been accepted for publication! 🌱 The study explores innovative approaches to reducing carbon emissions in metropolitan areas. Looking forward to presenting at the International Climate Conference next month. #Sustainability #UrbanPlanning #Research"
          onSave={handleSave}
          username="Dr. James Wilson"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=James"
        />

        <EditableContainer
          initialContent="Today marks a significant milestone in our journey - we've successfully launched our platform in 10 new countries! 🌍 Grateful for our amazing community of users who've been with us from the start. Here's to making technology more accessible and inclusive for everyone! #GlobalExpansion #TechForAll #Milestone"
          onSave={handleSave}
          username="Maria Rodriguez"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
        />
      </div>
    </div>
  );
}
