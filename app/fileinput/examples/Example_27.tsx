"use client";

import React from "react";
import FileUpload from "../_components/FileInput_27";

export default function Example_27() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-900 mb-2">Educational Resources</h1>
        <p className="text-indigo-600">
          Upload and manage educational materials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course Materials */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              📚
            </span>
            <label className="ml-3 text-lg font-medium text-indigo-900">
              Course Materials
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-indigo-600">
            Upload lecture notes, presentations, and study guides
          </p>
        </div>

        {/* Assignment Submissions */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              ✍️
            </span>
            <label className="ml-3 text-lg font-medium text-purple-900">
              Assignment Submissions
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.doc,.docx,.zip"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">
            Submit homework, projects, and assignments
          </p>
        </div>

        {/* Educational Videos */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              🎥
            </span>
            <label className="ml-3 text-lg font-medium text-blue-900">
              Educational Videos
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".mp4,.mov,.avi"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-blue-600">
            Upload video lectures and tutorials
          </p>
        </div>

        {/* Research Resources */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              🔬
            </span>
            <label className="ml-3 text-lg font-medium text-emerald-900">
              Research Resources
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx,.xlsx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-emerald-600">
            Upload research papers and reference materials
          </p>
        </div>
      </div>
    </div>
  );
}
