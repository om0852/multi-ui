"use client";

import React from "react";
import FileUpload from "../_components/FileInput_30";

export default function Example_30() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-rose-900 mb-2">Wedding Gallery</h1>
        <p className="text-rose-600">
          Wedding photography management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ceremony Photos */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
              💒
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-rose-900">
                Ceremony Photos
              </label>
              <span className="text-sm text-rose-600">High-resolution images</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={100}
            accept=".jpg,.jpeg,.png,.raw"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-rose-600">
            Upload ceremony and altar photographs
          </p>
        </div>

        {/* Reception Photos */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
              🎉
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-pink-900">
                Reception Photos
              </label>
              <span className="text-sm text-pink-600">Party and celebration moments</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={200}
            accept=".jpg,.jpeg,.png,.raw"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-pink-600">
            Upload reception and celebration photos
          </p>
        </div>

        {/* Wedding Videos */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              🎥
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-purple-900">
                Wedding Videos
              </label>
              <span className="text-sm text-purple-600">Cinematic moments</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".mp4,.mov"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">
            Upload wedding ceremony and highlight videos
          </p>
        </div>

        {/* Photo Albums */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
              📸
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-violet-900">
                Photo Albums
              </label>
              <span className="text-sm text-violet-600">Curated collections</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".zip,.rar"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-violet-600">
            Upload organized photo album archives
          </p>
        </div>
      </div>
    </div>
  );
}
