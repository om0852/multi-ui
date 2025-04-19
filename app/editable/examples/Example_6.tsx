"use client";

import React from "react";
import EditableContainerV3 from "../tsx/Editable_6";

export default function Example_6() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Code Documentation Editor
        </h2>
        <p className="text-gray-500">
          Write and edit your code documentation
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Function Description
          </label>
          <EditableContainerV3
            initialContent={`/**
 * Processes the input data and returns a transformed result
 * @param {Object} data - The input data to process
 * @returns {Object} - The processed result
 */`}
            className="font-mono bg-slate-900 text-slate-50 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            API Endpoint
          </label>
          <EditableContainerV3
            initialContent={`# POST /api/users
Creates a new user in the system.
- Requires authentication token
- Returns user object on success
- Throws 400 on validation error`}
            className="font-mono bg-zinc-900 text-zinc-50 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Component Usage
          </label>
          <EditableContainerV3
            initialContent={`// Example usage of the UserProfile component:
<UserProfile
  userId={123}
  showAvatar={true}
  onUpdate={() => handleUpdate()}
/>`}
            className="font-mono bg-gray-900 text-gray-50 rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
