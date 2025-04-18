"use client";

import React from "react";
import { SlideEditContainer } from "../_components/Editable_8";

export default function Example_8() {
  const handleSave = (content: string) => {
    console.log('Content saved:', content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Travel Journal
        </h2>
        <p className="text-gray-500">
          Document your travel memories and experiences
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Destination Overview
          </label>
          <SlideEditContainer
            initialContent="Venice, Italy - A city of canals, historic architecture, and timeless romance. Visited during the spring of 2024, when the weather was perfect for exploring the narrow streets and enjoying outdoor cafes."
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Daily Highlights
          </label>
          <SlideEditContainer
            initialContent="Day 1: Arrived at Marco Polo Airport
- Took water taxi to hotel in San Marco
- Evening walk around St. Mark's Square
- Dinner at a local trattoria

Day 2: Venice Exploration
- Morning visit to Doge's Palace
- Gondola ride through quiet canals
- Lunch in a hidden courtyard"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Travel Tips
          </label>
          <SlideEditContainer
            initialContent="💡 Best time to visit: Spring or Fall
🎫 Get museum passes in advance
🚶‍♂️ Comfortable walking shoes are essential
🗺️ Download offline maps
💰 Keep cash for small shops and cafes
⏰ Visit popular spots early morning"
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
