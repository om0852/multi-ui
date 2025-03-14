"use client";

import React from "react";
import FileUpload from "../_components/FileInput_40";

export default function Example_40() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-rose-900 mb-2">Event Planning Hub</h1>
        <p className="text-rose-600">
          Organize and manage your event assets efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Documentation */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-rose-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
              📋
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-rose-900">
                Event Documentation
              </label>
              <span className="text-sm text-rose-500">Contracts and permits</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-rose-600">
            Upload contracts, permits, and legal documents
          </p>
        </div>

        {/* Venue Materials */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
              🏛️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-pink-900">
                Venue Materials
              </label>
              <span className="text-sm text-pink-500">Floor plans and layouts</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".pdf,.jpg,.png,.dwg"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-pink-600">
            Upload venue layouts, floor plans, and site photos
          </p>
        </div>

        {/* Event Design */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-fuchsia-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600">
              🎨
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-fuchsia-900">
                Event Design
              </label>
              <span className="text-sm text-fuchsia-500">Decor and styling</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={30}
            accept=".jpg,.png,.pdf,.psd"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-fuchsia-600">
            Upload design mockups, mood boards, and style guides
          </p>
        </div>

        {/* Event Schedule */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              ⏰
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-purple-900">
                Event Schedule
              </label>
              <span className="text-sm text-purple-500">Timelines and programs</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.doc,.docx,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">
            Upload event schedules, timelines, and programs
          </p>
        </div>
      </div>
    </div>
  );
}
