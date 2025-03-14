"use client";

import React from "react";
import FileUpload from "../_components/FileInput_21";

export default function Example_21() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Scientific Data Upload</h1>
        <p className="text-slate-600">
          Specialized interface for research data management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Research Data */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <label className="block text-lg font-medium text-slate-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Research Data
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".csv,.xlsx,.dat"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-500">Accepts CSV, Excel, and DAT files</p>
        </div>

        {/* Experiment Results */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <label className="block text-lg font-medium text-slate-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Experiment Results
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".txt,.log,.json"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-500">Accepts TXT, LOG, and JSON files</p>
        </div>

        {/* Analysis Scripts */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <label className="block text-lg font-medium text-slate-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Analysis Scripts
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={3}
            accept=".py,.r,.m"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-500">Accepts Python, R, and MATLAB files</p>
        </div>

        {/* Documentation */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <label className="block text-lg font-medium text-slate-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Documentation
          </label>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={5}
            accept=".pdf,.doc,.docx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-slate-500">Accepts PDF and Word documents</p>
        </div>
      </div>
    </div>
  );
}
