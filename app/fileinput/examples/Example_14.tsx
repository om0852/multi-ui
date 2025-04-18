"use client";

import React from "react";
import FileUpload from "../_components/FileInput_14";

export default function Example_14() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-orange-600 mb-2">Modern File Upload</h1>
        <p className="text-gray-600">
          Contemporary interface with vibrant accents
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Files */}
        <div className="group bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-orange-200">
          <label className="block text-lg font-medium text-orange-600 mb-4 group-hover:text-orange-500">
            Project Files
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload project files"
            dragActiveText="Release to add to project"
            className="w-full"
          />
        </div>

        {/* Design Assets */}
        <div className="group bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-amber-200">
          <label className="block text-lg font-medium text-amber-600 mb-4 group-hover:text-amber-500">
            Design Assets
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload design files"
            dragActiveText="Release to add designs"
            className="w-full"
          />
        </div>

        {/* Media Library */}
        <div className="group bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-yellow-200">
          <label className="block text-lg font-medium text-yellow-600 mb-4 group-hover:text-yellow-500">
            Media Library
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload media files"
            dragActiveText="Release to add to library"
            className="w-full"
          />
        </div>

        {/* Resource Pack */}
        <div className="group bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-lime-200">
          <label className="block text-lg font-medium text-lime-600 mb-4 group-hover:text-lime-500">
            Resource Pack
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            uploadText="Upload resources"
            dragActiveText="Release to add resources"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
