"use client";

import React from "react";
import { EditableContainer } from "../tsx/Editable_17";

export default function Example_17() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Event Planning
        </h2>
        <p className="text-gray-500">
          Organize and manage your event details
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Event Overview
          </label>
          <EditableContainer
            initialContent={`Event Name: TechConnect 2024
Date: August 15-17, 2024
Location: Silicon Valley Convention Center
Expected Attendance: 2,500+

Theme: "Innovation in Action"
Format: Hybrid (In-person & Virtual)
Target Audience: Tech professionals, entrepreneurs, investors

Key Objectives:
1. Knowledge sharing
2. Networking opportunities
3. Product showcases`}
            onSave={handleSave}
            className="bg-indigo-50/80 rounded-xl shadow-sm border border-indigo-200 p-4"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Schedule
          </label>
          <EditableContainer
            initialContent={`Day 1 - August 15
09:00 - Opening Keynote
10:30 - Breakout Sessions
12:00 - Networking Lunch
14:00 - Panel Discussions
16:00 - Innovation Showcase
18:00 - Welcome Reception

Day 2 - August 16
09:00 - Industry Keynote
10:30 - Workshop Tracks
12:00 - Sponsor Showcase
14:00 - Tech Demos
16:00 - Roundtables
18:00 - Gala Dinner

Day 3 - August 17
09:00 - Closing Keynote
10:30 - Final Sessions
12:00 - Awards Ceremony
14:00 - Farewell Reception`}
            onSave={handleSave}
            className="bg-purple-50/80 rounded-xl shadow-sm border border-purple-200 p-4"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Budget Tracking
          </label>
          <EditableContainer
            initialContent={`Total Budget: $500,000

Venue & Equipment: $150,000
- Convention center rental
- AV equipment
- Stage setup
- Virtual platform

Catering: $100,000
- Breakfast & lunch (3 days)
- Welcome reception
- Gala dinner
- Coffee breaks

Marketing: $75,000
- Website development
- Social media campaign
- Email marketing
- Print materials

Speakers & Staff: $125,000
- Keynote speakers
- Event staff
- Security
- Technical support

Contingency: $50,000`}
            onSave={handleSave}
            className="bg-rose-50/80 rounded-xl shadow-sm border border-rose-200 p-4"
          />
        </div>
      </div>
    </div>
  );
}
