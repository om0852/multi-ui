"use client";

import React from "react";
import FileUpload from "../tsx/FileInput_1";

export default function FileInput_1_Example() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">File Upload Examples</h1>
        <p className="text-gray-600">
          Different examples of file upload configurations
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic file upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Basic File Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Click to upload or drag and drop"
            dragActiveText="Drop files here"
            className="w-full"
          />
        </div>

        {/* Image upload with preview */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload images (PNG, JPG)"
            dragActiveText="Drop images here"
            accept="image/*"
            maxFiles={5}
            allowMultiple={true}
            className="w-full"
            dropAreaClassName="bg-blue-50 border-blue-200"
          />
        </div>

        {/* Document upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Document Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload documents (PDF, DOC)"
            dragActiveText="Drop documents here"
            accept=".pdf,.doc,.docx"
            maxFiles={1}
            allowMultiple={false}
            className="w-full"
            dropAreaClassName="bg-green-50 border-green-200"
          />
        </div>

        {/* Large file upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Large File Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload large files (max 3 files)"
            dragActiveText="Drop files here"
            maxFiles={3}
            allowMultiple={true}
            className="w-full"
            dropAreaClassName="bg-purple-50 border-purple-200"
          />
        </div>
      </div>
    </div>
  );
} 