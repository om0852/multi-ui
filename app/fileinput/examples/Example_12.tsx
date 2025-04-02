"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_12";

export default function Example_12() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-light text-gray-900 mb-2">Minimal File Upload</h1>
        <p className="text-gray-500">
          Clean and simple interface for file management
        </p>
      </div>

      <div className="space-y-12">
        {/* Document Upload */}
        <div className="space-y-3">
          <label className="block text-sm font-light text-gray-700">
            Documents
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload documents"
            dragActiveText="Release to add documents"
            className="w-full"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-3">
          <label className="block text-sm font-light text-gray-700">
            Images
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload images"
            dragActiveText="Release to add images"
            className="w-full"
          />
        </div>

        {/* Archive Upload */}
        <div className="space-y-3">
          <label className="block text-sm font-light text-gray-700">
            Archives
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload archives"
            dragActiveText="Release to add archives"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
