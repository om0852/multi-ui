"use client";

import React from "react";
import { Editable_52 } from "../_components/Editable_52";

export default function Example_52() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Files</h1>
        <p className="text-gray-600">
          Browse and manage your project files and folders
        </p>
      </div>

      <Editable_52
        initialContent="Project Documentation and Assets"
        onSave={handleSave}
        className="min-h-[600px] bg-white rounded-xl shadow-lg"
        viewMode="grid"
        currentPath="/projects/website-redesign"
        folders={[
          {
            id: "docs",
            name: "Documentation",
            path: "/projects/website-redesign/docs",
            files: [
              {
                id: "spec",
                name: "Technical Specification.pdf",
                type: "file",
                size: 2457600,
                modified: "2024-03-20",
                path: "/projects/website-redesign/docs/Technical Specification.pdf",
                extension: "pdf"
              },
              {
                id: "api",
                name: "API Documentation.md",
                type: "file",
                size: 159744,
                modified: "2024-03-22",
                path: "/projects/website-redesign/docs/API Documentation.md",
                extension: "md"
              }
            ]
          },
          {
            id: "designs",
            name: "Design Assets",
            path: "/projects/website-redesign/designs",
            files: [
              {
                id: "mockups",
                name: "Homepage Mockup.fig",
                type: "file",
                size: 5033164,
                modified: "2024-03-18",
                path: "/projects/website-redesign/designs/Homepage Mockup.fig",
                extension: "fig"
              },
              {
                id: "style",
                name: "Style Guide.sketch",
                type: "file",
                size: 3355443,
                modified: "2024-03-15",
                path: "/projects/website-redesign/designs/Style Guide.sketch",
                extension: "sketch"
              }
            ]
          },
          {
            id: "src",
            name: "Source Code",
            path: "/projects/website-redesign/src",
            files: [
              {
                id: "components",
                name: "components",
                type: "file",
                modified: "2024-03-21",
                path: "/projects/website-redesign/src/components"
              },
              {
                id: "styles",
                name: "styles",
                type: "file",
                modified: "2024-03-19",
                path: "/projects/website-redesign/src/styles"
              }
            ]
          }
        ]}
      />
    </div>
  );
} 