"use client";

import React from "react";
import { Editable_31 } from "../_components/Editable_31";

export default function Example_31() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          File Manager
        </h2>
        <p className="text-gray-500">
          Organize and manage your digital assets
        </p>
      </div>

      <div className="space-y-6">
        <Editable_31
          initialContent="Project proposal document for the Q3 marketing campaign. Includes budget breakdown, timeline, and resource allocation. Shared with the marketing team and awaiting approval from the department head."
          onSave={handleSave}
          fileName="Q3_Marketing_Proposal.pdf"
          fileType="document"
          fileSize="3.2 MB"
          lastModified="2024-03-15"
        />

        <Editable_31
          initialContent="High-resolution product photos for the new summer collection. Includes front, back, and detail shots of all 12 items. Ready for use in the online store and social media campaigns."
          onSave={handleSave}
          fileName="Summer_Collection_Photos.zip"
          fileType="image"
          fileSize="156 MB"
          lastModified="2024-03-20"
        />

        <Editable_31
          initialContent="Promotional video for the upcoming product launch. Duration: 2:15. Includes product demonstrations, customer testimonials, and call-to-action. Final version approved by the marketing director."
          onSave={handleSave}
          fileName="Product_Launch_Promo.mp4"
          fileType="video"
          fileSize="428 MB"
          lastModified="2024-03-22"
        />

        <Editable_31
          initialContent="Podcast interview with the CEO discussing company vision, upcoming initiatives, and industry trends. Duration: 45 minutes. Edited and ready for publication on the company website and podcast platforms."
          onSave={handleSave}
          fileName="CEO_Interview_March2024.mp3"
          fileType="audio"
          fileSize="52 MB"
          lastModified="2024-03-25"
        />
      </div>
    </div>
  );
}
