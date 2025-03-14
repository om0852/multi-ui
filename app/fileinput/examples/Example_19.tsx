"use client";

import React from "react";
import FileUpload from "../_components/FileInput_19";

export default function Example_19() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Social Media Upload</h1>
        <p className="text-gray-600">
          Share your content with style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Story Upload */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500"></div>
            <label className="ml-3 text-lg font-medium text-gray-800">
              Story Upload
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={1}
            accept="image/*,video/*"
            allowMultiple={false}
          />
        </div>

        {/* Post Upload */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            <label className="ml-3 text-lg font-medium text-gray-800">
              Post Upload
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept="image/*,video/*"
            allowMultiple={true}
          />
        </div>

        {/* Reel Upload */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <label className="ml-3 text-lg font-medium text-gray-800">
              Reel Upload
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={1}
            accept="video/*"
            allowMultiple={false}
          />
        </div>

        {/* Album Upload */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <label className="ml-3 text-lg font-medium text-gray-800">
              Album Upload
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept="image/*"
            allowMultiple={true}
          />
        </div>
      </div>
    </div>
  );
}
