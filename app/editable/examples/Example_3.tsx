"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_3";

export default function Example_3() {
  const handleSave = (content: string) => {
    console.log('Content saved:', content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Professional Document Editor
        </h2>
        <p className="text-gray-500">
          Edit professional documents with style
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Executive Summary
          </label>
          <EditableContainer
            initialContent="This executive summary outlines the key points of our quarterly report. Edit to update the content with latest information."
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Overview
          </label>
          <EditableContainer
            initialContent="Our project aims to deliver innovative solutions to modern challenges. Click to edit and update the project description."
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Team Objectives
          </label>
          <EditableContainer
            initialContent="List your team's objectives and key results here. Update them as your goals evolve throughout the quarter."
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
