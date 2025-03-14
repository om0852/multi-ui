"use client";

import React from "react";
import { Editable_45 } from "../_components/Editable_45";

export default function Example_45() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">E-commerce Analytics</h1>
        <p className="text-gray-600">
          Monitor your online store&apos;s performance metrics
        </p>
      </div>

      <Editable_45
        initialContent="E-commerce Performance Dashboard"
        onSave={handleSave}
        className="min-h-[800px]"
        charts={[
          {
            id: "1",
            title: "Sales Revenue",
            type: "line",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "2024",
                  data: [45000, 52000, 49000, 58000, 55000, 62000],
                  color: "#3B82F6"
                },
                {
                  label: "2023",
                  data: [38000, 42000, 40000, 45000, 43000, 48000],
                  color: "#9CA3AF"
                }
              ]
            },
            period: "30d",
            comparison: {
              value: 62000,
              change: 29.2,
              trend: "up"
            }
          },
          {
            id: "2",
            title: "Order Volume",
            type: "bar",
            data: {
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Orders",
                  data: [120, 145, 132, 158, 142, 165, 138],
                  color: "#10B981"
                }
              ]
            },
            period: "7d",
            comparison: {
              value: 1000,
              change: 15.5,
              trend: "up"
            }
          },
          {
            id: "3",
            title: "Customer Acquisition",
            type: "pie",
            data: {
              labels: ["Organic Search", "Social Media", "Email", "Referral"],
              datasets: [
                {
                  label: "Sources",
                  data: [40, 25, 20, 15],
                  color: "#6366F1"
                }
              ]
            },
            period: "30d"
          },
          {
            id: "4",
            title: "Average Order Value",
            type: "area",
            data: {
              labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
              datasets: [
                {
                  label: "AOV",
                  data: [85, 92, 88, 95],
                  color: "#F59E0B"
                }
              ]
            },
            period: "30d",
            comparison: {
              value: 95,
              change: 11.8,
              trend: "up"
            }
          }
        ]}
      />
    </div>
  );
}
