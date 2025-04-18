"use client";

import React from "react";
import FileUpload from "../_components/FileInput_16";

export default function Example_16() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Validated File Upload</h1>
        <p className="text-gray-600">
          Secure file upload with size and type validation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Upload */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Image Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept="image/*"
            allowMultiple={true}
            maxSizeInMB={2}
          />
          <p className="mt-2 text-sm text-gray-500">
            Max 5 images, 2MB each
          </p>
        </div>

        {/* Document Upload */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Document Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
            maxSizeInMB={5}
          />
          <p className="mt-2 text-sm text-gray-500">
            Max 3 documents, 5MB each
          </p>
        </div>

        {/* Video Upload */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Video Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={1}
            accept="video/*"
            allowMultiple={false}
            maxSizeInMB={50}
          />
          <p className="mt-2 text-sm text-gray-500">
            Single video file, max 50MB
          </p>
        </div>

        {/* Archive Upload */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Archive Upload
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={2}
            accept=".zip,.rar,.7z"
            allowMultiple={true}
            maxSizeInMB={100}
          />
          <p className="mt-2 text-sm text-gray-500">
            Max 2 archives, 100MB each
          </p>
        </div>
      </div>
    </div>
  );
}
