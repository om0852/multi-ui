"use client";

import React from "react";
import EditableContainer from "../_components/Editable_1";

export default function Example_1() {
  return (
    <div className="p-8 space-y-8">
      {/* Header section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Modern Inline Editing
        </h2>
        <p className="text-gray-500">
          Double-click to edit text with smooth animations
        </p>
      </div>

      {/* Examples section */}
      <div className="space-y-8">
        {/* Simple text example */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Simple Text Edit
          </label>
          <EditableContainer
            initialContent="Double-click me to edit this text. The changes will be saved when you click outside."
            className="bg-white"
          />
        </div>

        {/* Styled example */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Styled Edit
          </label>
          <EditableContainer
            initialContent="This is a styled editable container with custom colors"
            className="bg-indigo-50 text-indigo-700 font-medium"
          />
        </div>

        {/* Notes example */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Quick Notes
          </label>
          <EditableContainer
            initialContent="Use this space for your quick notes or reminders. Double-click to start editing."
            className="bg-yellow-50 min-h-[150px]"
          />
        </div>
      </div>
    </div>
  );
}
