"use client";

import React from "react";
import { RichTextEditableContainer } from "../_components/Editable_5";

export default function Example_5() {
  const handleSave = (content: string) => {
    console.log('Content saved:', content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Project Tasks
        </h2>
        <p className="text-gray-500">
          Track your project tasks and progress
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            To Do
          </label>
          <RichTextEditableContainer
            initialContent="• Design user interface mockups
• Set up development environment
• Create database schema
• Write API documentation
• Implement authentication"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            In Progress
          </label>
          <RichTextEditableContainer
            initialContent="• Frontend development
  - Homepage layout
  - Navigation components
  - Form validation
• Backend API endpoints
  - User routes
  - Data validation"
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Completed
          </label>
          <RichTextEditableContainer
            initialContent="✓ Project planning
✓ Requirements gathering
✓ Technology stack selection
✓ Team assignments
✓ Initial setup"
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
