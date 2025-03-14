"use client";

import React from "react";
import { Editable_34 } from "../_components/Editable_34";

export default function Example_34() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Note-Taking App</h1>
        <p className="text-gray-600">
          Capture your thoughts, ideas, and reminders with this interactive note-taking application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editable_34
          initialContent="# Project Roadmap\n\n- Complete user research by end of week\n- Finalize wireframes by Tuesday\n- Begin development sprint on Wednesday\n- Schedule stakeholder review for Friday\n\nRemember to update the team on progress during daily standup."
          onSave={handleSave}
          title="Q2 Project Planning"
          category="Work"
          tags={["project", "planning", "roadmap"]}
          lastEdited="2 hours ago"
          color="blue"
        />

        <Editable_34
          initialContent="## Shopping List\n\n- Eggs\n- Milk\n- Bread\n- Fresh vegetables\n- Chicken\n- Rice\n- Pasta\n- Coffee\n\nDon't forget to check for coupons before going to the store!"
          onSave={handleSave}
          title="Grocery Shopping"
          category="Personal"
          tags={["shopping", "groceries", "weekly"]}
          lastEdited="Yesterday"
          color="green"
        />


        <Editable_34
          initialContent="## Vacation Ideas\n\n### Summer Trip\n- Barcelona, Spain\n- Greek Islands\n- Amalfi Coast, Italy\n\n### Winter Getaway\n- Swiss Alps\n- Banff, Canada\n- Kyoto, Japan\n\nNeed to research flight prices and accommodation options."
          onSave={handleSave}
          title="Travel Planning"
          category="Personal"
          tags={["travel", "vacation", "planning"]}
          lastEdited="1 week ago"
          color="yellow"
        />
      </div>
    </div>
  );
}
