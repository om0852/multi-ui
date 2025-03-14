"use client";

import React from "react";
import FileUpload from "../_components/FileInput_39";

export default function Example_39() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Academic Research Portal</h1>
        <p className="text-slate-600">
          Organize and manage your research materials efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Research Papers */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              📄
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-blue-900">
                Research Papers
              </label>
              <span className="text-sm text-blue-500">Academic publications and drafts</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-blue-600">
            Upload research papers, manuscripts, and publications
          </p>
        </div>

        {/* Data Sets */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-indigo-600">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
              📊
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-indigo-900">
                Data Sets
              </label>
              <span className="text-sm text-indigo-500">Research data and analysis</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".csv,.xlsx,.json,.sav,.dta"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-indigo-600">
            Upload statistical data, spreadsheets, and datasets
          </p>
        </div>

        {/* Literature Review */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-violet-600">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
              📚
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-violet-900">
                Literature Review
              </label>
              <span className="text-sm text-violet-500">Reference materials</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".pdf,.doc,.docx,.bib"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-violet-600">
            Upload reference papers, citations, and bibliographies
          </p>
        </div>

        {/* Research Media */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              🎥
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-purple-900">
                Research Media
              </label>
              <span className="text-sm text-purple-500">Multimedia research content</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={15}
            accept=".mp4,.jpg,.png,.mp3"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-purple-600">
            Upload research videos, images, and audio recordings
          </p>
        </div>
      </div>
    </div>
  );
}
