"use client";

import React from "react";
import { Editable_43 } from "../_components/Editable_43";

type SampleData = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
};

type DataTableColumn<T> = {
  key: keyof T;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
};

export default function Example_43() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  const data: SampleData[] = [
    {
      id: "1",
      name: "Introduction to Web Development",
      email: "john@example.com",
      role: "Course",
      status: "active",
      lastActive: "2024-04-01T09:00:00",
    },
    {
      id: "2",
      name: "Advanced Frontend Development",
      email: "sarah@example.com",
      role: "Course",
      status: "pending",
      lastActive: "2024-05-15T09:00:00",
    },
    {
      id: "3",
      name: "Backend Development with Node.js",
      email: "michael@example.com",
      role: "Course",
      status: "inactive",
      lastActive: "2024-03-01T09:00:00",
    },
    {
      id: "4",
      name: "Full Stack Project",
      email: "emily@example.com",
      role: "Course",
      status: "pending",
      lastActive: "2024-06-01T09:00:00",
    },
  ];

  const columns: DataTableColumn<SampleData>[] = [
    { key: "name", title: "Course Name", sortable: true, filterable: true },
    { key: "email", title: "Contact", sortable: true, filterable: true },
    { key: "role", title: "Type", sortable: true, filterable: true },
    {
      key: "status",
      title: "Status",
      sortable: true,
      filterable: true,
      render: (value) => {
        const status = value as SampleData["status"];
        const colors = {
          active: "bg-green-100 text-green-800",
          inactive: "bg-gray-100 text-gray-800",
          pending: "bg-yellow-100 text-yellow-800",
        };
        return (
          <span className={`px-2 py-1 text-xs rounded-full ${colors[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      key: "lastActive",
      title: "Start Date",
      sortable: true,
      render: (value) => new Date(value as string).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Course Management</h1>
        <p className="text-gray-600">
          Manage and track course offerings with detailed information
        </p>
      </div>

      <Editable_43
        initialContent="Course Management System"
        onSave={handleSave}
        data={data}
        columns={columns}
        itemsPerPage={5}
        className="bg-white rounded-xl shadow-lg"
      />
    </div>
  );
}
