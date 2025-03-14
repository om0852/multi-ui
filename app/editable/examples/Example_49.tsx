"use client";

import React from "react";
import { Editable_49 } from "../_components/Editable_49";

export default function Example_49() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  const currentUser = {
    id: "current",
    name: "Alex Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    role: "Product Designer"
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Design Review</h1>
        <p className="text-gray-600">
          Feedback and discussion for the new dashboard design
        </p>
      </div>

      <Editable_49
        initialContent="Dashboard Design Feedback Thread"
        onSave={handleSave}
        className="min-h-[800px]"
        currentUser={currentUser}
        comments={[
          {
            id: "1",
            content: "The new dashboard layout looks fantastic! The data visualization components are much clearer now. I particularly like how the metrics cards scale on different screen sizes. 📊",
            author: {
              id: "sarah",
              name: "Sarah Kim",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
              role: "UX Lead"
            },
            timestamp: "2024-03-18T09:30:00",
            reactions: [
              { emoji: "👍", count: 4, users: ["current", "mike", "lisa", "james"] },
              { emoji: "🎯", count: 2, users: ["current", "lisa"] }
            ],
            replies: [
              {
                id: "1.1",
                content: "Thanks Sarah! We spent a lot of time ensuring the responsive behavior works smoothly. @Mike helped a lot with the chart components.",
                author: currentUser,
                timestamp: "2024-03-18T09:35:00",
                reactions: [
                  { emoji: "❤️", count: 2, users: ["sarah", "mike"] }
                ],
                replies: [],
                mentions: [
                  {
                    id: "mike",
                    name: "Mike Wilson",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
                  }
                ]
              }
            ]
          },
          {
            id: "2",
            content: "I've noticed some accessibility issues with the color contrast in the secondary charts. Here's a screenshot highlighting the problem areas. Could we adjust the color palette?",
            author: {
              id: "lisa",
              name: "Lisa Park",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
              role: "Accessibility Specialist"
            },
            timestamp: "2024-03-18T10:15:00",
            reactions: [
              { emoji: "🎨", count: 2, users: ["current", "sarah"] },
              { emoji: "👀", count: 1, users: ["james"] }
            ],
            replies: [],
            attachments: [
              {
                type: "image",
                url: "https://picsum.photos/800/400",
                name: "contrast-issues.png"
              }
            ]
          },
          {
            id: "3",
            content: "The loading states and transitions between different data views are very smooth. @Alex @Sarah should we apply this pattern to other dashboard sections as well?",
            author: {
              id: "james",
              name: "James Taylor",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
              role: "Frontend Developer"
            },
            timestamp: "2024-03-18T11:00:00",
            reactions: [
              { emoji: "✨", count: 3, users: ["current", "sarah", "mike"] }
            ],
            replies: [
              {
                id: "3.1",
                content: "Definitely! I'll create a shared component for these transitions. It should help maintain consistency across all dashboard views.",
                author: currentUser,
                timestamp: "2024-03-18T11:05:00",
                reactions: [
                  { emoji: "🚀", count: 2, users: ["james", "sarah"] }
                ],
                replies: []
              }
            ],
            mentions: [
              {
                id: "current",
                name: "Alex Chen",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              },
              {
                id: "sarah",
                name: "Sarah Kim",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              }
            ]
          },
          {
            id: "4",
            content: "Here's the updated style guide with the new component variations we discussed. Let me know if anything needs adjustment.",
            author: {
              id: "mike",
              name: "Mike Wilson",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
              role: "Visual Designer"
            },
            timestamp: "2024-03-18T11:30:00",
            reactions: [
              { emoji: "🎨", count: 3, users: ["current", "sarah", "lisa"] }
            ],
            replies: [],
            attachments: [
              {
                type: "file",
                url: "#",
                name: "dashboard-style-guide-v2.pdf",
                size: 2048576
              }
            ]
          }
        ]}
      />
    </div>
  );
}
