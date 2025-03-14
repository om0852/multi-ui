"use client";

import React from "react";
import FileUpload from "../_components/FileInput_37";

export default function Example_37() {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log("Selected files:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-emerald-900 mb-2">Marketing Assets Hub</h1>
        <p className="text-emerald-600">
          Digital marketing campaign management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Media Assets */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-b-4 border-emerald-400">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              📱
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-emerald-900">
                Social Media Assets
              </label>
              <span className="text-sm text-emerald-500">Platform-specific content</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={50}
            accept=".jpg,.png,.gif,.mp4"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-emerald-600">
            Upload social media graphics and videos
          </p>
        </div>

        {/* Email Templates */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-b-4 border-teal-400">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
              ✉️
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-teal-900">
                Email Templates
              </label>
              <span className="text-sm text-teal-500">Newsletter designs</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={20}
            accept=".html,.psd,.sketch"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-teal-600">
            Upload email templates and designs
          </p>
        </div>

        {/* Ad Creatives */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-b-4 border-cyan-400">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
              🎯
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-cyan-900">
                Ad Creatives
              </label>
              <span className="text-sm text-cyan-500">Advertising materials</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={30}
            accept=".jpg,.png,.gif,.mp4,.psd"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-cyan-600">
            Upload digital advertising assets
          </p>
        </div>

        {/* Analytics Reports */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-b-4 border-sky-400">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
              📊
            </span>
            <div className="ml-3">
              <label className="block text-lg font-medium text-sky-900">
                Analytics Reports
              </label>
              <span className="text-sm text-sky-500">Performance data</span>
            </div>
          </div>
          <FileUpload
            onFilesSelected={handleFilesSelected}
            maxFiles={10}
            accept=".pdf,.xlsx,.csv,.pptx"
            allowMultiple={true}
          />
          <p className="mt-2 text-sm text-sky-600">
            Upload campaign analytics and reports
          </p>
        </div>
      </div>
    </div>
  );
}
