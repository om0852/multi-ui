"use client";

import React from "react";
import FileUpload from "../_components/FileInput_29";

export default function Example_29() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-emerald-900 mb-2">Product Management</h1>
        <p className="text-emerald-600">
          E-commerce product upload system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              🖼️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-emerald-900">
                Product Images
              </label>
              <span className="text-sm text-emerald-600">Max size: 5MB per image</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".jpg,.jpeg,.png,.webp"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-emerald-600">
            Upload high-resolution product photos
          </p>
        </div>

        {/* Product Videos */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
              🎥
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-teal-900">
                Product Videos
              </label>
              <span className="text-sm text-teal-600">Max size: 100MB per video</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".mp4,.mov,.webm"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-teal-600">
            Upload product demonstrations and reviews
          </p>
        </div>

        {/* Product Documentation */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
              📄
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-cyan-900">
                Product Documentation
              </label>
              <span className="text-sm text-cyan-600">Max size: 10MB per file</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-cyan-600">
            Upload user manuals and specifications
          </p>
        </div>

        {/* Bulk Product Data */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              📊
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-blue-900">
                Bulk Product Data
              </label>
              <span className="text-sm text-blue-600">Max size: 20MB per file</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={1}
            accept=".csv,.xlsx,.json"
            allowMultiple={false}
          />
          <p className="mt-2 text-sm text-blue-600">
            Upload product catalog spreadsheets
          </p>
        </div>
      </div>
    </div>
  );
}
