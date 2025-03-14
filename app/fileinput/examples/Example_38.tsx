"use client";

import React from "react";
import FileUpload from "../_components/FileInput_38";

export default function Example_38() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-orange-900 mb-2">Fitness Training Hub</h1>
        <p className="text-orange-600">
          Complete fitness program management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Workout Videos */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
              🎥
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-orange-900">
                Workout Videos
              </label>
              <span className="text-sm text-orange-500">Exercise demonstrations</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".mp4,.mov,.avi"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-orange-600">
            Upload workout demonstration videos
          </p>
        </div>

        {/* Training Plans */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-amber-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              📋
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-amber-900">
                Training Plans
              </label>
              <span className="text-sm text-amber-500">Workout programs</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-amber-600">
            Upload training plans and schedules
          </p>
        </div>

        {/* Nutrition Guides */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
              🥗
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-yellow-900">
                Nutrition Guides
              </label>
              <span className="text-sm text-yellow-500">Meal plans and recipes</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".pdf,.doc,.docx,.jpg"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-yellow-600">
            Upload nutrition guides and meal plans
          </p>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-lime-500">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center text-lime-600">
              📈
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-lime-900">
                Progress Tracking
              </label>
              <span className="text-sm text-lime-500">Fitness assessments</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".xlsx,.csv,.pdf,.jpg"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-lime-600">
            Upload progress photos and tracking sheets
          </p>
        </div>
      </div>
    </div>
  );
}
