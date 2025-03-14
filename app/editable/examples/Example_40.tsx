"use client";

import React from "react";
import { Editable_40 } from "../_components/Editable_40";

export default function Example_40() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">
          Monitor key performance metrics and trends
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Editable_40
          initialContent="Website Performance Analytics"
          onSave={handleSave}
          title="Website Performance"
          metrics={[
            {
              id: "1",
              name: "Page Views",
              value: 245789,
              change: 15.8,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 10000) + 5000,
              })),
            },
            {
              id: "2",
              name: "Bounce Rate",
              value: 42.5,
              change: -3.2,
              trend: "down",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 10) + 35,
              })),
            },
            {
              id: "3",
              name: "Avg. Session Duration",
              value: 4.2,
              change: 0.8,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 2) + 3,
              })),
            },
          ]}
          chartType="area"
        />

        <Editable_40
          initialContent="User Engagement Metrics"
          onSave={handleSave}
          title="User Engagement"
          metrics={[
            {
              id: "1",
              name: "Active Users",
              value: 85432,
              change: 8.9,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 5000) + 70000,
              })),
            },
            {
              id: "2",
              name: "Comments",
              value: 12567,
              change: 5.4,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 1000) + 10000,
              })),
            },
            {
              id: "3",
              name: "Shares",
              value: 3890,
              change: -1.2,
              trend: "down",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 500) + 3000,
              })),
            },
          ]}
          chartType="line"
        />

        <Editable_40
          initialContent="Revenue Analytics"
          onSave={handleSave}
          title="Revenue Performance"
          metrics={[
            {
              id: "1",
              name: "Total Revenue",
              value: 458920,
              change: 12.4,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 50000) + 400000,
              })),
            },
            {
              id: "2",
              name: "Avg. Order Value",
              value: 125.8,
              change: 3.5,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 20) + 115,
              })),
            },
            {
              id: "3",
              name: "Refund Rate",
              value: 2.1,
              change: -0.3,
              trend: "down",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 1) + 1.5,
              })),
            },
          ]}
          chartType="bar"
        />

        <Editable_40
          initialContent="Marketing Campaign Analytics"
          onSave={handleSave}
          title="Marketing Performance"
          metrics={[
            {
              id: "1",
              name: "Conversion Rate",
              value: 5.8,
              change: 1.2,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 2) + 4,
              })),
            },
            {
              id: "2",
              name: "Cost per Click",
              value: 1.25,
              change: -0.15,
              trend: "down",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 0.5) + 1,
              })),
            },
            {
              id: "3",
              name: "ROI",
              value: 324.5,
              change: 15.8,
              trend: "up",
              data: Array.from({ length: 30 }, (_, i) => ({
                date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                value: Math.floor(Math.random() * 50) + 300,
              })),
            },
          ]}
          chartType="line"
        />
      </div>
    </div>
  );
}
