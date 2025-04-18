"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_16";

export default function Example_16() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Product Development
        </h2>
        <p className="text-gray-500">
          Plan and track your product development lifecycle
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Product Vision
          </label>
          <EditableContainer
            initialContent={`Product Name: EcoTracker Pro
Target Market: Environmentally conscious consumers
Core Value Proposition: 
- Real-time carbon footprint tracking
- Personalized sustainability recommendations
- Community-driven green initiatives

Key Differentiators:
1. AI-powered suggestions
2. Gamification elements
3. Social impact metrics`}
            onSave={handleSave}
            className="bg-emerald-50/80 rounded-xl shadow-sm border border-emerald-200 p-4"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Feature Roadmap
          </label>
          <EditableContainer
            initialContent={`Q2 2024 Features:

MVP Release:
✦ User profile creation
✦ Basic tracking dashboard
✦ Initial recommendations engine

Version 1.1:
✦ Social sharing capabilities
✦ Advanced analytics
✦ Integration with smart devices

Version 1.2:
✦ Community challenges
✦ Rewards system
✦ API for third-party apps`}
            onSave={handleSave}
            className="bg-blue-50/80 rounded-xl shadow-sm border border-blue-200 p-4"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            User Research
          </label>
          <EditableContainer
            initialContent={`Key User Insights:

Pain Points:
• Difficulty tracking daily impact
• Lack of actionable recommendations
• Limited community engagement

User Needs:
• Simple, intuitive interface
• Real-time feedback
• Meaningful metrics

Competitive Analysis:
• Market gap in gamification
• Opportunity in social features
• Need for better data visualization`}
            onSave={handleSave}
            className="bg-violet-50/80 rounded-xl shadow-sm border border-violet-200 p-4"
          />
        </div>
      </div>
    </div>
  );
}
