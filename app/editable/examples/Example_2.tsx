"use client";

import React from "react";
import EditableContainerV3 from "../tsx/Editable_2";

export default function Example_2() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Animated Editing Experience
        </h2>
        <p className="text-gray-500">
          Click the edit button for smooth expand/collapse animations
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Blog Post Editor
          </label>
          <EditableContainerV3
            initialContent="This is a blog post editor with smooth animations. Click the edit button in the top right to start editing. The container will expand smoothly to give you more space."
            className="bg-white rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Meeting Notes
          </label>
          <EditableContainerV3
            initialContent="Use this space for your meeting notes. The editor features a clean interface with subtle animations and transitions."
            className="bg-blue-50 rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Task Description
          </label>
          <EditableContainerV3
            initialContent="Write your task description here. The editor will expand to give you more space when editing longer content."
            className="bg-green-50 rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
