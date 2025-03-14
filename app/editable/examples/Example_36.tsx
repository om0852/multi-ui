"use client";

import React from "react";
import { Editable_36 } from "../_components/Editable_36";

export default function Example_36() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Team Chat</h1>
        <p className="text-gray-600">
          Collaborate with your team in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editable_36
          initialContent=""
          onSave={handleSave}
          recipientName="Sarah Chen"
          recipientAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          messages={[
            {
              id: "1",
              content: "Hey, how's the authentication system coming along?",
              timestamp: "9:30 AM",
              status: "read",
              type: "text",
              isSent: false
            },
            {
              id: "2",
              content: "Making good progress! Just finished implementing OAuth providers.",
              timestamp: "9:32 AM",
              status: "read",
              type: "text",
              isSent: true
            },
            {
              id: "3",
              content: "Here's the documentation for the social login flow.",
              timestamp: "9:33 AM",
              status: "delivered",
              type: "file",
              fileUrl: "#",
              fileName: "social-login-flow.pdf",
              isSent: true
            }
          ]}
          isTyping={true}
        />

        <Editable_36
          initialContent=""
          onSave={handleSave}
          recipientName="Michael Lee"
          recipientAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
          messages={[
            {
              id: "1",
              content: "I've reviewed the UI components you created.",
              timestamp: "10:15 AM",
              status: "read",
              type: "text",
              isSent: false
            },
            {
              id: "2",
              content: "Thanks! Any feedback on the responsive design?",
              timestamp: "10:16 AM",
              status: "read",
              type: "text",
              isSent: true
            },
            {
              id: "3",
              content: "Here are my suggestions for improvements.",
              timestamp: "10:18 AM",
              status: "read",
              type: "file",
              fileUrl: "#",
              fileName: "ui-feedback.docx",
              isSent: false
            }
          ]}
        />

        <Editable_36
          initialContent=""
          onSave={handleSave}
          recipientName="David Kim"
          recipientAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
          messages={[
            {
              id: "1",
              content: "The database optimization is complete.",
              timestamp: "11:00 AM",
              status: "read",
              type: "text",
              isSent: false
            },
            {
              id: "2",
              content: "Great! What's the performance improvement?",
              timestamp: "11:02 AM",
              status: "read",
              type: "text",
              isSent: true
            },
            {
              id: "3",
              content: "Performance metrics report",
              timestamp: "11:05 AM",
              status: "delivered",
              type: "file",
              fileUrl: "#",
              fileName: "performance-report.xlsx",
              isSent: false
            }
          ]}
        />

        <Editable_36
          initialContent=""
          onSave={handleSave}
          recipientName="Emma Garcia"
          recipientAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
          messages={[
            {
              id: "1",
              content: "API documentation is ready for review.",
              timestamp: "2:00 PM",
              status: "read",
              type: "text",
              isSent: false
            },
            {
              id: "2",
              content: "Perfect timing! I'll take a look now.",
              timestamp: "2:01 PM",
              status: "read",
              type: "text",
              isSent: true
            },
            {
              id: "3",
              content: "OpenAPI specification document",
              timestamp: "2:03 PM",
              status: "sent",
              type: "file",
              fileUrl: "#",
              fileName: "api-spec.yaml",
              isSent: false
            }
          ]}
        />
      </div>
    </div>
  );
}
