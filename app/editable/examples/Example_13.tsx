"use client";

import React from "react";
import { EditableContainer } from "../tsx/Editable_13";

export default function Example_13() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Product Launch Planner</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Specifications</label>
          <EditableContainer
            initialContent={`# Smart Home Security System

## Product Features
- AI-powered motion detection
- 4K HDR cameras with night vision
- Two-way audio communication
- Mobile app integration
- Cloud storage with encryption
- Smart notifications
- Integration with major voice assistants

## Technical Specifications
- Camera Resolution: 4K (3840 x 2160)
- Field of View: 160° diagonal
- Night Vision Range: 30 feet
- Wireless: WiFi 6 compatible
- Power: Battery (6 months) or Wired
- Storage: 128GB local + Cloud
- Weather Resistance: IP65`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Launch Strategy</label>
          <EditableContainer
            initialContent={`## Pre-Launch Phase (Q2 2024)
1. Beta Testing Program
   - 100 selected users
   - 4 weeks testing period
   - Feedback collection
   - Bug fixes and improvements

2. Marketing Preparation
   - Press kit development
   - Influencer partnerships
   - Social media campaign
   - Email marketing sequence

## Launch Phase (Q3 2024)
1. Official Launch Event
   - Virtual product showcase
   - Live demonstrations
   - Early bird discounts
   - Media coverage

2. Distribution Channels
   - Direct website sales
   - Amazon partnership
   - Retail partnerships
   - B2B channel`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Success Metrics</label>
          <EditableContainer
            initialContent={`# Launch Goals & KPIs

## Sales Targets
- First Month: 5,000 units
- Q3 2024: 15,000 units
- Q4 2024: 25,000 units
- Year 1 Total: 50,000 units

## Revenue Projections
- Average Unit Price: $299
- Q3 2024: $4.5M
- Q4 2024: $7.5M
- Year 1 Total: $15M

## Customer Metrics
- App Store Rating: 4.5+
- Customer Satisfaction: 90%+
- Support Response Time: <2 hours
- Installation Success Rate: 95%+

## Marketing Goals
- Website Traffic: 500K visits
- Social Media Reach: 2M
- Email List Growth: 100K
- Press Mentions: 50+`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
