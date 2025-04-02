"use client";

import React from "react";
import { EditableContainer } from "../tsx/Editable_21";

export default function Example_21() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-100">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Sticky Notes
        </h2>
        <p className="text-gray-500">
          Capture your thoughts and reminders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        <EditableContainer
          initialContent="Team Meeting Agenda:
- Project status updates
- Sprint planning
- Resource allocation
- Q2 goals review
- Team building ideas

📅 Thursday, 2 PM
📍 Conference Room A"
          onSave={handleSave}
          color="yellow"
          className="transform -rotate-2"
        />

        <EditableContainer
          initialContent="Product Launch Checklist:
✓ Feature testing complete
✓ Documentation updated
• Marketing materials ready
• Press release drafted
• Social media scheduled
• Email campaign prepared

Launch Date: April 15"
          onSave={handleSave}
          color="blue"
          className="transform rotate-1"
        />

        <EditableContainer
          initialContent="Ideas for Blog Posts:
🌟 AI in Healthcare
🌟 Future of Remote Work
🌟 Sustainable Tech
🌟 UX Design Trends
🌟 Cybersecurity Tips

Research & outline first draft
by end of week!"
          onSave={handleSave}
          color="green"
          className="transform -rotate-1"
        />

        <EditableContainer
          initialContent="Personal Goals Q2:
1. Complete AWS certification
2. Learn TypeScript
3. Contribute to open source
4. Write 2 technical articles
5. Improve public speaking

Review progress weekly!"
          onSave={handleSave}
          color="pink"
          className="transform rotate-2"
        />

        <EditableContainer
          initialContent="Project Dependencies:
📦 React v18.2
📦 Next.js 14
📦 TailwindCSS 3.3
📦 TypeScript 5.0
📦 Prisma 5.1

Update all packages
before deployment"
          onSave={handleSave}
          color="yellow"
          className="transform -rotate-1"
        />

        <EditableContainer
          initialContent="Customer Feedback:
⭐️ Love the new UI
⭐️ Faster response times
⭐️ Better mobile experience
❗️ Need more tutorials
❗️ Add dark mode option

Follow up with design team"
          onSave={handleSave}
          color="blue"
          className="transform rotate-1"
        />
      </div>
    </div>
  );
}
