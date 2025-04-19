"use client";

import React from "react";
import { SlideEditContainer } from "../tsx/Editable_9";

export default function Example_9() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Technical Documentation</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Project Overview</label>
          <SlideEditContainer
            initialContent={`# Project Name: Analytics Dashboard

## Description
A real-time analytics dashboard built with React and D3.js for visualizing user engagement metrics.

## Key Features
- Real-time data updates
- Customizable widgets
- Export capabilities
- User role management`}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Installation Guide</label>
          <SlideEditContainer
            initialContent={`## Prerequisites
- Node.js v18+
- npm or yarn
- MongoDB

## Setup Steps
1. Clone the repository
2. Install dependencies: \`npm install\`
3. Configure environment variables
4. Start development server: \`npm run dev\`

## Environment Configuration
Copy \`.env.example\` to \`.env\` and update the following:
- \`DATABASE_URL\`
- \`API_KEY\`
- \`PORT\``}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">API Documentation</label>
          <SlideEditContainer
            initialContent={`## Authentication

### POST /api/auth/login
Authenticate user and receive JWT token.

**Request Body:**
\`\`\`json
{
  "email": "string",
  "password": "string"
}
\`\`\`

**Response:**
\`\`\`json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "role": "string"
  }
}
\`\`\``}
            onSave={handleSave}
            className="min-h-[200px] p-4 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
