"use client";

import React from "react";
import { Editable_38 } from "../_components/Editable_38";

export default function Example_38() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Files</h1>
        <p className="text-gray-600">
          Upload and manage project documentation and assets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editable_38
          initialContent="Project documentation and specifications"
          onSave={handleSave}
          files={[
            {
              id: "1",
              name: "project-spec.pdf",
              size: 2500000,
              type: "application/pdf",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T10:30:00"
            },
            {
              id: "2",
              name: "architecture.pdf",
              size: 3500000,
              type: "application/pdf",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T10:35:00"
            }
          ]}
          maxFileSize={20 * 1024 * 1024}
          allowedTypes={["application/pdf", ".doc", ".docx"]}
          multiple={true}
        />

        <Editable_38
          initialContent="UI design assets and mockups"
          onSave={handleSave}
          files={[
            {
              id: "1",
              name: "dashboard-mockup.png",
              size: 1800000,
              type: "image/png",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T11:00:00",
              preview: "https://picsum.photos/200"
            },
            {
              id: "2",
              name: "mobile-screens.jpg",
              size: 2200000,
              type: "image/jpeg",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T11:05:00",
              preview: "https://picsum.photos/201"
            }
          ]}
          maxFileSize={50 * 1024 * 1024}
          allowedTypes={["image/*"]}
          multiple={true}
        />

        <Editable_38
          initialContent="Development resources and code samples"
          onSave={handleSave}
          files={[
            {
              id: "1",
              name: "api-examples.zip",
              size: 1500000,
              type: "application/zip",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T14:30:00"
            },
            {
              id: "2",
              name: "code-snippets.txt",
              size: 50000,
              type: "text/plain",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T14:35:00"
            }
          ]}
          maxFileSize={100 * 1024 * 1024}
          allowedTypes={[".zip", ".txt", ".js", ".ts", ".json"]}
          multiple={true}
        />

        <Editable_38
          initialContent="Project data and analytics"
          onSave={handleSave}
          files={[
            {
              id: "1",
              name: "performance-metrics.xlsx",
              size: 750000,
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T15:00:00"
            },
            {
              id: "2",
              name: "user-analytics.csv",
              size: 500000,
              type: "text/csv",
              progress: 100,
              status: "completed",
              lastModified: "2024-04-15T15:05:00"
            }
          ]}
          maxFileSize={10 * 1024 * 1024}
          allowedTypes={[".xlsx", ".xls", ".csv"]}
          multiple={true}
        />
      </div>
    </div>
  );
}
