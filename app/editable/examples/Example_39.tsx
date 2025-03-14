"use client";

import React from "react";
import { Editable_39 } from "../_components/Editable_39";

export default function Example_39() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">User Settings</h1>
        <p className="text-gray-600">
          Customize your account preferences and notifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editable_39
          initialContent="Developer account settings"
          onSave={handleSave}
          username="sarah.chen"
          email="sarah.chen@example.com"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          notifications={[
            {
              id: "1",
              title: "Code Review Notifications",
              description: "Get notified when your code needs review",
              enabled: true
            },
            {
              id: "2",
              title: "Build Status Alerts",
              description: "Receive alerts for build failures",
              enabled: true
            },
            {
              id: "3",
              title: "Team Updates",
              description: "Weekly team progress summary",
              enabled: false
            }
          ]}
          theme="dark"
          themes={[
            { id: "1", name: "Light", value: "light", preview: "#ffffff" },
            { id: "2", name: "Dark", value: "dark", preview: "#1a1a1a" },
            { id: "3", name: "System", value: "system", preview: "linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)" }
          ]}
          privacySettings={[
            {
              id: "1",
              title: "Profile Visibility",
              description: "Control who can see your contributions",
              value: "public"
            },
            {
              id: "2",
              title: "Activity Status",
              description: "Show when you're online",
              value: "friends"
            },
            {
              id: "3",
              title: "Project Access",
              description: "Control repository access",
              value: "private"
            }
          ]}
        />

        <Editable_39
          initialContent="Designer account settings"
          onSave={handleSave}
          username="michael.lee"
          email="michael.lee@example.com"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
          notifications={[
            {
              id: "1",
              title: "Design Review Notifications",
              description: "Get notified when designs need review",
              enabled: true
            },
            {
              id: "2",
              title: "Asset Updates",
              description: "Notifications for asset library changes",
              enabled: true
            },
            {
              id: "3",
              title: "Project Timeline",
              description: "Daily project status updates",
              enabled: false
            }
          ]}
          theme="light"
          themes={[
            { id: "1", name: "Light", value: "light", preview: "#ffffff" },
            { id: "2", name: "Dark", value: "dark", preview: "#1a1a1a" },
            { id: "3", name: "System", value: "system", preview: "linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)" }
          ]}
          privacySettings={[
            {
              id: "1",
              title: "Portfolio Visibility",
              description: "Control who can see your work",
              value: "public"
            },
            {
              id: "2",
              title: "Design Tools",
              description: "Share design tool preferences",
              value: "friends"
            },
            {
              id: "3",
              title: "Client Projects",
              description: "Control client project visibility",
              value: "private"
            }
          ]}
        />

        <Editable_39
          initialContent="Project manager account settings"
          onSave={handleSave}
          username="emma.garcia"
          email="emma.garcia@example.com"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
          notifications={[
            {
              id: "1",
              title: "Task Assignments",
              description: "Get notified of new task assignments",
              enabled: true
            },
            {
              id: "2",
              title: "Deadline Reminders",
              description: "Receive project deadline alerts",
              enabled: true
            },
            {
              id: "3",
              title: "Resource Updates",
              description: "Team resource allocation changes",
              enabled: true
            }
          ]}
          theme="system"
          themes={[
            { id: "1", name: "Light", value: "light", preview: "#ffffff" },
            { id: "2", name: "Dark", value: "dark", preview: "#1a1a1a" },
            { id: "3", name: "System", value: "system", preview: "linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)" }
          ]}
          privacySettings={[
            {
              id: "1",
              title: "Project Dashboard",
              description: "Control project visibility",
              value: "public"
            },
            {
              id: "2",
              title: "Team Calendar",
              description: "Share calendar availability",
              value: "friends"
            },
            {
              id: "3",
              title: "Reports Access",
              description: "Control access to project reports",
              value: "private"
            }
          ]}
        />

        <Editable_39
          initialContent="QA engineer account settings"
          onSave={handleSave}
          username="david.kim"
          email="david.kim@example.com"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
          notifications={[
            {
              id: "1",
              title: "Test Results",
              description: "Get notified of test results",
              enabled: true
            },
            {
              id: "2",
              title: "Bug Reports",
              description: "Receive new bug report alerts",
              enabled: true
            },
            {
              id: "3",
              title: "Test Coverage",
              description: "Weekly test coverage reports",
              enabled: false
            }
          ]}
          theme="light"
          themes={[
            { id: "1", name: "Light", value: "light", preview: "#ffffff" },
            { id: "2", name: "Dark", value: "dark", preview: "#1a1a1a" },
            { id: "3", name: "System", value: "system", preview: "linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)" }
          ]}
          privacySettings={[
            {
              id: "1",
              title: "Test Results",
              description: "Control test result visibility",
              value: "public"
            },
            {
              id: "2",
              title: "Bug Tracking",
              description: "Share bug tracking access",
              value: "friends"
            },
            {
              id: "3",
              title: "Test Environment",
              description: "Control test environment access",
              value: "private"
            }
          ]}
        />
      </div>
    </div>
  );
}
