"use client";

import React from "react";
import { Editable_48 } from "../_components/Editable_48";

export default function Example_48() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Application</h1>
        <p className="text-gray-600">
          Complete the form below to apply for the position
        </p>
      </div>

      <Editable_48
        initialContent="Job Application Form"
        onSave={handleSave}
        className="min-h-[800px]"
        steps={[
          {
            id: "personal",
            title: "Personal Details",
            description: "Tell us about yourself",
            fields: [
              {
                id: "fullName",
                type: "text",
                label: "Full Name",
                placeholder: "John Smith",
                required: true,
                validation: {
                  minLength: 2,
                  maxLength: 50
                }
              },
              {
                id: "email",
                type: "email",
                label: "Email Address",
                placeholder: "john.smith@example.com",
                required: true,
                validation: {
                  pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                }
              },
              {
                id: "phone",
                type: "text",
                label: "Phone Number",
                placeholder: "+1 (555) 000-0000",
                required: true,
                validation: {
                  pattern: "^\\+?[1-9]\\d{1,14}$"
                }
              },
              {
                id: "location",
                type: "text",
                label: "Current Location",
                placeholder: "City, Country",
                required: true
              }
            ]
          },
          {
            id: "experience",
            title: "Professional Experience",
            description: "Share your work history and skills",
            fields: [
              {
                id: "currentRole",
                type: "text",
                label: "Current/Most Recent Role",
                placeholder: "Software Engineer at Tech Corp",
                required: true
              },
              {
                id: "yearsExperience",
                type: "select",
                label: "Years of Experience",
                required: true,
                options: [
                  { value: "0-2", label: "0-2 years" },
                  { value: "3-5", label: "3-5 years" },
                  { value: "6-8", label: "6-8 years" },
                  { value: "9+", label: "9+ years" }
                ]
              },
              {
                id: "skills",
                type: "textarea",
                label: "Key Skills",
                placeholder: "List your relevant technical and soft skills",
                required: true,
                validation: {
                  minLength: 50,
                  maxLength: 500
                }
              }
            ]
          },
          {
            id: "position",
            title: "Position Details",
            description: "Tell us about the role you're applying for",
            fields: [
              {
                id: "desiredRole",
                type: "select",
                label: "Position Applied For",
                required: true,
                options: [
                  { value: "frontend", label: "Frontend Developer" },
                  { value: "backend", label: "Backend Developer" },
                  { value: "fullstack", label: "Full Stack Developer" },
                  { value: "devops", label: "DevOps Engineer" },
                  { value: "mobile", label: "Mobile Developer" }
                ]
              },
              {
                id: "workType",
                type: "radio",
                label: "Preferred Work Type",
                required: true,
                options: [
                  { value: "remote", label: "Remote" },
                  { value: "hybrid", label: "Hybrid" },
                  { value: "onsite", label: "On-site" }
                ]
              },
              {
                id: "startDate",
                type: "text",
                label: "Available Start Date",
                placeholder: "MM/YYYY",
                required: true,
                validation: {
                  pattern: "^(0[1-9]|1[0-2])\\/20[2-9][0-9]$"
                }
              }
            ]
          },
          {
            id: "additional",
            title: "Additional Information",
            description: "Any other details you'd like to share",
            fields: [
              {
                id: "portfolio",
                type: "text",
                label: "Portfolio URL",
                placeholder: "https://your-portfolio.com",
                validation: {
                  pattern: "^https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$"
                }
              },
              {
                id: "linkedin",
                type: "text",
                label: "LinkedIn Profile",
                placeholder: "https://linkedin.com/in/your-profile",
                validation: {
                  pattern: "^https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$"
                }
              },
              {
                id: "references",
                type: "checkbox",
                label: "References",
                options: [
                  { value: "contact", label: "OK to contact my references" },
                  { value: "current", label: "OK to contact my current employer" }
                ]
              }
            ],
            isOptional: true
          }
        ]}
      />
    </div>
  );
}
