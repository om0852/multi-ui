"use client";

import React from "react";
import FileUpload from "../_components/FileInput_36";

export default function Example_36() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-neutral-50 via-stone-50 to-zinc-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Fashion Design Portfolio</h1>
        <p className="text-neutral-600">
          Fashion design and collection management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Design Sketches */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-neutral-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
              ✏️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-neutral-900">
                Design Sketches
              </label>
              <span className="text-sm text-neutral-500">Fashion illustrations</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".jpg,.png,.psd,.ai"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-neutral-600">
            Upload fashion sketches and illustrations
          </p>
        </div>

        {/* Pattern Files */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
              📏
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-stone-900">
                Pattern Files
              </label>
              <span className="text-sm text-stone-500">Technical patterns</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".pdf,.ai,.dxf"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-stone-600">
            Upload garment patterns and templates
          </p>
        </div>

        {/* Fabric Swatches */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-zinc-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
              🧵
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-zinc-900">
                Fabric Swatches
              </label>
              <span className="text-sm text-zinc-500">Material samples</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={100}
            accept=".jpg,.png,.tiff"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-zinc-600">
            Upload fabric textures and swatches
          </p>
        </div>

        {/* Collection Documentation */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
              📋
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-gray-900">
                Collection Documentation
              </label>
              <span className="text-sm text-gray-500">Technical specifications</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".pdf,.doc,.docx,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-600">
            Upload tech packs and specifications
          </p>
        </div>
      </div>
    </div>
  );
}
