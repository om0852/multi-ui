"use client";

import React from "react";
import FileUpload from "../_components/FileInput_28";

export default function Example_28() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-stone-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Real Estate Listings</h1>
        <p className="text-stone-600">
          Property documentation management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Property Photos */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
              📸
            </span>
            <label className="ml-3 text-lg font-medium text-stone-900">
              Property Photos
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".jpg,.jpeg,.png"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload high-quality property photographs
          </p>
        </div>

        {/* Virtual Tours */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
              🎥
            </span>
            <label className="ml-3 text-lg font-medium text-stone-900">
              Virtual Tours
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".mp4,.mov"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload 360° virtual tour videos
          </p>
        </div>

        {/* Property Documents */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
              📄
            </span>
            <label className="ml-3 text-lg font-medium text-stone-900">
              Property Documents
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload deeds, certificates, and legal documents
          </p>
        </div>

        {/* Floor Plans */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
              📐
            </span>
            <label className="ml-3 text-lg font-medium text-stone-900">
              Floor Plans
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.jpg,.png,.dwg"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload architectural drawings and floor plans
          </p>
        </div>
      </div>
    </div>
  );
}
