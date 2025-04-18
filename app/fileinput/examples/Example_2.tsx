"use client";

import React from "react";
import FileUpload from "../_components/FileInput_2";

export default function Example_2() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Dark Theme File Upload</h1>
        <p className="text-gray-400">
          Upload files with a sleek dark interface
        </p>
      </div>

      <div className="space-y-8">
        {/* Single file upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Single File Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop a file here or click to select"
            dragActiveText="Release to upload file"
            className="w-full"
            dropAreaClassName="border-2 border-dashed border-gray-600 bg-gray-800 p-6 rounded-lg hover:border-blue-500 transition-colors"
          />
        </div>

        {/* Image gallery upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Image Gallery Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop images here or click to select"
            dragActiveText="Release to add images"
            className="w-full"
            dropAreaClassName="border-2 border-dashed border-gray-600 bg-gray-800 p-6 rounded-lg hover:border-purple-500 transition-colors"
          />
        </div>

        {/* Document upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Document Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Drop documents here or click to select"
            dragActiveText="Release to upload documents"
            className="w-full"
            dropAreaClassName="border-2 border-dashed border-gray-600 bg-gray-800 p-6 rounded-lg hover:border-green-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
