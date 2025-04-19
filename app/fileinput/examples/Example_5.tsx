"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_5";

export default function Example_5() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Circular File Upload</h1>
        <p className="text-gray-600">
          Modern circular design for file uploads
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Picture Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your profile picture here"
            dragActiveText="Release to update profile picture"
            className="w-full"
          />
        </div>

        {/* Team Photos Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Team Photos
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop team photos here"
            dragActiveText="Release to add team photos"
            className="w-full"
          />
        </div>

        {/* Company Logo Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Company Logo
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your company logo here"
            dragActiveText="Release to update logo"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
