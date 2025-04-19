"use client";

import React, { useState, useRef, useEffect } from "react";
import { ProgressBarChart } from "../tsx/Bar_7";

export default function BarExample7() {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Responsive Bar Chart</h2>
      
      {/* Dataset Selection */}
      <div className={`mb-6 ${isCompact ? 'flex flex-col' : 'flex flex-wrap'} gap-2`}>
        <button 
          onClick={() => setActiveDataset('project')}
          className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
            activeDataset === 'project' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {isCompact ? 'Projects' : 'Project Progress'}
        </button>
        <button 
          onClick={() => setActiveDataset('skill')}
          className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
            activeDataset === 'skill' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {isCompact ? 'Skills' : 'Skill Proficiency'}
        </button>
        <button 
          onClick={() => setActiveDataset('team')}
          className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
            activeDataset === 'team' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {isCompact ? 'Teams' : 'Team Performance'}
        </button>
      </div>
      
      {/* Chart Display */}
      <section>
        <h3 className="text-base text-black sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 truncate">
          {activeDataset === 'project' && 'Project Completion Status'}
          {activeDataset === 'skill' && 'Developer Skill Proficiency'}
          {activeDataset === 'team' && 'Team Performance Metrics'}
        </h3>
        <div className="bg-gray-700 p-3 sm:p-4 md:p-6 rounded-lg">
          <div className="w-full h-[auto] sm:h-[400px] md:h-[500px]">
            <ProgressBarChart data={getActiveData()} />
          </div>
        </div>
      </section>
    </div>
  );
} 