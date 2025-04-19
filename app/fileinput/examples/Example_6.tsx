"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_6";

export default function Example_6() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Card-Style File Upload</h1>
        <p className="text-gray-600">
          Elegant card-based interface for file uploads
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Files Upload */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Project Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop project files here"
            dragActiveText="Release to upload files"
            className="w-full"
          />
        </div>

        {/* Design Assets Upload */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Design Assets
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop design assets here"
            dragActiveText="Release to upload assets"
            className="w-full"
          />
        </div>

        {/* Documentation Upload */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Documentation
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop documentation here"
            dragActiveText="Release to upload docs"
            className="w-full"
          />
        </div>

        {/* Media Files Upload */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Media Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop media files here"
            dragActiveText="Release to upload media"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
