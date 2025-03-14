"use client";

import React from "react";
import { Editable_47 } from "../_components/Editable_47";

export default function Example_47() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Notification Center</h1>
        <p className="text-gray-600">
          Stay updated with project activities and team communications
        </p>
      </div>

      <Editable_47
        initialContent="Project Notifications"
        onSave={handleSave}
        className="min-h-[800px]"
        notifications={[
          {
            id: "1",
            type: "mention",
            title: "Design Review",
            message: "@emma mentioned you in the UI redesign discussion",
            timestamp: "2024-03-18T10:30:00",
            read: false,
            actionUrl: "/discussions/456",
            sender: {
              name: "Emma Wilson",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
            },
            metadata: {
              project: "UI Modernization",
              thread: "Component Library"
            }
          },
          {
            id: "2",
            type: "success",
            title: "Pipeline Success",
            message: "CI/CD pipeline completed successfully",
            timestamp: "2024-03-18T09:45:00",
            read: true,
            metadata: {
              branch: "main",
              commit: "feat: add notification system"
            }
          },
          {
            id: "3",
            type: "activity",
            title: "Pull Request",
            message: "Alex created a new pull request",
            timestamp: "2024-03-18T09:15:00",
            read: false,
            actionUrl: "/pull/789",
            sender: {
              name: "Alex Thompson",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            },
            metadata: {
              title: "Feature: User Notifications",
              changes: "+350, -124"
            }
          },
          {
            id: "4",
            type: "warning",
            title: "API Rate Limit",
            message: "Approaching API rate limit threshold",
            timestamp: "2024-03-17T16:20:00",
            read: false,
            actionUrl: "/monitoring/api",
            metadata: {
              usage: "92%",
              reset: "1 hour"
            }
          },
          {
            id: "5",
            type: "info",
            title: "Scheduled Maintenance",
            message: "System maintenance scheduled for tonight",
            timestamp: "2024-03-17T15:00:00",
            read: true,
            metadata: {
              start: "22:00 UTC",
              duration: "2 hours"
            }
          },
          {
            id: "6",
            type: "error",
            title: "Database Error",
            message: "Connection timeout in production database",
            timestamp: "2024-03-17T14:30:00",
            read: true,
            actionUrl: "/alerts/123",
            metadata: {
              service: "user-db",
              error: "ETIMEDOUT"
            }
          },
          {
            id: "7",
            type: "activity",
            title: "Document Update",
            message: "Sarah updated the project documentation",
            timestamp: "2024-03-17T11:45:00",
            read: false,
            actionUrl: "/docs/architecture",
            sender: {
              name: "Sarah Lee",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            },
            metadata: {
              document: "Architecture Overview",
              changes: "Updated deployment diagram"
            }
          }
        ]}
      />
    </div>
  );
}
