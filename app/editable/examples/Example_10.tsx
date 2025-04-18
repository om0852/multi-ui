"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_10";

export default function Example_10() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Marketing Campaign Planner</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Campaign Strategy</label>
          <EditableContainer
            initialContent={`# Summer Sale Campaign 2024

## Campaign Objectives
- Increase online sales by 30%
- Grow email subscriber list by 5,000
- Achieve 2.5% conversion rate
- Generate 100,000 social media impressions

## Target Audience
- Primary: Women, 25-45, urban professionals
- Secondary: Fashion-conscious millennials
- Geographic: Major metropolitan areas
- Interests: Sustainable fashion, lifestyle, wellness`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content Calendar</label>
          <EditableContainer
            initialContent={`## Pre-Launch (June 1-14)
- Email teasers: 3x per week
- Social media posts: Daily countdown
- Influencer outreach: 10 micro-influencers

## Launch Week (June 15-21)
- Daily email blasts
- Instagram Live sessions: 3x
- Facebook/Instagram ads
- Google Shopping campaigns

## Post-Launch (June 22-30)
- Retargeting campaigns
- Customer testimonials
- Final countdown emails
- Results analysis`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Budget Allocation</label>
          <EditableContainer
            initialContent={`# Campaign Budget: $50,000

## Digital Advertising: $25,000
- Facebook/Instagram Ads: $12,000
- Google Ads: $8,000
- Influencer Partnerships: $5,000

## Content Production: $15,000
- Photography: $6,000
- Video Content: $5,000
- Graphic Design: $4,000

## Email Marketing: $5,000
- Platform Costs: $2,000
- List Growth Campaigns: $3,000

## Analytics & Tools: $5,000
- Tracking Software: $2,000
- A/B Testing Tools: $1,500
- Social Media Management: $1,500`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
