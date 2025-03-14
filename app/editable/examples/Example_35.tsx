"use client";

import React from "react";
import { Editable_35 } from "../_components/Editable_35";

export default function Example_35() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Tasks</h1>
        <p className="text-gray-600">
          Track and manage project tasks with subtasks, priorities, and deadlines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editable_35
          initialContent="Implement user authentication system with OAuth 2.0 integration. Include social login providers (Google, GitHub) and email verification flow. Ensure GDPR compliance for data collection and storage."
          onSave={handleSave}
          priority="High"
          assignee="Sarah Chen"
          dueDate="2024-04-15"
          status="In Progress"
          subtasks={[
            { id: "1", text: "Set up OAuth providers", completed: true },
            { id: "2", text: "Implement social login", completed: false },
            { id: "3", text: "Add email verification", completed: false },
            { id: "4", text: "GDPR compliance checks", completed: false }
          ]}
        />

        <Editable_35
          initialContent="Design and implement the dashboard UI components following the approved mockups. Focus on responsive design and accessibility standards. Include dark mode support."
          onSave={handleSave}
          priority="Medium"
          assignee="Michael Lee"
          dueDate="2024-04-20"
          status="Todo"
          subtasks={[
            { id: "1", text: "Create base components", completed: false },
            { id: "2", text: "Implement responsive design", completed: false },
            { id: "3", text: "Add dark mode support", completed: false },
            { id: "4", text: "Accessibility testing", completed: false }
          ]}
        />

        <Editable_35
          initialContent="Optimize database queries and implement caching for improved performance. Focus on reducing API response times and implementing efficient data pagination."
          onSave={handleSave}
          priority="High"
          assignee="David Kim"
          dueDate="2024-04-18"
          status="Todo"
          subtasks={[
            { id: "1", text: "Analyze current performance", completed: true },
            { id: "2", text: "Optimize SQL queries", completed: false },
            { id: "3", text: "Implement Redis caching", completed: false },
            { id: "4", text: "Add data pagination", completed: false }
          ]}
        />

        <Editable_35
          initialContent="Write comprehensive API documentation using OpenAPI/Swagger. Include authentication flows, request/response examples, and error handling guidelines."
          onSave={handleSave}
          priority="Low"
          assignee="Emma Garcia"
          dueDate="2024-04-25"
          status="Done"
          subtasks={[
            { id: "1", text: "Document authentication", completed: true },
            { id: "2", text: "Add request examples", completed: true },
            { id: "3", text: "Document error codes", completed: true },
            { id: "4", text: "Review and publish", completed: true }
          ]}
        />
      </div>
    </div>
  );
}
