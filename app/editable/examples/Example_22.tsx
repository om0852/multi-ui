"use client";

import React from "react";
import { Editable_22 } from "../_components/Editable_22";

export default function Example_22() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Chat Messages
        </h2>
        <p className="text-gray-500">
          Instant messaging interface with editable messages
        </p>
      </div>

      <div className="space-y-4">
        <Editable_22
          initialContent="Hey! I just reviewed the latest design mockups for the dashboard. The new layout looks great! 👍"
          onSave={handleSave}
          position="right"
        />

        <Editable_22
          initialContent="Thanks! We spent a lot of time on the user flow. Did you notice the new analytics section?"
          onSave={handleSave}
          position="left"
        />

        <Editable_22
          initialContent="Yes, the data visualization is much clearer now. The interactive charts will be really helpful for our users. When can we start the implementation?"
          onSave={handleSave}
          position="right"
        />

        <Editable_22
          initialContent="We can kick off next week. I'll set up a planning meeting with the dev team. We should be able to complete it within the next sprint."
          onSave={handleSave}
          position="left"
        />

        <Editable_22
          initialContent="Perfect! I'll prepare the technical requirements document and share it with the team before the meeting. Looking forward to seeing this come to life! 🚀"
          onSave={handleSave}
          position="right"
        />

        <Editable_22
          initialContent="Sounds good! I'll also gather some user feedback from the prototype testing to help guide our implementation priorities."
          onSave={handleSave}
          position="left"
        />
      </div>
    </div>
  );
}
