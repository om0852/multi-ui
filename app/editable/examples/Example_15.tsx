"use client";

import React from "react";
import { EditableContainer } from "../tsx/Editable_15";

export default function Example_15() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Travel Itinerary</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Trip Overview</label>
          <EditableContainer
            initialContent={`# Japan Adventure 2024

## Trip Details
- Duration: 14 days
- Dates: October 1-14, 2024
- Travelers: 2 adults
- Style: Mix of culture & adventure

## Key Destinations
1. Tokyo (4 nights)
2. Kyoto (3 nights)
3. Osaka (2 nights)
4. Hakone (2 nights)
5. Mount Fuji (1 night)
6. Tokyo (2 nights)

## Budget Overview
- Flights: $2,000
- Accommodations: $2,800
- Transportation: $500
- Activities: $1,000
- Food & Dining: $1,200
- Shopping: $500
Total: $8,000`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Daily Schedule</label>
          <EditableContainer
            initialContent={`## Tokyo (Days 1-4)

Day 1 - Arrival & Asakusa
- 14:00 Arrive at Narita Airport
- 16:00 Check-in at hotel in Shinjuku
- 18:00 Explore Asakusa & Sensoji Temple
- 20:00 Welcome dinner at local izakaya

Day 2 - Modern Tokyo
- 09:00 Tsukiji Outer Market
- 11:00 Teamlab Borderless
- 14:00 Harajuku & Takeshita Street
- 17:00 Shibuya Crossing & Sky Deck
- 19:00 Dinner at Robot Restaurant

Day 3 - Cultural Day
- 08:00 Meiji Shrine
- 10:00 Japanese cooking class
- 14:00 Samurai Museum
- 16:00 Tea ceremony experience
- 19:00 Dinner in Shinjuku

Day 4 - Tokyo Exploration
- 09:00 Ueno Park & museums
- 12:00 Akihabara electronics
- 15:00 Imperial Palace gardens
- 18:00 Tokyo Tower sunset
- 20:00 Dinner cruise on Tokyo Bay`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Travel Notes</label>
          <EditableContainer
            initialContent={`# Important Information

## Transportation
- Japan Rail Pass (14 days)
- Suica card for local transit
- Airport transfers booked
- Shinkansen reservations needed

## Accommodations
1. Tokyo: Shinjuku Granbell Hotel
   - Confirmation: #TK12345
   - Check-in: 15:00
   - Check-out: 11:00

2. Kyoto: Traditional Ryokan
   - Confirmation: #KY67890
   - Special dinner included
   - Onsen facilities

## Essential Items
- JR Pass (collect at airport)
- Travel insurance docs
- Pocket WiFi reservation
- Power adapter
- Comfortable walking shoes
- Light rain jacket

## Cultural Notes
- Basic Japanese phrases
- Temple etiquette
- Onsen guidelines
- Tipping not required
- Carry cash (many places cash-only)`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
