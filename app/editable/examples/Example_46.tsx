"use client";

import React from "react";
import { Editable_46 } from "../_components/Editable_46";

export default function Example_46() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Team Calendar</h1>
        <p className="text-gray-600">
          Manage team meetings, tasks, and important dates
        </p>
      </div>

      <Editable_46
        initialContent="Team Schedule and Events"
        onSave={handleSave}
        className="min-h-[800px]"
        view="month"
        events={[
          {
            id: "1",
            title: "Sprint Planning",
            start: "2024-03-18T09:00:00",
            end: "2024-03-18T10:30:00",
            type: "meeting",
            description: "Plan tasks for the upcoming sprint",
            location: "Meeting Room 1",
            attendees: [
              {
                name: "Sarah Chen",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                status: "accepted"
              },
              {
                name: "Mike Johnson",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
                status: "pending"
              },
              {
                name: "Emma Davis",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
                status: "accepted"
              }
            ],
            color: "#3B82F6"
          },
          {
            id: "2",
            title: "Code Review",
            start: "2024-03-19T14:00:00",
            end: "2024-03-19T15:00:00",
            type: "task",
            description: "Review pull requests for the authentication feature",
            color: "#EF4444"
          },
          {
            id: "3",
            title: "Team Lunch",
            start: "2024-03-20T12:00:00",
            end: "2024-03-20T13:30:00",
            type: "reminder",
            description: "Monthly team bonding lunch",
            location: "Cafe Bistro",
            color: "#10B981"
          },
          {
            id: "4",
            title: "Product Demo",
            start: "2024-03-21T15:00:00",
            end: "2024-03-21T16:00:00",
            type: "meeting",
            description: "Present new features to stakeholders",
            location: "Conference Room A",
            attendees: [
              {
                name: "Lisa Wong",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
                status: "accepted"
              },
              {
                name: "David Kim",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
                status: "accepted"
              }
            ],
            color: "#8B5CF6"
          },
          {
            id: "5",
            title: "Deployment Window",
            start: "2024-03-22T00:00:00",
            end: "2024-03-22T23:59:59",
            type: "task",
            description: "System maintenance and version update",
            color: "#F59E0B"
          },
          {
            id: "6",
            title: "Good Friday",
            start: "2024-03-29T00:00:00",
            end: "2024-03-29T23:59:59",
            type: "holiday",
            color: "#6366F1"
          }
        ]}
      />
    </div>
  );
}
