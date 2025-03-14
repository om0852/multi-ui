"use client";

import React from "react";
import FileUpload from "../_components/FileInput_22";

export default function Example_22() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-900 mb-2">E-Learning Content Upload</h1>
        <p className="text-indigo-600">
          Upload and manage your educational content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course Materials */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-indigo-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-indigo-900">
              Course Materials
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-indigo-600">Upload lectures, presentations, and documents</p>
        </div>

        {/* Video Lessons */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-purple-900">
              Video Lessons
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept="video/*"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">Upload video tutorials and lectures</p>
        </div>

        {/* Assignments */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-blue-900">
              Assignments
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-blue-600">Upload homework and assignments</p>
        </div>

        {/* Learning Resources */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-violet-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <label className="ml-3 text-lg font-medium text-violet-900">
              Learning Resources
            </label>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".pdf,.epub,.zip"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-violet-600">Upload additional learning materials</p>
        </div>
      </div>
    </div>
  );
}
