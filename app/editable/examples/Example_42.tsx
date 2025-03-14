"use client";

import React from "react";
import { Editable_42 } from "../_components/Editable_42";

export default function Example_42() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Tasks</h1>
        <p className="text-gray-600">
          Manage your project tasks with a Kanban board
        </p>
      </div>

      <Editable_42
        initialContent="Project tasks organized by status"
        onSave={handleSave}
        className="min-h-[600px]"
        columns={[
          {
            id: "backlog",
            title: "Backlog",
            color: "bg-gray-100",
            tasks: [
              {
                id: "1",
                title: "Research competitors",
                description: "Analyze top 5 competitors in the market",
                priority: "medium",
                tags: ["research", "strategy"]
              },
              {
                id: "2",
                title: "User interviews",
                description: "Conduct interviews with 10 potential users",
                priority: "high",
                dueDate: "2024-04-10",
                tags: ["research", "users"]
              }
            ]
          },
          {
            id: "inProgress",
            title: "In Progress",
            color: "bg-blue-100",
            tasks: [
              {
                id: "3",
                title: "Design mockups",
                description: "Create initial UI/UX designs",
                priority: "high",
                assignee: {
                  name: "Sarah Chen",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                },
                dueDate: "2024-04-15",
                tags: ["design", "ui"]
              }
            ]
          },
          {
            id: "review",
            title: "Review",
            color: "bg-yellow-100",
            tasks: [
              {
                id: "4",
                title: "Technical spec",
                description: "Review and approve technical specifications",
                priority: "medium",
                assignee: {
                  name: "Michael Lee",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                },
                dueDate: "2024-04-12",
                tags: ["documentation"]
              }
            ]
          }
        ]}
      />
    </div>
  );
}

