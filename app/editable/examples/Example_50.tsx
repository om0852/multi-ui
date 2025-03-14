"use client";

import React from "react";
import { Editable_50 } from "../_components/Editable_50";

export default function Example_50() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Course Catalog</h1>
        <p className="text-gray-600">
          Browse and filter through our collection of online courses
        </p>
      </div>

      <Editable_50
        initialContent="Online Learning Platform Courses"
        onSave={handleSave}
        className="min-h-[800px]"
        filters={[
          {
            id: "category",
            type: "select",
            label: "Subject Area",
            options: [
              { value: "all", label: "All Subjects" },
              { value: "programming", label: "Programming", count: 156 },
              { value: "data-science", label: "Data Science", count: 98 },
              { value: "web-dev", label: "Web Development", count: 124 },
              { value: "mobile-dev", label: "Mobile Development", count: 76 },
              { value: "devops", label: "DevOps", count: 45 }
            ]
          },
          {
            id: "level",
            type: "radio",
            label: "Difficulty Level",
            options: [
              { value: "all", label: "All Levels" },
              { value: "beginner", label: "Beginner", count: 245 },
              { value: "intermediate", label: "Intermediate", count: 167 },
              { value: "advanced", label: "Advanced", count: 87 }
            ]
          },
          {
            id: "features",
            type: "checkbox",
            label: "Course Features",
            options: [
              { value: "certificate", label: "Certificate Included", count: 312 },
              { value: "projects", label: "Hands-on Projects", count: 289 },
              { value: "mentoring", label: "1-on-1 Mentoring", count: 156 },
              { value: "community", label: "Community Access", count: 245 }
            ]
          },
          {
            id: "duration",
            type: "range",
            label: "Course Length",
            range: {
              min: 0,
              max: 40,
              step: 5,
              unit: "hours"
            }
          }
        ]}
        results={[
          {
            id: "1",
            title: "Full Stack Web Development Bootcamp",
            description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and deploy them to the cloud.",
            category: "web-dev",
            tags: ["javascript", "react", "node", "projects"],
            image: "https://picsum.photos/400/225?random=4",
            metadata: {
              duration: 35,
              students: 12543,
              rating: 4.8,
              price: 199
            },
            relevanceScore: 0.98,
            timestamp: "2024-03-18T09:00:00"
          },
          {
            id: "2",
            title: "Machine Learning Fundamentals",
            description: "Learn the basics of machine learning, including supervised and unsupervised learning, with Python and scikit-learn.",
            category: "data-science",
            tags: ["python", "ml", "data", "certificate"],
            image: "https://picsum.photos/400/225?random=5",
            metadata: {
              duration: 25,
              students: 8765,
              rating: 4.7,
              price: 149
            },
            relevanceScore: 0.95,
            timestamp: "2024-03-17T14:30:00"
          },
          {
            id: "3",
            title: "iOS App Development with Swift",
            description: "Build iOS applications using Swift and SwiftUI. Create engaging user interfaces and integrate with backend services.",
            category: "mobile-dev",
            tags: ["ios", "swift", "mobile", "projects"],
            image: "https://picsum.photos/400/225?random=6",
            metadata: {
              duration: 30,
              students: 6432,
              rating: 4.9,
              price: 179
            },
            relevanceScore: 0.92,
            timestamp: "2024-03-16T11:15:00"
          },
          {
            id: "4",
            title: "DevOps Engineering Professional",
            description: "Master DevOps practices including CI/CD, containerization, and cloud infrastructure with AWS and Docker.",
            category: "devops",
            tags: ["aws", "docker", "jenkins", "mentoring"],
            image: "https://picsum.photos/400/225?random=7",
            metadata: {
              duration: 40,
              students: 4321,
              rating: 4.6,
              price: 299
            },
            relevanceScore: 0.89,
            timestamp: "2024-03-15T16:45:00"
          },
          {
            id: "5",
            title: "Python for Data Analysis",
            description: "Learn data analysis with Python using pandas, NumPy, and Matplotlib. Work with real-world datasets and create visualizations.",
            category: "data-science",
            tags: ["python", "data", "visualization", "certificate"],
            image: "https://picsum.photos/400/225?random=8",
            metadata: {
              duration: 20,
              students: 9876,
              rating: 4.8,
              price: 129
            },
            relevanceScore: 0.94,
            timestamp: "2024-03-14T13:20:00"
          }
        ]}
      />
    </div>
  );
}
