"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_3";

export default function Example_3() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Professional File Upload</h1>
        <p className="text-gray-600">
          Enterprise-grade file upload with modern design
        </p>
      </div>

      <div className="space-y-8">
        {/* Resume upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Resume Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop your resume here or click to browse"
            dragActiveText="Release to upload your resume"
            className="w-full"
            dropAreaClassName="border-2 border-dashed border-gray-300 bg-white p-6 rounded-lg shadow-lg hover:border-blue-500 transition-colors"
          />
        </div>

        {/* Project files */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop project files here or click to browse"
            dragActiveText="Release to upload project files"
            className="w-full"
            dropAreaClassName="border-2 border-dashed border-gray-300 bg-white p-6 rounded-lg shadow-lg hover:border-indigo-500 transition-colors"
          />
        </div>

        {/* Media upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Media Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop media files here or click to browse"
            dragActiveText="Release to upload media files"
            className="w-full"
            dropAreaClassName="border-2 border-dashed border-gray-300 bg-white p-6 rounded-lg shadow-lg hover:border-emerald-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
