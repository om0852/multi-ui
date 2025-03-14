"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_12";

export default function Example_12() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Tech Conference Planning</h2>
      <div className="space-y-6">
        <div>
          <EditableContainer
            label="Event Overview"
            initialContent={`# TechConnect 2024

## Event Details
- Date: September 15-17, 2024
- Venue: Silicon Valley Convention Center
- Expected Attendance: 2,000+
- Theme: "AI & Sustainable Technology"

## Key Highlights
1. Keynote Speakers (3)
2. Technical Workshops (12)
3. Startup Showcase
4. Networking Events
5. Career Fair

## Target Audience
- Software Developers
- Tech Entrepreneurs
- Industry Leaders
- Venture Capitalists
- Students & Researchers`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <EditableContainer
            label="Schedule & Sessions"
            initialContent={`## Day 1 - September 15
09:00 - Opening Keynote: "Future of AI"
10:30 - Technical Workshops
14:00 - Panel Discussion: "Green Tech"
16:00 - Networking Reception

## Day 2 - September 16
09:00 - Industry Keynote
10:30 - Startup Pitches
14:00 - Technical Workshops
16:00 - Career Fair

## Day 3 - September 17
09:00 - Technical Keynote
10:30 - Hands-on Labs
14:00 - Closing Panel
16:00 - Awards Ceremony`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <EditableContainer
            label="Logistics & Resources"
            initialContent={`# Event Resources

## Venue Setup
- Main Hall (1000 seats)
- Workshop Rooms (4x 100 seats)
- Exhibition Area (50 booths)
- VIP Lounge
- Media Room

## Technical Requirements
- High-speed WiFi
- AV Equipment
- Recording Setup
- Live Streaming
- Registration Kiosks

## Staff Requirements
- Event Coordinators: 5
- Technical Support: 8
- Registration Staff: 10
- Security: 12
- Volunteers: 25`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
