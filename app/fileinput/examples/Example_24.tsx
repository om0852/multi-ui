"use client";

import React from "react";
import FileUpload from "../_components/FileInput_24";

export default function Example_24() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Photography Upload</h1>
        <p className="text-gray-300">
          Professional photography file management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* RAW Photos */}
        <div className="bg-black/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-white">
              RAW Photos
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".raw,.cr2,.nef,.arw"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-400">Upload RAW format photos</p>
        </div>

        {/* Edited Photos */}
        <div className="bg-black/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-white">
              Edited Photos
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={100}
            accept=".jpg,.jpeg,.png,.tiff"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-400">Upload processed and edited photos</p>
        </div>

        {/* Lightroom Presets */}
        <div className="bg-black/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-white">
              Lightroom Presets
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".xmp,.lrtemplate"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-400">Upload Lightroom presets and templates</p>
        </div>

        {/* Client Galleries */}
        <div className="bg-black/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-white">
              Client Galleries
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={200}
            accept=".jpg,.jpeg,.png"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-gray-400">Upload client delivery photos</p>
        </div>
      </div>
    </div>
  );
}
