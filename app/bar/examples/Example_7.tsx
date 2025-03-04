"use client";

import React, { useState } from "react";
import { ProgressBarChart } from "../_components/Bar_7";

export default function BarExample7() {
  // Sample data for project completion
  const projectData = [
    { label: "Research & Planning", value: 100 },
    { label: "Design Phase", value: 85 },
    { label: "Development", value: 65 },
    { label: "Testing", value: 40 },
    { label: "Deployment", value: 10 },
  ];

  // Sample data for skill proficiency
  const skillData = [
    { label: "JavaScript", value: 90 },
    { label: "React", value: 85 },
    { label: "TypeScript", value: 75 },
    { label: "Node.js", value: 70 },
    { label: "GraphQL", value: 60 },
    { label: "Python", value: 50 },
  ];

  // Sample data for team performance
  const teamData = [
    { label: "Team Alpha", value: 95 },
    { label: "Team Beta", value: 88 },
    { label: "Team Gamma", value: 76 },
    { label: "Team Delta", value: 82 },
  ];

  // State to manage which dataset to display
  const [activeDataset, setActiveDataset] = useState<'project' | 'skill' | 'team'>('project');

  // Function to determine which data to display
  const getActiveData = () => {
    switch (activeDataset) {
      case 'project': return projectData;
      case 'skill': return skillData;
      case 'team': return teamData;
      default: return projectData;
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Progress Bar Chart</h2>
      
      {/* Dataset Selection */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button 
          onClick={() => setActiveDataset('project')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'project' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Project Progress
        </button>
        <button 
          onClick={() => setActiveDataset('skill')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'skill' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Skill Proficiency
        </button>
        <button 
          onClick={() => setActiveDataset('team')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'team' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Team Performance
        </button>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {activeDataset === 'project' && 'Project Completion Status'}
          {activeDataset === 'skill' && 'Developer Skill Proficiency'}
          {activeDataset === 'team' && 'Team Performance Metrics'}
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <ProgressBarChart data={getActiveData()} />
        </div>
        <p className="mt-4 text-gray-300">
          {activeDataset === 'project' && 'This chart shows the completion status of different phases in a software development project. Hover over each bar to see the exact percentage.'}
          {activeDataset === 'skill' && 'This chart displays proficiency levels across various programming languages and technologies. Hover over each bar to see the exact percentage.'}
          {activeDataset === 'team' && 'This chart compares performance metrics across different teams. Hover over each bar to see the exact percentage.'}
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Animated progress bars with smooth entrance effects</li>
          <li>Interactive hover tooltips showing exact percentage values</li>
          <li>Clean and modern design with rounded corners</li>
          <li>Descriptive labels for each progress bar</li>
          <li>Responsive layout that adapts to container width</li>
          <li>Simple API requiring only label and value pairs</li>
        </ul>
      </section>

      {/* Use Cases */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Common Use Cases</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Progress bar charts are versatile and can be used for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Project management dashboards to track completion status</li>
            <li>Skill assessment and proficiency visualization</li>
            <li>Goal tracking and achievement metrics</li>
            <li>Survey results and satisfaction scores</li>
            <li>Performance evaluations and benchmarking</li>
            <li>Loading indicators for multi-step processes</li>
          </ul>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with label and value properties
// Value should be a number between 0 and 100 representing percentage

<ProgressBarChart
  data={[
    { label: "Task 1", value: 75 },
    { label: "Task 2", value: 50 },
    { label: "Task 3", value: 90 },
    // ...more items
  ]}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 